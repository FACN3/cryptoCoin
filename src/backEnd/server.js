const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const router = require('./router');

const app = express();
app.use(express.static(path.resolve(__dirname, "../..","public")))
app.use(bodyParser.json());

app.use("/api", router);
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, '../..', 'index.html'));
});

app.listen(8080, () => console.log('on 8080'));
