import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();

// Needed to get __dirname when using ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve static files: CSS, JS, images, etc.
app.use(express.static(path.join(__dirname, "public")));

// Serve index.html with path
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

// API Example
app.get("/api/", (req, res) => {
    res.json({
        name: "Imagine",
        age: 22,
        role: "Full Stack Dev in making"
    });
});

// 404 Route (must be at bottom)
app.use((req, res) => {
    res.status(404).send('<h1> 404 Not Found</h1> <p> Govi is smol little pretty<i> stupid </i>girl. </p>');
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000/");
});
