import axios from "axios";

import { useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useMutationAuth = (options = {}) =>
  useMutation((authData) => axios.post(`${BASE_URL}/auth`, authData), options);
