var fs = require("fs");
var express = require("express");
var path = require("path");
// npm i express and path
var PORT = 8080;
var note = fs.readFileSync("./Develop/db/db.json", "UTF-8");

if (note) {
  note = JSON.parse(note);
} else {
  note = [];
}
var app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('Develop/public'));
app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "Develop/public/notes.html"));
});
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/Develop/public/index.html"));
});

app.get("/api/notes", function (req, res) {
  return res.json(note);
});

function assignId() {
  console.log(id);
  for (var i = 0; i < note.length; i++) {
    note[i] = i;
  };
}


app.post("/api/notes", function (req, res) {
  var newNote = req.body;
  note.push(newNote);
  fs.writeFileSync("./Develop/db/db.json", JSON.stringify(note, null, 2));
});

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
