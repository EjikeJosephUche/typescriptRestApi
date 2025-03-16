import { Request, Response, NextFunction } from "express";
interface NoteRequest extends Request{
    body: {
        title: string;
        content: string;
        category: string;
    }
}

export default function validateNote(req: NoteRequest, res: Response, next: NextFunction): any | void{
    const { title, content, category } = req.body;
    if (!title || !content || !category) {
        return res.status(400).json({message: 'Title, content, and category are required'});
    }
    next();
}
