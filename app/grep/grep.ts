import { readFileSync } from "fs";

const args = process.argv.slice(2);

const filenames = args[0];
const searchString = args[1];

const content = readFileSync(filenames, "utf-8");
const lines = content.split("\n");

for (let i = 0; i < lines.length; i++) {
  if (lines[i].includes(searchString)) {
    console.log(lines[i]);
  }
}
