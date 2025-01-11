require("dotenv").config({ path: ".env.development" });
const express = require("express");
const cors = require("cors");
const pool = require("./db.js");

const app = express();
const PORT = 4000;

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.use(express.json());

app.get("/api/getSite/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const response = await pool.query({
            text: "SELECT * FROM websites WHERE id = $1",
            values: [id],
        });
        res.status(200).json(response);
    } catch (err) {
        throw err;
    }
});

app.post("/api/createSite", async (req, res) => {
    const { user_id: id, name, content } = req.body;
    try {
        const response = await pool.query({
            text: "INSERT INTO websites(user_id, name, content) VALUES($1, $2, $3)",
            values: [id, name, JSON.stringify(content)],
        });
        res.status(200).json(response);
    } catch (err) {
        throw err;
    }
});

app.listen(PORT, () => {
    console.log("Server running on port ", PORT);
});
