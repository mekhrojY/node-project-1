const os = require("os");

// console.log(os.cpus());
console.log("free mem: ", Number(os.freemem())/(1024*1024) + " MB");
// console.log(os.freemem());
// console.log(os.totalmem);
console.log("total mem: " + Number(os.totalmem())/(1024*1024) + " MB");
console.log(os.hostname());
console.log("OS Type: ",os.type());
console.log(os.version());
console.log("Username: ", os.userInfo().username);
console.log(os.machine());
console.log("Platform: ",os.platform());
const http = require("http");
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello world!");
});
server.listen(8080, console.log("Server run!"));
