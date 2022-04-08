import axios from "axios";

import { useQuery } from "react-query";

const baseURL = process.env.REACT_APP_SWAPI_ADDRESS;

export const useQueryGetFilms = (options = {}) =>
  useQuery(
    "getFilms",
    () => axios.get(`${baseURL}/films`).then(({ data }) => data.results),
    { retry: false, ...options }
  );
