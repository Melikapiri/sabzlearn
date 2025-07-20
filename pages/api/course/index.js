import connectionDb from "@/data/connectionDB"
import courseModel from '@/models/course'

const userHandler = async (req, res) => {
    await connectionDb()

    if (req.query.q) {
        const search = await courseModel.find({title: {$regex: req.query.q}})
        return res.status(200).json(search)
    }


    switch (req.method) {
        case "GET": {
            const allCourse = await courseModel.find()
            res.json(allCourse)

            break
        }
        case 'POST': {
            const {title} = req.body
            const addNewCourse = await courseModel.create({title})
            if (addNewCourse) {
                return res.status(201).json({
                    message: "دوره با موفقیت اضافه شد "
                })
            }
        }

    }
}

export default userHandler