class SiteController {
  //[GET] /news
  index(req, res) {
    res.render('home');
  }

  // [GET] /news/:slug  // slug là 1 biến động
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();

const siteController = require('./SiteController');
