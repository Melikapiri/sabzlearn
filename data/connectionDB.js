import mongoose from "mongoose";

const connectionDB = async () => {

    try {
        if (mongoose.connections[0].readyState) {
            return false
        } else {
            await mongoose.connect('mongodb://127.0.0.1:27017/next-Cms')
            console.log("MongoDB is Connected :)) ")

        }
    } catch (err) {
        console.log('Error In Db Connected !', err)

    }

}

export default connectionDB