import ImageInterface from "../../../projects/models/interfaces/ImageInterface";
import AddressInterface from "./AddressInterface";

interface UserInterface {
  name: { first: string; middle?: string | undefined; last: string };
  phone: string;
  email: string;
  password: string;
  image: ImageInterface;
  address: AddressInterface;
  isBusiness: boolean;
  _id: string;
  token?: string;
}
export default UserInterface;
