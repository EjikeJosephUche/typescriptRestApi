import mongoose, { Schema } from "mongoose";
import ICategory from "../interfaces/ICategory";

const categorySchema: Schema = new Schema ({
    name: {
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Category = mongoose.model<ICategory>('Category', categorySchema);
export { Category };