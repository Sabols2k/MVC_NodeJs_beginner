const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose');
class CourseController {
  //[GET] /search
  show(req, res, next) {
    Course.findOne({slug: req.params.slug})
      .then(course =>{
        res.render('courses/show', {course: mongooseToObject(course)});  //{course để truyền dữ liệu sang view}
      })
      .catch(next);
  }
}
module.exports = new CourseController();

// const courseController = require('./CourseController');
