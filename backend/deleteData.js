import mongoose from 'mongoose';
import { MONGODBURL } from './config.js';

const deleteData = async () => {
    try {
        await mongoose.connect(MONGODBURL);
        console.log("Connected to MongoDB");

        await mongoose.connection.db.collection('bobas').deleteMany({});
        console.log("All documents deleted from 'bobas' collection");

        mongoose.disconnect();
    } catch (error) {
        console.error("Failed to delete data:", error);
    }
};

deleteData();
