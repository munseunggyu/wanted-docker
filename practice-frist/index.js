const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Docker Practice");
});

app.listen(8080, () => console.log("Server is Running..."));
