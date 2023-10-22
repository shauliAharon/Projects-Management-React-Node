import axios from "axios";
import UserType, {
  Login,
  NormalizedEditUser,
  UserRegistered,
} from "../models/types/userType";
import UserInterface from "../models/interfaces/UserInterface";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8181";

export const login = async (user: Login) => {
  try {
    const { data } = await axios.post<string>(`${apiUrl}/users/login`, user);
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};

export const signup = async (normalizedUser: UserType) => {
  try {
    const { data } = await axios.post<UserRegistered>(
      `${apiUrl}/users`,
      normalizedUser
    );
    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
export const EditUser = async (userNormalized: NormalizedEditUser) => {
  try {
    const userToServer = { ...userNormalized };
    const { _id } = userToServer;
    delete userToServer._id;
    const { data } = await axios.put<UserInterface>(
      `${apiUrl}/users/${_id}`,
      userToServer
    );
    return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error)) return Promise.reject(error.message);
    return Promise.reject("An unexpected error occurred!");
  }
};
export const GetUser = async (userId: string) => {
  try {
    const { data } = await axios.get<UserInterface>(
      `${apiUrl}/users/${userId}`
    );

    if (data) return Promise.resolve(data);
  } catch (error) {
    if (axios.isAxiosError(error))
      return Promise.reject("An unexpected error occurred!");
  }
};
