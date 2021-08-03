const fs = require("fs");
// create file
// writeFile will create or over write
fs.writeFile("./new.txt", "This is file created in NodeJs", (err) => {
  if (err) throw err;
  console.log("Done ✅ ");
});
// appendFile will create file
fs.appendFile("newText.txt", "I am text from NodeJs 😎 \n", (err) => {
  if (err) throw err;
  console.log("File is done 👍🏻");
});

// read File
fs.readFile("./longText.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// read file Sync
const data = fs.readFileSync("./longText.txt");
console.log(data.toString());
console.log("reading sync Done ✅");

// rename file
// fs.rename("./hello.txt", "./hey.txt", (err) => {
//   if (err) throw err;
//   console.log("Rename done ✅");
// });

// delete file
// const filePathName = "./something.txt";
// fs.unlink(filePathName, (err) => {
//   if (err) throw err;
//   console.log("File deleted, done ✅");
// });

// copy file
fs.copyFile("./original.txt", "./copyFromOG.txt", (err) => {
  if (err) throw err;
  console.log("Copy file, Done ✅");
});

// open file
// fs flags
// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags
fs.open("newText.txt", "w", (err, data) => {
  if (err) throw err;
  console.log("File is opened, Done ✅");
});

// writeFile will create or over write testFileOne.txt
fs.writeFileSync("./testFileOne.txt", "This is the Test File One \n", (err) => {
  if (err) throw err;
  console.log("writeFile is done ✅");
});

// appendFile -> will create testFileOne and add new text to it without overwriting
fs.appendFile(
  "./testFileOne.txt",
  "New line on every node index.js \n",
  (err) => {
    if (err) throw err;
    console.log("New Line inside testFileOne is create ✅");
  }
);

// readFile will read testFileOne.txt
fs.readFile("./testFileOne.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

// copyFile -> makes a copy of testFileOne
fs.copyFile("./testFileOne.txt", "testFileTwo.txt", (err) => {
  if (err) throw err;
  console.log("Copy from testFileOne -> testFileTwo is done ✅");
});

// open file
// fs flags
// https://nodejs.org/docs/latest-v12.x/api/fs.html#fs_file_system_flags
fs.open("./testFileTwo", "w", (err) => {
  if (err) throw err;
  console.log("testFileTwo is opened ✅");
});
