// The interface for the note
import { Document } from "mongoose";


export default interface INote extends Document{
    id: Number,
    title: String,
    content: String,
    
};
