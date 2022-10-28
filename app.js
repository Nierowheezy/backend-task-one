const express = require("express");
const Router = require("./routers");
const app = express();

const port = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.json());
app.use(Router);

app.listen(port, () =>
  console.log(`connected to mongodb and listening at port ${port}`)
);

if (process.env.NODE_ENV == "production") {
  app.use(express.static("client/build"));
  const path = require("path");
  app.get("*", function (req, res) {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}
