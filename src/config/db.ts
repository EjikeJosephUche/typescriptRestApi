import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const dbURI = process.env.DB_URI;
        if (!dbURI){
            console.error("❌ DB_URI is not defined in environment variables");
            process.exit(1);
        }
        await mongoose.connect(dbURI);
           
            console.log("✅ Database connected successfully");
        
    } catch (error){
        console.error('❌ Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;