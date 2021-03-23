const express = require('express');
const path = require('path');
const handlebars = require('express-handlebars');
const morgan = require('morgan');
const app = express();
const port = 3000;

const route = require('./routes');

app.use(express.static(path.join(__dirname, 'public')));

//middleware
app.use(
  express.urlencoded({
    extend: true,
  }),
); //
app.use(express.json()); //

//HTTP logger
// app.use(morgan('combined')); //gửi các request URL

//template engine
app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
  }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

//route init
route(app);

      app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
