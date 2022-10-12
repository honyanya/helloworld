const fs = require("fs");
const ndjson = require("ndjson");

fs.createReadStream("./src/data.txt")
  .pipe(ndjson.parse())
  .on("data", function (obj) {
    // obj is a javascript object
    console.info(obj);
  });
