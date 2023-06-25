import ImageInterface from "./ImageInterface";
import AddressInterface from "./AddressInterface";
import NameInterface from "./NameInterface";

interface UserInterface {
  _id: string;
  name: NameInterface;
  // first: string;
  // middle: string;
  // last: string;
  phone: string;
  email: string;
  password: string;
  image: ImageInterface;
  address: AddressInterface;
  web?: string;
  isBusiness: boolean;
  isAdmin: boolean;
}

export default UserInterface;
