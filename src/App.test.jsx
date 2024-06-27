import React from "react";
import { formatDate } from "./App"; // Adjust the import path according to your file structure

describe("formatDate", () => {
  it("returns a string in YYYY-MM-DD format", () => {
    const date = new Date();
    const formattedDate = formatDate(date);

    expect(formattedDate).toBe("20XX-01-01"); // Replace '20XX-01-01' with the expected output for January 1st, 2020
  });

  // Add more test cases to cover different scenarios, such as edge cases or invalid inputs
});
