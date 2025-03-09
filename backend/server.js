const express = require('express');
const cors = require('cors');

const app=express();
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
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(5000, () => console.log("Server running on port 5000"));