const newsRouter = require('./news');
const coursesRouter = require('./courses');
const siteRouter = require('./site');

function route(app) {
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);

  app.use('/', siteRouter);

  // app.get('/', (req, res) => {
  //     // res.send('Hello World!')
  //     res.render('home');
  // });

  // app.get('/news', (req, res) => {
  //   // res.send('Hello World!')
  //     res.render('news');
  // });

  // app.get('/search', (req, res) => {
  //     // console.log(req.query);
  //     // res.send('Hello World!')
  //     res.render('search');
  // });

  // app.post('/search', (req, res) => {
  //     console.log(req.body);
  //     res.send('');
  // });
}
module.exports = route;
