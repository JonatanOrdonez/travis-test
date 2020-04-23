var express = require('express');
var app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});