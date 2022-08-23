const fs = require("fs");
//zip file
const zlib = require("zlib");
//read file
const readStream = fs.createReadStream("./docs/text.txt");
//copy file
const writeStream = fs.createWriteStream("./docs/copy.txt");
//zip file
const compressStream = zlib.createGzip();

// readStream.on("data", (chunk) => {
//   writeStrim.write(chunk);
//   console.log("---------");
//   console.log(chunk.toString());
// });

const handleError = () => {
  console.log("Error!");
  readStream.destroy();
  writeStream.end("Finished with error");
};

//identical
readStream
  .on("error", handleError)
  .pipe(compressStream)
  .pipe(writeStream)
  .on("error", handleError);
