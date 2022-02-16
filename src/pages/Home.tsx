import { useState } from "react";
import { toast } from "react-toastify";

import { extractDefintions } from "../helpers/utils";
import { fetchDictionaryWords } from "../helpers/fetchers";

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

    // Getting API response for word.
    const dictionaryReponse = await fetchDictionaryWords(word);

    // Displaying error if no data present.
    if (!dictionaryReponse.data) {
      // Display error message.
      toast.error(dictionaryReponse.error.message);
      setLoading(false);
    }

    const dictionaryData = dictionaryReponse.data;
    const definitions = extractDefintions(dictionaryData || []);
    setDefinitions(definitions);
    setLoading(false);
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
