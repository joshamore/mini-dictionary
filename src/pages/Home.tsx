import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

import { extractDefintions } from "../helpers/utils";

import CoreLayout from "../components/core/CoreLayout";
import HomeInputSection from "../components/HomeInputSection";
import HomeDefinitionsSection from "../components/HomeDefinitionsSection";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [definitions, setDefinitions] = useState<string[]>([]);

  /**
   * Handler to fetch definitions from the API.
   *
   * @param {string} word The word that requires definitions.
   */
  const handleGetDefinitions = async (word: string) => {
    // Set loading to update UI
    setLoading(true);

    try {
      const dictionaryReponse = await axios.get(
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
      );
      const dictionaryData = dictionaryReponse?.data;

      // Throwing to catch if no data is returned.
      if (!dictionaryData) {
        throw new Error(`No definition data found for ${word}.`);
      }

      const definitions = extractDefintions(dictionaryData || []);
      setDefinitions(definitions);
    } catch (error: any) {
      // Extracting error message from possible formats. Attempting dictionaryapi format first.
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        `Unable to get definitions for ${word}`;
      toast.error(errorMessage);
    } finally {
      // Set loading to update UI
      setLoading(false);
    }
  };

  /**
   * Handler to clear definitions.
   */
  const handleClearDefinitions = () => setDefinitions([]);

  return (
    <CoreLayout>
      <HomeInputSection
        loading={loading}
        handleGetDefinitions={handleGetDefinitions}
        handleClearDefinitions={handleClearDefinitions}
      />

      <HomeDefinitionsSection
        definitions={definitions}
        handleClearDefinitions={handleClearDefinitions}
      />
    </CoreLayout>
  );
};

export default Home;
