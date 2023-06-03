import React from "react";
import CardInterface from "../models/Interfaces/CardInterface";
import Spinner from "../../components/Spinner";
import Error from "../../components/Error";
import Cards from "./Cards";
import Typography from "@mui/material/Typography";

type Props = {
  isLoading: boolean;
  error: string | null;
  cards: CardInterface[] | null | undefined;
  onDelete: (id: string) => void;
  onLike: (id: string) => void;
};

const CardsFeedback: React.FC<Props> = ({
  isLoading,
  error,
  cards,
  onDelete,
  onLike,
}) => {
  if (isLoading) return <Spinner />;
  if (error) return <Error errorMessage={error} />;
  if (cards && !cards.length)
    return (
      <Typography variant="body1" color="initial">
        Oops, there are no business cards in the database that match the
        parameters you entered!
      </Typography>
    );
  if (cards && cards.length)
    return <Cards cards={cards} onDelete={onDelete} onLike={onLike} />;
  return null;
};

export default CardsFeedback;

// import React from "react";
// import CardInterface from "../models/Interfaces/CardInterface";
// import Spinner from "../../components/Spinner";
// import Error from "../../components/Error";
// import Cards from "./Cards";
// import Typography from "@mui/material/Typography";

// type Props = {
//   isLoading: boolean;
//   error: string | null;
//   cards: CardInterface[] | null | undefined;
//   onDelete: (id: string) => void;
//   onLike: (id: string) => void;
// };

// const CardsFeedback: React.FC<Props> = ({
//   isLoading,
//   error,
//   cards,
//   onDelete,
//   onLike,
// }) => {
//   if (isLoading) return <Spinner />;
//   // אז הקומפוננטה של ספינר תוצג true יקבל את הערך isLoading-במידה ו
//   if (error) return <Error errorMessage={error} />;
//   // תוצג עם השגיאה  שהתקבלה Error במידה ויש שגיאה בהבאת הכרטיסים אז הקומפוננטה של
//   if (cards && !cards.length)
//     // return -במידה ויש הצלחה בהבאת הכרטיסים אבל אין כרטיסים להצגה אז תוצג ההודעה שב
//     return (
//       <Typography variant="body1" color="initial">
//         Oops, there are no business cards in the database that match the
//         parameters you entered!
//       </Typography>
//     );
//   if (cards && cards.length)
//     return <Cards cards={cards} onDelete={onDelete} onLike={onLike} />;
//   // תוצג עם הכרטיסים שקיבלה Cards במידה ויש הצלחה בהבאת הכרטיסים ויש כרטיסים להצגה אז הקומפונטטה של
//   return null; // null לא ייתן הודעת שגיאה אז נחזיר ts-תמיד צריכים להחזיר משהו מהקומפוננטה וכדי ש
//   // אומר שהקומפוננטה לא תציג כלום אך במקרה הזה לא נגיע לעולם לשלב הזה return null
// };

// export default CardsFeedback;
