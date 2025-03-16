import express, {Request, Response, NextFunction} from 'express';
import logRequest from '../middlewares/loggingMiddleware';
import validateNote from '../middlewares/validateNote.middlewares';
import NoteController from '../controllers/noteController';
const router = express.Router();

const noteController = new NoteController();


router.post("/api/notes", validateNote, logRequest,  (req: Request, res: Response) =>{
    noteController.createNote(req, res);
});


router.put("/api/notes/:id", logRequest, (req: Request, res: Response) => {
    noteController.updateNote(req, res);
})

export default router;