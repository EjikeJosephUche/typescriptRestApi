"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const db_1 = __importDefault(require("./config/db"));
const noteController_1 = __importDefault(require("./controllers/noteController"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const noteController = new noteController_1.default();
app.use(express_1.default.json());
(0, db_1.default)();
app.get("/", (req, res) => {
    res.send("The Server is working Correctly");
});
app.get("/api/notes", (req, res) => {
    noteController.getNotes(req, res);
});
app.get("/api/notes/:id", (req, res) => {
    noteController.getNote(req, res);
});
app.post("/api/notes", (req, res) => {
    noteController.createNote(req, res);
});
app.put("/api/notes/:id", (req, res) => {
    noteController.updateNote(req, res);
});
app.delete("/api/notes/:id", (req, res) => {
    noteController.deleteNote(req, res);
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:3000 on port ${PORT}`);
});
