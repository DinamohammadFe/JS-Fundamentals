// 8-square.js

const size = parseInt(process.argv[2]);

if (!size || size < 0) {
  console.log("Missing size");
} else {
  let line = "";
  for (let i = 0; i < size; i++) {
    line += "X";
  }
  for (let j = 0; j < size; j++) {
    console.log(line);
  }
}
