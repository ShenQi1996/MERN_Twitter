const express = require("express");
const app = express();

//dev:GI3FY6cKioxV46du@cluster0.empd4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Listening on port ${port} `);
});
