import React, { useState, useEffect } from 'react'

const LeetCodeProfile = () => {
    const[profile, setProfile] = useState(null);

    const username = "Arshdev"

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("http://localhost:5000/leetcode", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ username }),
            });
      
            const data = await response.json();
            setProfile(data.data.matchedUser);
        }  
        fetchData();
    }, [username]);

  return profile ? (
    <div>
      <h2>{profile.username}'s LeetCode Stats</h2>
      <p>Ranking: {profile.profile.ranking}</p>
      <p>Easy: {profile.submitStats.acSubmissionNum[1].count}</p>
      <p>Medium: {profile.submitStats.acSubmissionNum[2].count}</p>
      <p>Hard: {profile.submitStats.acSubmissionNum[3].count}</p>
    </div>
  ) : (
    <p>Loading...</p>
  )
}

export default LeetCodeProfile
