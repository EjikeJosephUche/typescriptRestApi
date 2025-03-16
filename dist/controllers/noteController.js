"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const NoteService_1 = require("../services/NoteService");
class NoteController {
    constructor() {
        this.noteService = new NoteService_1.NoteService();
    }
    getNoteById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const getNote = yield this.noteService.getNoteById(req.params.id);
                if (!getNote) {
                    res.status(404).json("Request was not found");
                }
                else {
                    res.json(getNote);
                }
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getNotes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const notes = yield this.noteService.getNotes();
                res.json(notes);
            }
            catch (error) {
                res.status(500).json({ error });
            }
        });
    }
    createNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const note = yield this.noteService.createNote(req.body);
                res.status(201).json({
                    message: "Note created successfully!",
                    data: note
                });
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    deleteNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const deleteNote = yield this.noteService.deleteNote(req.params.id);
                if (!deleteNote) {
                    res.status(404).json("File does not exist");
                }
                else {
                    res.status(204).json({ message: "file deleted successfully" });
                }
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    getNotesByCategoryId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { categoryId } = req.params;
                const note = yield this.noteService.getNotesByCategoryId(categoryId);
                if (!note) {
                    res.status(404).json("File does not exist");
                }
                else {
                    res.json(note);
                }
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
    updateNote(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const updateNote = yield this.noteService.updateNote(req.params.id, req.body);
                if (!updateNote) {
                    res.status(404).json("File not found");
                }
                else {
                    res.json({ message: "Note updated successfully",
                        data: updateNote });
                }
            }
            catch (error) {
                res.status(500).json(error);
            }
        });
    }
}
exports.default = NoteController;
