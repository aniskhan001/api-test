let express = require('express');

let app = express();
let PORT = 3000;

app.use('/users', require('./api/router'));

app.listen(PORT);
console.log('API working on PORT: ' + PORT);
