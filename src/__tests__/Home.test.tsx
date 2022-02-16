import { expect, test } from "@jest/globals";
import { render } from "@testing-library/react";
import { fetchDictionaryWords } from "../helpers/fetchers";

import Home from "../pages/Home";

// Test to see if the Home page renders without crashing.
test("Home renders without crashing should pass", () => {
  render(<Home />);
});

test("Test fake word fetch should fail", async () => {
  const word = "veryfakeword";
  const response = await fetchDictionaryWords(word);
  expect(response.data).toBeNull();
  expect(response.error.message).not.toBeNull();
});

test("Test valid word fetch should pass", async () => {
  const word = "dog";
  const response = await fetchDictionaryWords(word);
  expect(response.data).not.toBeNull();
  expect(response.error.message).toBeNull();
});
