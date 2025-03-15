const express = require('express');
const cors = require('cors');
// const fetch = require('node-fetch');

const app = express();
app.use(cors());
app.use(express.json());

app.post("/leetcode", async (req, res) => {
    const { username } = req.body;
    const query = {
        query: `
        {
            matchedUser(username: "${username}") {
                username
                submitStats: submitStatsGlobal {
                    acSubmissionNum {
                        difficulty
                        count
                    }
                }
                profile {
                    ranking
                }
                submissionCalendar
            }
        }
        `,
    };

    try {
        const response = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(query),
        });
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error("Error fetching LeetCode data:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.get("/gfg", async (req, res) => {
    try {
        const response = await fetch(`https://geeks-for-geeks-api.vercel.app/arshdevu4v8`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        res.json(data);
    } catch (err) {
        console.error("Error fetching GeeksforGeeks data:", err);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));