const fs = require("fs");
const ndjson = require("ndjson");

const filepath = "./src/data.txt";

const stream = ndjson.stringify();
stream.on("data", function (line) {
  // line is a line of stringified JSON with a newline delimiter at the end
  fs.writeFileSync(filepath, line);
});
stream.write({ foo: "bar" });
stream.end();

fs.createReadStream(filepath)
  .pipe(ndjson.parse())
  .on("data", function (obj) {
    // obj is a javascript object
    console.info(obj);
  });
