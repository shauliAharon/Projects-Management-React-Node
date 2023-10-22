import UserInterface from "../../models/interfaces/UserInterface";
import { RegistrationForm } from "../../models/types/userType";

const mapUserToModel = (user: UserInterface): RegistrationForm => {
  return {
    first: user.name.first,
    middle: user.name.middle!,
    last: user.name.last,
    phone: user.phone,
    email: user.email,
    country: user.address.country,
    city: user.address.city,
    state: user.address.state!,
    street: user.address.street!,
    houseNumber: String(user.address.houseNumber),
    zip: String(user.address.zip),
    password: user.password,
    url: user.image.url,
    alt: user.image.alt,
    isBusiness: user.isBusiness,
    
  };
};

export default mapUserToModel;
