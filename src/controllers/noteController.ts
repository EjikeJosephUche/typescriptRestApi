import { NoteService } from "../services/NoteService";
import { Request, Response } from "express";

export default class NoteController {
    private noteService: NoteService;

    constructor (){
        this.noteService = new NoteService();
    }
    async getNoteById(req: Request, res: Response){
        try{
            const getNote = await this.noteService.getNoteById(req.params.id);
            if(!getNote){
                res.status(404).json("Request was not found");
            } else {
                res.json(getNote);
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getNotes(req: Request, res: Response){
        try{
            const notes = await this.noteService.getNotes();

            res.json(notes);
        } catch(error){
            res.status(500).json( {error});
        }
    }

    async createNote(req: Request, res: Response){
        try{
            const note = await this.noteService.createNote(req.body)
            res.status(201).json({
                message: "Note created successfully!",
                data: note
            })
        } catch (error){
            res.status(500).json(error)
        }

    }

    
    async deleteNote(req: Request, res: Response){
        try {
            const deleteNote = await this.noteService.deleteNote(req.params.id);
            if (!deleteNote){
                res.status(404).json("File does not exist");
            } else {
                res.status(204).json({message: "file deleted successfully"});
                
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
    
    async getNotesByCategoryId(req: Request, res: Response){
        
        try{
            const { categoryId } = req.params;
            
            const note = await this.noteService.getNotesByCategoryId(categoryId);
            if(!note){
                res.status(404).json("File does not exist");
            } else {
                res.json(note)
            }
        } catch (error){
            res.status(500).json(error);
        }
    }
    

    async updateNote(req: Request, res: Response){
        try{
            const updateNote = await this.noteService.updateNote(req.params.id, req.body);
            if (!updateNote){
                res.status(404).json("File not found");
            } else {
                res.json({message: "Note updated successfully",
                    data: updateNote});
            }
        } catch (error){
            res.status(500).json(error)
        }
    }
    
}


