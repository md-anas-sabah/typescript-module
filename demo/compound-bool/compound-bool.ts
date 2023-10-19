/* eslint-disable */
import { strict as assert } from "assert";

const writing = true;
const reading = !writing; //false

assert.equal(suggestMovie, false);

// Boolean OR
// Pick 1 movie

const rating = 9;
const favoriteMovie = false;

const suggestMovie = rating > 8 || favoriteMovie; //Compound boolean // OR is short-circuiting because it find true in rating > 8 so it will not check further.(it will not check favorite movie is true or false)

assert.equal(suggestMovie, true);

// Boolean AND

const age = 18;
const isTeenager = age >= 13 && age < 20;

assert.equal(isTeenager, true);

// our package

const packageWeight = 30;
const packageLength = 50;
const feeExemption = false;
const extraFee = !feeExemption && (packageWeight > 20 || packageLength > 40);
