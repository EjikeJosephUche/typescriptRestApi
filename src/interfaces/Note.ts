// The interface for the note
import { Document } from "mongoose";


export default interface INote extends Document{
    title: String,
    content: String,
    
};
