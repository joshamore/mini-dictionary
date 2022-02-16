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

/**
 * A helper function to convert a string to a key
 *
 * @param {string} str The string to be modified.
 */
export const convertStringToKey = (str: string) => {
  // Replacing spaces with dashes.
  let key = str.replace(/\s/g, "-");

  if (key.length > 21) {
    // Truncating key to 20 characters.
    key = key.substring(0, 20);
  }

  return key;
};
