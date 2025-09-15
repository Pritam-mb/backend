const express = require('express')
require('dotenv').config()
const app= express()

const port = 3000
const git={
  "login": "Pritam-mb",
  "id": 185715701,
  "node_id": "U_kgDOCxHL9Q",
  "avatar_url": "https://avatars.githubusercontent.com/u/185715701?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Pritam-mb",
  "html_url": "https://github.com/Pritam-mb",
  "followers_url": "https://api.github.com/users/Pritam-mb/followers",
  "following_url": "https://api.github.com/users/Pritam-mb/following{/other_user}",
  "gists_url": "https://api.github.com/users/Pritam-mb/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Pritam-mb/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Pritam-mb/subscriptions",
  "organizations_url": "https://api.github.com/users/Pritam-mb/orgs",
  "repos_url": "https://api.github.com/users/Pritam-mb/repos",
  "events_url": "https://api.github.com/users/Pritam-mb/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Pritam-mb/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "pritam patra",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 16,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2024-10-20T17:49:49Z",
  "updated_at": "2025-09-15T19:04:53Z"
}
app.get('/',(req,res)=>{
    res.send("hello cutie")
})

app.get('/twitter',(req,res)=>{
        res.send("i am a bad boy")
})
app.get('/youtube',(req,res)=>{
    res.send("<h2>you are so goated </h2>")
})

app.get('/github',(req,res)=>{
    res.json(git)
})
app.listen(process.env.PORT,()=>{
    console.log(` app listin on the prot ${process.env.PORT}`);
    
})