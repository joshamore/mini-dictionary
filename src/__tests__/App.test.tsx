import { render } from "@testing-library/react";

import App from "../App";

// Test to see if the App component renders without crashing.
test("App renders without crashing", () => {
  render(<App />);
});
