import mongoose from 'mongoose'

async function connectMongo() {
    try {
        await mongoose.connect('mongodb://localhost:27017/Manager-user')
        console.log('Connect MongoDB Successfully!')
    } catch(error) {
        console.log('Connect MongoDB failure!')
    }
}
export default connectMongo