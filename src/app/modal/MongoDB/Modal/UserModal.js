import mongoose from 'mongoose'
import slug from 'mongoose-slug-generator'
import mongoose_delete from 'mongoose-delete'
import sequence from 'mongoose-sequence'

const autoIncre = sequence(mongoose)
const Schema = mongoose.Schema

const UserModal = new Schema({
    userName: String,
    password: { type: String, min: 5 },
    email: String,
    stt: Number,
    slug: { type: String, slug: 'userName', unique: true }
}, {
    // Create field createdAt,updatedAt
    timestamps: true
})
// Config Plugin
UserModal.plugin(slug)
UserModal.plugin(autoIncre, { inc_field: 'stt' })
// OverrideMethod, create deleteAt
UserModal.plugin(mongoose_delete, {
    overrideMethods: 'all',
    deletedAt: true
})
// Create a prototype
UserModal.query.sortable = function (req) {
    if (req.query.hasOwnProperty('sort')) {
        return this.sort({
            [req.query.column]: req.query.type
        })
    }
    return this
}
export default mongoose.model('user', UserModal)