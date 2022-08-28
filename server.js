const express = require('express');
const serveStatic = require("serve-static");
const path = require('path');
const app = express();
var cors = require('cors');
const history = require('connect-history-api-fallback');

var corsOptions ={
  origin : true,
  credentials: true,
  exposedHeaders: ['Content-Length', 'X-Foo', 'X-Bar'],
  optionsSuccessStatus : 200
}

app.use(cors(corsOptions));
app.use(history());
app.use(serveStatic(path.join(__dirname, '')));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log('server is running at port ' + PORT);
})


