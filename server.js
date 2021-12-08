var express = require("express");
var app = express();
app.use(express.static("assets"));
app.use(express.static("xopbot"));
app.get("/", function(request, response) {
  response.sendFile(__dirname + "/index.html");
});
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/xopbot/services/redirect/404.html");
});
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});