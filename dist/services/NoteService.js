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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NoteService = void 0;
const NoteModel_1 = __importDefault(require("../models/NoteModel"));
class NoteService {
    getNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return NoteModel_1.default.findById(id);
        });
    }
    getNotes() {
        return __awaiter(this, void 0, void 0, function* () {
            return NoteModel_1.default.find();
        });
    }
    createNote(noteData) {
        return __awaiter(this, void 0, void 0, function* () {
            const savedNote = yield NoteModel_1.default.create(noteData);
            return savedNote;
        });
    }
    updateNote(id, noteData) {
        return __awaiter(this, void 0, void 0, function* () {
            return NoteModel_1.default.findByIdAndUpdate(id, noteData, { new: true });
        });
    }
    deleteNote(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return NoteModel_1.default.findByIdAndDelete(id);
        });
    }
}
exports.NoteService = NoteService;
