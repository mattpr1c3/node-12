const express = require("express");
const path = require("path");

const app = express();
const PORT = 3001;

app.use(express.static("public"));

// TODO: Invoke app.use() and serve static files from the '/public' folder

app.get("/", (req, res) => res.send("Navigate to /send or /routes"));

app.get("/send", (req, res) =>
  res.sendFile(path.join(__dirname, "public/send.html"))
);

// TODO: Create a route that will serve up the `public/paths.html` page

app.get("/paths", (req, res) =>
  res.sendFile(path.join(__dirname, "public/paths.html"))
);

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
