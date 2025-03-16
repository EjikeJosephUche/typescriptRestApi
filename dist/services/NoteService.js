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
exports.NoteService = void 0;
const NoteModel_1 = require("../models/NoteModel");
class NoteService {
    getNoteById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return NoteModel_1.Note.findById(id);
        });
    }
    getNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            return NoteModel_1.Note.find();
        });
    }
    createNote(noteData) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedNote = yield NoteModel_1.Note.create(noteData);
            return savedNote;
        });
    }
    deleteNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return NoteModel_1.Note.findByIdAndDelete(id);
        });
    }
    getNotesByCategoryId(category) {
        return __awaiter(this, void 0, void 0, function* () {
            if (category) {
                category = category.toLowerCase();
            }
            return NoteModel_1.Note.find({ category });
        });
    }
    updateNote(id, noteData) {
        return __awaiter(this, void 0, void 0, function* () {
            if (noteData.category) {
                noteData.category = noteData.category.toLowerCase();
            }
            return NoteModel_1.Note.findByIdAndUpdate(id, noteData, { new: true });
        });
    }
}
exports.NoteService = NoteService;
