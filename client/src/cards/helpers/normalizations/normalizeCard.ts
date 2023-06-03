import { CardFromClientType } from "../../models/types/cardTypes";

// פונקציה שמקבלת כרטיס מסוג של אובייקט ומחזירה אובייקט מנורמל כפי שהשרת מצפה לקבל
const normalizeCard = (card: CardFromClientType) => {
  return {
    title: card.title,
    subtitle: card.subtitle,
    description: card.description,
    phone: card.phone,
    email: card.email,
    web: card.webUrl,
    image: {
      url: card.imageUrl,
      alt: card.imageAlt,
    },
    address: {
      state: card.state,
      country: card.country,
      city: card.city,
      street: card.street,
      houseNumber: +card.houseNumber,
      zip: +card.zip,
    },
  };
};

export default normalizeCard;
