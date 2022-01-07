const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 5000;

const product = require("./api/product/product");
const location = require("./api/product/location");
const user = require("./api/user");

app.use(bodyParser.json());

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/product", product);
app.use("/api/location", location);

app.use("/api/user", user);


app.get('/', (req, res) => {
  res.json({ 'message': 'ok' });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

