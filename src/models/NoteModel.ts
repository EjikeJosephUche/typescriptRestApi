import mongoose, { Schema } from 'mongoose';
import INote from '../interfaces/Note';

const noteSchema: Schema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
 }, {
        timestamps: true
    }
);

const Note = mongoose.model<INote>('Note', noteSchema);

export default Note;