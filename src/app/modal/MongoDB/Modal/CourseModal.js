import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
const Schema = mongoose.Schema

const CourseModal = new Schema({
    name: String,
    image: String,
    description: String,
    slug: { type: String, slug: 'title' },
    video: String
})
// Config Plugin
CourseModal.plugin(slug)
export default mongoose.model('course', CourseModal)