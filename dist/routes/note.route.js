"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loggingMiddleware_1 = __importDefault(require("../middlewares/loggingMiddleware"));
const validateNote_middlewares_1 = __importDefault(require("../middlewares/validateNote.middlewares"));
const noteController_1 = __importDefault(require("../controllers/noteController"));
const router = express_1.default.Router();
const noteController = new noteController_1.default();
router.post("/api/notes", validateNote_middlewares_1.default, loggingMiddleware_1.default, (req, res) => {
    noteController.createNote(req, res);
});
router.put("/api/notes/:id", loggingMiddleware_1.default, (req, res) => {
    noteController.updateNote(req, res);
});
exports.default = router;
