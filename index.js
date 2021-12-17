const express = require("express");
const app = express();
const port = 5000;

const product = require("./api/product/product");
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Hello from Server" });
});

app.use("/api/product", product);

app.listen(port, () => {
  console.log(`Now listening on port ${port}`);
});
