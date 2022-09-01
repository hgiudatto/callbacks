let fs = require("fs");

fs.writeFileSync("out.txt", "this should get written to file at 08:25hs.");
console.log("This should print after previous line.");

fs.writeFile(
  "out.txt",
  "This should be written asynchronously at 08:29hs..",
  (err) => {
    console.log("this is printed after the file is written.");
  }
);
console.log("This should print after previous line.");

let updateLogMetrics = () => {
  console.log("Log Metrics updated successfully");
};
let myLoggerAPI = (logMsg, callback) => {
  fs.writeFile("out.log", logMsg, callback);
};
myLoggerAPI("Log this at 08:20.", (err) => {
  console.log("I just call to myLoggerAPI()");
  // do something with err
  updateLogMetrics();
});
