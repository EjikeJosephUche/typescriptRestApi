import mongoose, { Schema } from 'mongoose';
import INote from '../interfaces/INote';


const noteSchema: Schema = new Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true
    }
 }, {
        timestamps: true
    },
);

// Pre-save hook to ensure category is in lowercase before saving
noteSchema.pre('save', function (next) {
    if (typeof this.category === 'string') {
      this.category = this.category.toLowerCase();
    }
    next();
  });
  

const Note = mongoose.model<INote>('Note', noteSchema);

export  { Note };