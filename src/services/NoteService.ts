import INote from "../interfaces/Note";
import Note from "../models/NoteModel";

export class NoteService {
    async getNote(id: string): Promise<INote | null>{
        return Note.findById(id);
    }

    async getNotes(): Promise<INote[]>{
        return Note.find();
    }

    async createNote(noteData:{title: String, content: String}): Promise<INote>{
        const savedNote = await Note.create(noteData);
        return savedNote;
    }

    async updateNote(
        id: string,
        noteData: { title?: string, content?: string } 
    ): Promise<INote | null>{

    return Note.findByIdAndUpdate(id, noteData, {new: true});
    }

    async deleteNote(id: string): Promise<void | null>{
        return Note.findByIdAndDelete(id);
    }
} 