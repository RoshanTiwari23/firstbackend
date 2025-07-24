 require('dotenv').config()
const express = require("express"); //common js
// import express from "express" //Es modules
const app = express();

const port = 4000;

const githubDate = {
  "login": "RoshanTiwari23",
  "id": 160772745,
  "node_id": "U_kgDOCZUyiQ",
  "avatar_url": "https://avatars.githubusercontent.com/u/160772745?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/RoshanTiwari23",
  "html_url": "https://github.com/RoshanTiwari23",
  "followers_url": "https://api.github.com/users/RoshanTiwari23/followers",
  "following_url": "https://api.github.com/users/RoshanTiwari23/following{/other_user}",
  "gists_url": "https://api.github.com/users/RoshanTiwari23/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/RoshanTiwari23/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/RoshanTiwari23/subscriptions",
  "organizations_url": "https://api.github.com/users/RoshanTiwari23/orgs",
  "repos_url": "https://api.github.com/users/RoshanTiwari23/repos",
  "events_url": "https://api.github.com/users/RoshanTiwari23/events{/privacy}",
  "received_events_url": "https://api.github.com/users/RoshanTiwari23/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 3,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2024-02-21T17:46:50Z",
  "updated_at": "2025-05-30T01:40:58Z"
}

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get('/google', (req, res) => {
    res.send('Roshancom')
})

app.get('/login', (req, res)=>{
    res.send('<h1>please login at chai aur code</h1>')
})

app.get('/youtube', (req, res)=> {
  res.send('<h2>Roshan Tiwari</h2>')
})

app.get('/github', (req, res) => {
    res.json(githubDate)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
