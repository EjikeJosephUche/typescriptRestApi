import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import NoteController from './controllers/noteController';

dotenv.config();
const app = express();
const noteController = new NoteController();

app.use(express.json());

connectDB();

app.get("/", (req:Request, res:Response) => {
    res.send("The Server is working Correctly");
});

app.get("/api/notes", (req: Request, res: Response) =>{
    noteController.getNotes(req, res);
});
app.get("/api/notes/:id", (req: Request, res: Response) =>{
    noteController.getNote(req, res);
});
app.post("/api/notes", (req: Request, res: Response) =>{
    noteController.createNote(req, res);
});

app.put("/api/notes/:id", (req: Request, res: Response) => {
    noteController.updateNote(req, res);
})
app.delete("/api/notes/:id", (req: Request, res: Response) =>{
    noteController.deleteNote(req, res);
});




const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`✅ Server is running on http://localhost:3000 on port ${PORT}`)
});
