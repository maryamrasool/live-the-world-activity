import axios from "axios";
import { BASE_URL } from "../constants";
import { LoginParams } from "../types/auth";

const login = async ({ identifier, password }: LoginParams) => {
  const res = await axios
    .post(`${BASE_URL}/auth/local`, {
      identifier,
      password,
    })
    .catch((error) => {
      return error.response;
    });
  return res;
};

export { login };
