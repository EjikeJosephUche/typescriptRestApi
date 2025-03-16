// The interface for the note
import { Document } from "mongoose";
import ICategory from './ICategory'


export default interface INote extends Document, ICategory{
    id: string,
    title: String,
    content: String,
    createdAt: Date;
    updatedAt: Date;
    category: ICategory;
    
};
