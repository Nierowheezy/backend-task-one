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
