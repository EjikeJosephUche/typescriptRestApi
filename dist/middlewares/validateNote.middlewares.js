"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = validateNote;
function validateNote(req, res, next) {
    const { title, content, category } = req.body;
    if (!title || !content || !category) {
        return res.status(400).json({ message: 'Title, content, and category are required' });
    }
    next();
}
