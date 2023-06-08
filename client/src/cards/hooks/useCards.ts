import { useCallback, useEffect, useMemo, useState } from "react";
import CardInterface from "../models/Interfaces/CardInterface";
import {
  changeLikeStatus,
  createCard,
  deleteCard,
  editCard,
  getCard,
  getCards,
  getMyCards,
} from "../services/cardApi";
import useAxiosInterceptors from "../../hooks/useAxiosInterceptors";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSnack } from "../../provider/SnackbarProvider";
import {
  CardFromClientType,
  CardMapToModelType,
} from "../models/types/cardTypes";
import normalizeCard from "../helpers/normalizations/normalizeCard";
import ROUTES from "../../routes/routesModel";
import normalizeEditCard from "../helpers/normalizations/normalizeEditCard";
import { useUser } from "../../users/providers/UserProvider";

type ErrorType = null | string;
type CardsType = null | CardInterface[];
type CardType = null | CardInterface;

const useCards = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<ErrorType>(null);
  const [cards, setCards] = useState<CardsType>(null);
  const [card, setCard] = useState<CardType>(null);
  const [query, setQuery] = useState<string>("");
  const [filteredCards, setFilter] = useState<CardInterface[] | null>(null);
  const [searchParams] = useSearchParams();

  useAxiosInterceptors();

  const navigate = useNavigate();
  const snack = useSnack();
  const { user } = useUser();

  const requestStatus = (
    loading: boolean,
    errorMessage: ErrorType,
    cards: CardsType,
    card: CardType = null
  ) => {
    setLoading(loading);
    setError(errorMessage);
    setCards(cards);
    setCard(card);
  };

  const handleGetCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getCards();
      requestStatus(false, null, cards);
      return Promise.resolve(cards);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  }, []);

  const handleGetCard = async (cardId: string) => {
    try {
      setLoading(true);
      const card = await getCard(cardId);
      requestStatus(false, null, null, card);
      return card;
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  };

  const handleGetMyCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await getMyCards();
      requestStatus(false, null, cards);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  }, []);

  const handleCreateCard = useCallback(
    async (cardFromClient: CardFromClientType) => {
      try {
        setLoading(true);
        const normalizedCard = normalizeCard(cardFromClient);
        const card = await createCard(normalizedCard);
        requestStatus(false, null, null, card);
        snack("success", "A new business card has been created");
        navigate(ROUTES.MY_CARDS);
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    []
  );

  const handleUpdateCard = useCallback(
    async (cardFromClient: CardMapToModelType) => {
      try {
        setLoading(true);
        const normalizedCard = normalizeEditCard(cardFromClient);
        const cardFomServer = await editCard(normalizedCard);
        requestStatus(false, null, null, cardFomServer);
        snack("success", "The business card has been successfully updated");
        console.log(cardFomServer);
        navigate(ROUTES.MY_CARDS);
      } catch (error) {
        if (typeof error === "string") requestStatus(false, error, null);
      }
    },
    []
  );

  const handleDeleteCard = useCallback(async (cardId: string) => {
    try {
      setLoading(true);
      await deleteCard(cardId);
      snack("success", "The business card has been successfully deleted");
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  }, []);

  const handleLikeCard = useCallback(async (cardId: string) => {
    try {
      //setLoading(true);
      const card = await changeLikeStatus(cardId);
      //const cards = await getCards();
      //requestStatus(false, null, null, card);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  }, []);

  const handleGetFavCards = useCallback(async () => {
    try {
      setLoading(true);
      const cards = await handleGetCards();
      const favCards = cards!.filter(
        (card: CardType) => !!card!.likes.find((id: any) => id === user!._id)
      );
      requestStatus(false, null, favCards);
    } catch (error) {
      if (typeof error === "string") requestStatus(false, error, null);
    }
  }, [user, handleGetCards]);

  useEffect(() => {
    const query = searchParams.get("q");
    if (query != null) {
      setQuery(query);
    } else {
      setQuery("");
    }
  }, [searchParams]);

  // useEffect(() => {
  //   const newQuery =
  //     searchParams.get("q") !== null ? searchParams.get("q") : "";
  //   setQuery((prevQuery) => newQuery || prevQuery);
  // }, [searchParams]);

  useEffect(() => {
    if (cards) {
      setFilter(
        cards.filter(
          (card) =>
            card.title.includes(query) || String(card.bizNumber).includes(query)
        )
      );
    }
  }, [cards, query]);

  const value = useMemo(() => {
    return { isLoading, cards, card, error, filteredCards };
  }, [isLoading, cards, card, error, filteredCards]);

  return {
    value,
    handleGetCards,
    handleGetCard,
    handleGetMyCards,
    handleCreateCard,
    handleUpdateCard,
    handleDeleteCard,
    handleLikeCard,
    handleGetFavCards,
  };
};

export default useCards;

// import { useCallback, useMemo, useState } from "react";
// import CardInterface from "../models/Interfaces/CardInterface";
// import {
//   changeLikeStatus,
//   createCard,
//   deleteCard,
//   editCard,
//   getCard,
//   getCards,
//   getMyCards,
// } from "../services/cardApi";
// import useAxiosInterceptors from "../../hooks/useAxiosInterceptors";
// import { useNavigate } from "react-router-dom";
// import { useSnack } from "../../provider/SnackbarProvider";
// import {
//   CardFromClientType,
//   CardMapToModelType,
// } from "../models/types/cardTypes";
// import normalizeCard from "../helpers/normalizations/normalizeCard";
// import ROUTES from "../../routes/routesModel";
// import normalizeEditCard from "../helpers/normalizations/normalizeEditCard";
// import { useUser } from "../../users/providers/UserProvider";

// type ErrorType = null | string;
// type CardsType = null | CardInterface[];
// type CardType = null | CardInterface;

// // לניהול הכרטיסים custom hook זהו useCards
// // וכדומה snak מנהל את הלוגיקה של התצוגה למשתמש ולוגיקה נוספת כמו מעבר עמוד, הפעלת
// const useCards = () => {
//   const [isLoading, setLoading] = useState(false);
//   const [error, setError] = useState<ErrorType>(null);
//   const [cards, setCards] = useState<CardsType>(null);
//   const [card, setCard] = useState<CardType>(null);

//   useAxiosInterceptors(); //(יתפוס אותה) יירט אותה axios כל בקשה וכל תשובה שתשלח

//   const navigate = useNavigate();
//   const snack = useSnack();
//   const { user } = useUser();

//   // יצירת מטודה שאחראית על מה שיקרה בזמן שליחת הבקשה
//   // handleGetCards מטודה זו בשימוש רק במטודה
//   const requestStatus = (
//     // catch או אם זה try מטודה שהמשתנים שלה ישתנו בהתאם לאם זה
//     loading: boolean,
//     errorMessage: ErrorType,
//     cards: CardsType,
//     card: CardType = null
//   ) => {
//     setLoading(loading);
//     setError(errorMessage);
//     setCards(cards);
//     setCard(card);
//   };

//   // מטודה להבאת כל הכרטיסים
//   const handleGetCards = useCallback(async () => {
//     try {
//       // :במידה ויש הצלחה יקרו הדברים הבאים
//       setLoading(true); // מפעיל את הספינר בזמן המתנה לטעינת הכרטיסים
//       const cards = await getCards(); // ששולחת בקשה לשרת להבאת הכרטיסים ממאגר המידע cardApi.ts-מטודה שהבאתי מ
//       requestStatus(false, null, cards);
//       // מביא את הכרטיסים-cards ,אין הודעת שגיאה-null ,עוצר את הספינר-false :לאחר הבאת הכרטיסים מעדכנת את המשתנים בערכים חדשים
//     } catch (error) {
//       // :במקרה ויש כישלון יקרו הדברים הבאים
//       if (typeof error === "string") requestStatus(false, error, null);
//       // אין כרטיסים להצגה-null ,מציג את הודעת שגיאה-error ,עוצר את הספינר-false :במידה ולא הייתה הצלחה בהבאת הכרטיסים מעדכנת את המשתנים
//       // שתיהן מסוג סטרינג js-גם השגיאה מאקסיוס וגם מ
//       // אם השגיאה היא מסוג מחרוזת תווים אז המשתנים יתעדכנו בהתאם למה שבסוגריים
//     }
//   }, []);

//   // מטודה להבאת כרטיס בודד
//   const handleGetCard = async (cardId: string) => {
//     try {
//       setLoading(true);
//       const card = await getCard(cardId);
//       requestStatus(false, null, null, card);
//       return card;
//     } catch (error) {
//       if (typeof error === "string") requestStatus(false, error, null);
//     }
//   };

//   // מטודה להבאת הכרטיסים שלי
//   const handleGetMyCards = useCallback(async () => {
//     try {
//       setLoading(true);
//       const cards = await getMyCards();
//       requestStatus(false, null, cards);
//     } catch (error) {
//       if (typeof error === "string") requestStatus(false, error, null);
//     }
//   }, []);

//   // מטודה לייצירת כרטיס
//   const handleCreateCard = useCallback(
//     async (cardFromClient: CardFromClientType) => {
//       try {
//         setLoading(true);
//         const normalizedCard = normalizeCard(cardFromClient);
//         const card = await createCard(normalizedCard);
//         requestStatus(false, null, null, card);
//         snack("success", "A new business card has been created");
//         navigate(ROUTES.MY_CARDS);
//       } catch (error) {
//         if (typeof error === "string") requestStatus(false, error, null);
//       }
//     },
//     []
//   );

//   // מטודה לעריכת כרטיס
//   const handleUpdateCard = useCallback(
//     async (cardFromClient: CardMapToModelType) => {
//       try {
//         setLoading(true);
//         const normalizedCard = normalizeEditCard(cardFromClient); // הכטיס שהגיע מהלקוח עובר תהליך נרמול כדי שיהיה בצורה שהשרת מצפה לקבל
//         const cardFomServer = await editCard(normalizedCard);
//         requestStatus(false, null, null, cardFomServer);
//         snack("success", "The business card has been successfully updated");
//         navigate(ROUTES.MY_CARDS);
//       } catch (error) {
//         if (typeof error === "string") requestStatus(false, error, null);
//       }
//     },
//     []
//   );

//   //  // מטודה לעריכת כרטיס
//   //  const handleUpdateCard = useCallback(
//   //   async (cardId:string, cardFromClient: CardMapToModelType) => {
//   //     try {
//   //       setLoading(true);
//   //       // const normalizedCard = normalizeEditCard(cardFromClient);
//   //       const card = await editCard(cardId, cardFromClient);
//   //       requestStatus(false, null, null, card);
//   //       snack("success", "The business card has been successfully updated");
//   //       navigate(ROUTES.MY_CARDS);
//   //     } catch (error) {
//   //       if (typeof error === "string") requestStatus(false, error, null);
//   //     }
//   //   },
//   //   []
//   // );

//   // מטודה למחיקת כרטיס
//   const handleDeleteCard = useCallback(async (cardId: string) => {
//     try {
//       setLoading(true);
//       await deleteCard(cardId);
//       snack("success", "The business card has been successfully deleted");
//     } catch (error) {
//       if (typeof error === "string") requestStatus(false, error, null);
//     }
//   }, []);

//   // מטודה לעשיית לייק לכרטיס
//   const handleLikeCard = useCallback(async (cardId: string) => {
//     try {
//       setLoading(true);
//       const card = await changeLikeStatus(cardId);
//       const cards = await getCards();
//       requestStatus(false, null, cards, card);
//     } catch (error) {
//       if (typeof error === "string") requestStatus(false, error, null);
//     }
//   }, []);

//   const handleGetFavCards = useCallback(async () => {
//     try {
//       setLoading(true);
//       const cards = await handleGetCards();
//       const favCards = cards.filter(
//         (card: CardType) => !!card?.likes.find((id: string) => id === user?._id)
//       );
//       requestStatus(false, null, favCards);
//     } catch (error) {}
//   }, [user]);

//   const value = useMemo(() => {
//     return { isLoading, cards, card, error }; // מטודה שמחזירה לי אובייקט
//   }, [isLoading, cards, card, error]);

//   return {
//     value,
//     handleGetCards,
//     handleGetCard,
//     handleGetMyCards,
//     handleCreateCard,
//     handleUpdateCard,
//     handleDeleteCard,
//     handleLikeCard,
//     handleGetFavCards,
//   }; // הקומפוננטה תחזיר את המשתנים והמטודה הבאים אשר קומפוננטות אחרות יצרכו
// };

// export default useCards;
