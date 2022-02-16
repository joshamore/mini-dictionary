import axios from "axios";

import { API_URL } from "./constants";

interface FetchReturn {
  data: any[] | null;
  error: {
    message: string | null;
  };
}
/**
 * Fetcher function to request words from the server.
 *
 * @param {string} word The word requiring definitions.
 *
 * @returns {Promise<FetchReturn>}
 */
export const fetchDictionaryWords = async (
  word: string
): Promise<FetchReturn> => {
  try {
    const response = await axios.get(`${API_URL}${word}`);
    return { data: response.data, error: { message: null } };
  } catch (error: any) {
    // Extracting error message from possible formats. Attempting dictionaryapi format first.
    const errorMessage =
      error?.response?.data?.message ||
      error?.message ||
      `Unable to get definitions for ${word}`;

    return {
      data: null,
      error: { message: errorMessage },
    };
  }
};
