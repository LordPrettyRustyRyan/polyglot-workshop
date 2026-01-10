import express from "express";
import path from "path";

const app = express();

// __dirname fix for ES modules:
// const __dirname = path.dirname(__filename);

// Static files middleware
// app.use(express.static(path.join(__dirname, "public")));

// Home Route
app.get("/", (req, res) => {
    res.send("<h1>Hello Imagine! Welcome to Express.js 🔥</h1>");
});

// Portfolio Route
app.get("/portfolio", (req, res) => {
    res.sendFile(path.join(__dirname, "new.html"));
});

// Port
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});