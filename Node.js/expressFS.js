import express from "express";
import fs from "fs";

const app = express();

// Home Route
app.get("/", (req, res) => {
    res.send('<h1> We are running Express.js with fs </h1> <p> Lets pave the way to rock the world!</p>');
});

// About Route
app.get("/about", (req, res) => {
    res.send('<h1> About Imagine</h1> <p> Hey this is about Imagine!</p>');
});

// Serve new.html
app.get("/new", (req, res) => {
    const data = fs.readFileSync('./index.html');
    res.send(data.toString());
});

// 404 Route (must be at bottom)
app.use((req, res) => {
    res.status(404).send('<h1> 404 Not Found</h1> <p> This page was not found on this server</p>');
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});
