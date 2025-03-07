import INote from "../interfaces/Note";
import { NoteService } from "../services/NoteService";
import { Request, Response } from "express";

export default class NoteController {
    private noteService: NoteService;

    constructor (){
        this.noteService = new NoteService();
    }
    async getNote(req: Request, res: Response){
        try{
            const getNote = await this.noteService.getNote(req.params.id);
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
            res.status(201).json(note)
        } catch (error){
            res.status(500).json(error)
        }

    }

    async updateNote(req: Request, res: Response){
        try{
            const updateNote = await this.noteService.updateNote(req.params.id, req.body);
            if (!updateNote){
                res.status(404).json("File not found");
            } else {
                res.json(updateNote);
            }
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
                res.status(204).send();

            }
        } catch (error) {
            res.status(500).json(error)
        }
    }


}

