import ImageInterface from "../../../projects/models/interfaces/ImageInterface";
import AddressInterface from "./AddressInterface";

interface UserInterfaceEdit  {
  name: { first: string; middle?: string | undefined; last: string };
  phone: string;
  email: string;
  image: ImageInterface;
  address: AddressInterface;
  isBusiness: boolean;
  _id: string;
}
export default UserInterfaceEdit;
