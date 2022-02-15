/**
 * A helper function to extract definitions from a api.dictionaryapi.dev
 * GET response.
 *
 * @param {Array} dictionaryData An array of dictionary responses.
 *
 * @returns {Array} An array of definition strings.
 */
export const extractDefintions = (dictionaryData: any[]) => {
  // Extracting meaninig items and flattening nested arrays.
  const meaningItems = dictionaryData.map((item: any) => item?.meanings).flat();
  // Extracting definition items and flattening nested arrays.
  const definitionItems = meaningItems
    .map((item: any) => item?.definitions)
    .flat();

  // Extracting definition strings
  const dirtyDefinitions = definitionItems.map((item: any) => item?.definition);

  // Removing empty definitions.
  const cleanDefinitions = dirtyDefinitions.filter((item: any) => item);

  return cleanDefinitions;
};
