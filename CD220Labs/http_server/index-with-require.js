const http = require("http");
const today = require("./today");

const requestListener = function (req, res) {
  res.writeHead(200);
  var hour = today.getDate().getHours();
  var greeting = "";
  if (hour > 6 && hour < 12) {
    greeting = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    greeting = "Good afternoon";
  } else if (hour >= 18 && hour < 21) {
    greeting = "Good evening";
  } else if (hour >= 21 && hour < 24) {
    greeting = "Good night";
  } else {
    greeting = "Good day";
  }
  res.end(`Hello, ${greeting}! Hora: ${hour}`);
};

const port = 8080;
const server = http.createServer(requestListener);
console.log("server listening on port: " + port);
server.listen(port);
