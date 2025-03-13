const data = require("./data.json");
const fs = require("fs");

const data2 = JSON.parse(fs.readFileSync("data.json"));

console.log(data2);
