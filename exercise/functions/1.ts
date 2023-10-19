// Using functions and template literals, print out your first and last name.
//
// Requirements:
// - Use a single function to generate your first name
// - Use a single function to generate your last name
// - Use a single function to generate your full name by using the other
//   functions
// - Print out your full name using the functions

import { strict as assert } from "assert";

function getFirstName(): string {
  return "John";
}

function getLastName(): string {
  return "Doe";
}

function getFullName(): string {
  let firstName = getFirstName();
  let lastName = getLastName();
  return `${firstName} ${lastName}`;
}

const fullName = getFullName();
console.log(fullName);

assert.strictEqual(fullName, "John Doe");
