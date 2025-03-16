// import ICategory from "../interfaces/ICategory";
import INote from "../interfaces/INote";
import { Note } from "../models/NoteModel";

export class NoteService {
    async getNoteById(id: string): Promise<INote | null>{
        return Note.findById(id);
    }

    async getNotes(): Promise<INote[] | null>{
        return Note.find();
    }

    async createNote(noteData:{title: String, content: String, category: String}): Promise<INote>{
        const savedNote = await Note.create(noteData);
        return savedNote;
    }

    
    async deleteNote(id: string): Promise<void | null>{
        return Note.findByIdAndDelete(id);
    }
    
    async getNotesByCategoryId( category: string): Promise<INote[] | null>{
        if(category){
            category = category.toLowerCase();
        }
        return Note.find({ category });
    }
    
    async updateNote(
        id: string,
        noteData: { title?: string, content?: string, category?: string } 
    ): Promise<INote | null>{
        if (noteData.category){
            noteData.category = noteData.category.toLowerCase()
        }
    return Note.findByIdAndUpdate(id, noteData, {new: true});
    }
} 