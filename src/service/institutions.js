import axios from "axios";

import { useQuery, useMutation } from "react-query";

const BASE_URL = process.env.REACT_APP_API_URL;

export const useQueryListInstitutions = (options = {}) =>
  useQuery(
    ["queryListInstitutions"],
    () => axios.get(`${BASE_URL}/instituicao`).then((result) => result.data),
    options
  );

// export const useMutationAmbients = (options = {}) =>
//   useMutation(
//     (ambientData) =>
//       axios
//         .post(`${BASE_URL}/ambientes`, ambientData)
//         .then((result) => result.data),
//     options
//   );
