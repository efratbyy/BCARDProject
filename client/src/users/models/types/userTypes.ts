export type TokenType = { _id: string; isBusiness: boolean; isAdmin: boolean };

export type LoginType = { email: string; password: string };

export type UserNameType = { first: string; middle?: string; last: string };

export type ImageType = { url?: string; alt?: string };

export type AddressType = {
  state?: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip: number;
};

type UserType = {
  name: UserNameType;
  phone: string;
  email: string;
  password: string;
  isBusiness: boolean;
  image: ImageType;
  address: AddressType;
};

export type RegisterType = {
  first: string;
  middle: string;
  last: string;
  phone: string;
  email: string;
  password: string;
  url: string;
  alt: string;
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip: number;
  isBusiness: boolean;
};

export type UserMapToModelType = {
  _id: string;
  first: string;
  middle: string;
  last: string;
  phone: string;
  email: string;
  password: string;
  url: string;
  alt: string;
  state: string;
  country: string;
  city: string;
  street: string;
  houseNumber: number;
  zip: number;
  isBusiness: boolean;
};

export type NormalizedEditUser = {
  _id?: string;
  name: {
    first: string;
    middle: string;
    last: string;
  };
  phone: string;
  email: string;
  password: string;
  image: {
    url: string;
    alt: string;
  };
  address: {
    state: string;
    country: string;
    city: string;
    street: string;
    houseNumber: number;
    zip: number;
  };
  isBusiness: boolean;
};

export type RegistrationFormErrors = Partial<RegisterType>;

export type UserRegistered = {
  name: {
    first: string;
    middle?: string;
    last: string;
    _id?: string;
  };
  email: string;
  _id: string;
};

export default UserType;
