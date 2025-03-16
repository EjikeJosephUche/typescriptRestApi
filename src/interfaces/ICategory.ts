import { Document } from "mongoose";

export default interface ICategory extends Document{
    id: string;
    name: string;
}