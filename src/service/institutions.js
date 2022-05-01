import axios from "axios";

import { useQuery, useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useQueryListInstitutions = (options = {}) =>
  useQuery(
    ["queryListInstitutions"],
    () => axios.get(`${BASE_URL}/instituicao`).then((result) => result.data),
    options
  );

export const useMutationCreateInstitution = (options = {}) =>
  useMutation(
    (institutionData) =>
      axios
        .post(`${BASE_URL}/instituicao`, institutionData)
        .then((result) => result.data),
    options
  );
