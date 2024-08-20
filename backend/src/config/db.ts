import mongoose from "mongoose";

const connDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!)
    } catch (error) {
        console.error('Mongoose Connection failed', error)
        process.exit(1);
    }
};

export default connDB;