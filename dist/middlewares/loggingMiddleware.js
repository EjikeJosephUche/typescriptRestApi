"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = logRequest;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logFilePath = path_1.default.join(__dirname, "../requestLogs.txt");
// Middleware function to log requests
function logRequest(req, res, next) {
    const logMessage = `${new Date().toISOString()} - Method: ${req.method} ${req.originalUrl} - Body: ${JSON.stringify(req.body)}\n`;
    fs_1.default.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error("Error logging request: ", err);
        }
    });
    next();
}
