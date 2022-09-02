import CourseModal from '../modal/MongoDB/Modal/CourseModal.js'
import { convertObject } from '../../util/helper.js'

class CourseControl {
    show(req, res, next) {
        CourseModal.find().then(courses => {
            var newCourses = convertObject(courses)
            res.render('course/courseShow', { newCourses })
        }).catch(next)
    }
    detail(req, res, next) {
        var slug = req.params.slug
        CourseModal.findOne({ slug: slug }).then(course => {
            var newCourse = convertObject(course)
            res.render('course/courseDetail', { newCourse })
        }).catch(next)
    }
}
export default new CourseControl