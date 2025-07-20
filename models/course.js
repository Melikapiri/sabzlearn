import mongoose from "mongoose";

const course = mongoose.Schema({
    title: {
        required: true,
        type:String,
    }
})


// const Course = mongoose.models.Course || mongoose.model("Course", course)
const courseModel = mongoose.models.Course || mongoose.model("Course", course)
export default courseModel