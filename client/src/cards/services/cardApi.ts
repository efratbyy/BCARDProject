import axios from "axios";
import CardInterface from "../models/Interfaces/CardInterface";
import { NormalizedEditCard } from "../models/types/cardTypes";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const getCards = async () => {
  try {
    const { data } = await axios.get<CardInterface[]>(`${apiUrl}/cards`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getCard = async (cardId: string) => {
  try {
    const { data } = await axios.get<CardInterface>(
      `${apiUrl}/cards/${cardId}`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const getMyCards = async () => {
  try {
    const { data } = await axios.get<CardInterface[]>(
      `${apiUrl}/cards/my-cards`
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const createCard = async (normalizedCard: object) => {
  try {
    const { data } = await axios.post<CardInterface>(
      `${apiUrl}/cards`,
      normalizedCard
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const editCard = async (normalizedCard: NormalizedEditCard) => {
  try {
    const cardToServer = { ...normalizedCard };
    delete cardToServer._id;
    const { data } = await axios.put<CardInterface>(
      `${apiUrl}/cards/${normalizedCard._id}`,
      cardToServer
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const changeLikeStatus = async (cardId: string) => {
  try {
    const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject(error);
  }
};

export const deleteCard = async (cardId: string) => {
  try {
    const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

// import axios from "axios";
// import CardInterface from "../models/Interfaces/CardInterface";
// import { NormalizedEditCard } from "../models/types/cardTypes";

// // צד הלקוח מאזין לשרת בפורט 8181
// const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

// // קובץ זה הינו לשליחת בקשות לשרת וקבלת תשובות

// // שליחת בקשה לשרת להבאת הכרטיסים
// export const getCards = async () => {
//   // getCards() בשביל להביא את הכרטיסים לקומפוננטות אחרות אצטרך להפעיל בקומפוננטה הרצויה את
//   try {
//     const { data } = await axios.get<CardInterface[]>(`${apiUrl}/cards`);
//     //  מוודא שאכן זה מה שאקבל ts-ו CardInterface זה מה שאני מצפה לקבל-מערך של CardInterface
//     // שבו יש את הכרטיסים שהשרת יביא לי data מחלצים רק את המפתח
//     return Promise.resolve(data);
//     // שמתעסקת עם בקשות א-סנכרוניות ואז אני יכולה להשתמש במידע שמחזירה בצורה א-סנכרונית js זו מחלקה של Promise
//   } catch (error) {
//     // מטודה שבודקת האם השגיאה היא של אקסיוס ובמידה וכן יחזיר לי את השגיאה - isAxiosError
//     if (axios.isAxiosError(error)) return Promise.reject(error.message);
//     // תשלח הודעת שגיאה שלה axios זוהי מטודה של אקסיוס שבמידה והשרת נפל או שיש איתו בעיה אחרת והוא לא יכול להגיב אז isAxiosError
//     // והיא תוצג לי כמו שכתוב בסוגריים js אם השגיאה היא לא של אקסיוס נגיע לחלק הזה שאומר שזו שגיאה של
//     return Promise.reject("An unexpected error occurred!");
//   }
// };
// // מצגיה שגיאה אם כשיש בעיה עם השרת isAxiosError
// // מציגה שגיאה כשיש בעיה עם הקוד עצמו js
// // catch/reject-או בכישלון then/resolve-מסמן את סיומו של תהליך א-סינכרוני שיכול להסתיים בהצלחה Promise

// // בקשה לשרת להבאת כרטיס ספציפי
// export const getCard = async (cardId: string) => {
//   try {
//     const { data } = await axios.get<CardInterface>(
//       `${apiUrl}/cards/${cardId}`
//     );
//     return Promise.resolve(data);
//   } catch (error) {
//     if (axios.isAxiosError(error)) return Promise.reject(error.message);
//     return Promise.reject("An unexpected error occurred!");
//   }
// };

// // בקשה לשרת להבאת הכרטיסים שלי
// export const getMyCards = async () => {
//   try {
//     const { data } = await axios.get<CardInterface[]>(
//       `${apiUrl}/cards/my-cards`
//     );
//     return Promise.resolve(data);
//   } catch (error) {
//     if (axios.isAxiosError(error)) return Promise.reject(error.message);
//     return Promise.reject("An unexpected error occurred!");
//   }
// };

// // בקשה לשרת ליצירת כרטיס
// export const createCard = async (normalizedCard: object) => {
//   try {
//     const { data } = await axios.post<CardInterface>(
//       `${apiUrl}/cards`,
//       normalizedCard
//     );
//     return Promise.resolve(data);
//   } catch (error) {
//     if (axios.isAxiosError(error)) return Promise.reject(error.message);
//     return Promise.reject("An unexpected error occurred!");
//   }
// };

// // בקשה לשרת לעריכת כרטיס
// export const editCard = async (normalizedCard: NormalizedEditCard) => {
//   try {
//     const cardToServer = { ...normalizedCard };
//     delete cardToServer._id;
//     const { data } = await axios.put<CardInterface>(
//       `${apiUrl}/cards/${normalizedCard._id}`,
//       cardToServer
//     );
//     return Promise.resolve(data);
//   } catch (error) {
//     if (axios.isAxiosError(error)) return Promise.reject(error.message);
//     return Promise.reject("An unexpected error occurred!");
//   }
// };

// // בקשה לשרת לשינוי מצב הלייק
// export const changeLikeStatus = async (cardId: string) => {
//   try {
//     const { data } = await axios.patch(`${apiUrl}/cards/${cardId}`);
//     return Promise.resolve(data);
//   } catch (error) {
//     if (axios.isAxiosError(error)) return Promise.reject(error.message);
//     return Promise.reject(error);
//   }
// };

// // בקשה לשרת למחיקת כרטיס
// export const deleteCard = async (cardId: string) => {
//   try {
//     const { data } = await axios.delete(`${apiUrl}/cards/${cardId}`);
//     return Promise.resolve(data);
//   } catch (error) {
//     if (axios.isAxiosError(error)) return Promise.reject(error.message);
//     return Promise.reject("An unexpected error occurred!");
//   }
// };
