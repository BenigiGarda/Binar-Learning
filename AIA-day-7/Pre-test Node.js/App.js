var http = require("http");
var fs = require("fs");

function getHomeHTML(res) {
  fs.readFile("./view/home.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error LMAO");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    }
    res.end();
  });
}
function getCSS(res) {
  fs.readFile("./view/styles.css", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error LMAO");
    } else {
      res.writeHead(200, { "Content-Type": "text/css" });
      res.write(data);
    }
    res.end();
  });
}
function getAboutUsHTML(res) {
  fs.readFile("./view/about_us.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error LMAO");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    }
    res.end();
  });
}
function getHelpHTML(res) {
  fs.readFile("./view/help.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error LMAO");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    }
    res.end();
  });
}
function getContactUsHTML(res) {
  fs.readFile("./view/contact_us.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error LMAO");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    }
    res.end();
  });
}
function getInquiryHTML(res) {
  fs.readFile("./view/inquiry.html", function (error, data) {
    if (error) {
      res.writeHead(404);
      res.write("Error LMAO");
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
    }
    res.end();
  });
}
http
  .createServer(function (req, res) {
    var url = req.url;
    if (url === "/about_us.html") {
      getAboutUsHTML(res);
    } else if (url === "/contact_us.html") {
      getContactUsHTML(res);
    } else if (url === "/" || url === "/home.html") {
      getHomeHTML(res);
    } else if (url === "/help.html") {
      getHelpHTML(res);
    } else if (url === "/inquiry.html") {
      getInquiryHTML(res);
    } else {
      getCSS(res);
    }
  })
  .listen(3000, function () {
    console.log("server start at port 3000");
  });
