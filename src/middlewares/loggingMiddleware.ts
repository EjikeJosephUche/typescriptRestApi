import { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";

const logFilePath = path.join(__dirname, "../requestLogs.txt");


// Middleware function to log requests
export default function logRequest(req: Request, res: Response, next: NextFunction): void {
    const logMessage = `${new Date().toISOString()} - Method: ${req.method} ${req.originalUrl} - Body: ${JSON.stringify(req.body)}\n`;
    
    fs.appendFile(logFilePath, logMessage, (err) => {
        if (err) {
            console.error("Error logging request: ", err);
        }
    });
    
    next(); 
}