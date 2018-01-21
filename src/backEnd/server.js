const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./router');

const app = express();
console.log(path.join(__dirname, "../.."));
console.log(express.static(path.resolve(__dirname, "../..","public")));
app.use(express.static(path.resolve(__dirname, "../..","public")))
app.use(bodyParser.json());

app.use("/api", router);
app.get("/*", (req, res) => {
  console.log(req.url);
    res.sendFile(path.resolve(__dirname, '../..', 'index.html'));
});

app.listen(8080, () => console.log('on 8080'));
