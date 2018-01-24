const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const authenticate = require('./authMiddleware');
const router = require('./router');

const app = express();

app.use(express.static(path.resolve(__dirname, '../..')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/api", router);
app.get("/*", authenticate, (req, res) => {
  res.sendFile(path.resolve(__dirname, '../..', 'index.html'));
});

app.listen(8080, () => console.log('on 8080'));
