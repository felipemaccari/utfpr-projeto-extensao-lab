import axios from "axios";

import { useQuery } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useQueryListCities = (options = {}) =>
  useQuery(
    ["queryListCities"],
    () => axios.get(`${BASE_URL}/cidade`).then((result) => result.data),
    options
  );
