"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const noteController_1 = __importDefault(require("./controllers/noteController"));
const loggingMiddleware_1 = __importDefault(require("./middlewares/loggingMiddleware"));
const note_route_1 = __importDefault(require("./routes/note.route"));
const validateNote_middlewares_1 = __importDefault(require("./middlewares/validateNote.middlewares"));
dotenv_1.default.config();
const app = (0, express_1.default)();
// const router = express.Router();
const noteController = new noteController_1.default();
app.use(express_1.default.json());
// To use the logging middleware globally
app.use(loggingMiddleware_1.default);
(0, db_1.default)();
app.use("/api/notes", note_route_1.default);
app.use("/api/notes/:id", note_route_1.default);
app.get("/", (req, res) => {
    res.send("The Server is working Correctly");
});
app.get("/api/notes", (req, res) => {
    noteController.getNotes(req, res);
});
app.get("/api/notes/:id", (req, res) => {
    noteController.getNoteById(req, res);
});
app.delete("/api/notes/:id", (req, res) => {
    noteController.deleteNote(req, res);
});
app.get("/api/notes/categories/:categoryId", (req, res) => {
    noteController.getNotesByCategoryId(req, res);
});
app.post("/api/notes", validateNote_middlewares_1.default, (req, res) => {
    noteController.createNote(req, res);
});
app.put("/api/notes/:id", (req, res) => {
    noteController.updateNote(req, res);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server is up and running on port ${PORT}`);
});
