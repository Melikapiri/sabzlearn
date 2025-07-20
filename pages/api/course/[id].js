import connectionDB from "@/data/connectionDB";
import courseModel from '@/models/course'
import {isValidObjectId} from "mongoose";

const handler = async (req, res) => {
    await connectionDB()

    switch (req.method) {
        case 'DELETE': {
            const {id} = req.query
            if (isValidObjectId(id)) {
                const removeCourse = await courseModel.findOneAndDelete({_id: id})

                if (removeCourse) {
                    res.status(200).json({
                        message: "دوره با موفقیت حذف شد"
                    })
                } else {
                    res.status(500).json({
                        message: "internal server error!"
                    })

                }
            } else {
                res.status(422).json({message: "Course Id Is not valid !"})

            }

            break
        }
        case 'PUT': {
            const {id} = req.query
            const {title} = req.body
            if (isValidObjectId(id)) {
                const updateCourse = await courseModel.findOneAndUpdate({_id: id}, {title,})

                if (updateCourse) {
                    res.status(200).json({
                        message: "Course Update SuccessFully !"
                    })
                } else {
                    res.status(500).json({
                        message: "internal server error!"
                    })
                }
            } else {
                res.status(422).json({message: "Course Id Is notValid !"})
            }

            break
        }
    }
}

export default handler