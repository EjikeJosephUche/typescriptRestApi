import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import NoteController from './controllers/noteController';
import logRequest from './middlewares/loggingMiddleware';
import router from './routes/note.route';
import validateNote from './middlewares/validateNote.middlewares';



dotenv.config();
const app = express();
// const router = express.Router();

const noteController = new NoteController();

app.use(express.json());
// To use the logging middleware globally
app.use(logRequest)

connectDB();

app.use("/api/notes", router)
app.use("/api/notes/:id", router)


app.get("/", (req:Request, res:Response) => {
    res.send("The Server is working Correctly");
});

app.get("/api/notes", logRequest, (req: Request, res: Response) =>{
    noteController.getNotes(req, res);
});
app.get("/api/notes/:id", logRequest, (req: Request, res: Response) =>{
    noteController.getNoteById(req, res);
});

app.delete("/api/notes/:id", logRequest, (req: Request, res: Response) =>{
    noteController.deleteNote(req, res);
});

app.get("/api/notes/categories/:categoryId", logRequest, (req: Request, res: Response) =>{
    noteController.getNotesByCategoryId(req, res);
});

app.post("/api/notes", validateNote, logRequest,  (req: Request, res: Response) =>{
    noteController.createNote(req, res);
});


app.put("/api/notes/:id", logRequest, (req: Request, res: Response) => {
    noteController.updateNote(req, res);
})







const PORT = process.env.PORT || 3000;
app.listen(PORT, ()=>{
    console.log(`✅ Server is up and running on port ${PORT}`)
});
