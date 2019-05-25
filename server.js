const express = require("express");
const axios = require("axios");
const querystring = require("querystring");
const Twit = require("twit");
require("dotenv").config();

const app = express();

/* 
  TODO: 
  1. Add typing for API, shared between client/server

*/
var T = new Twit({
  consumer_key: process.env.TWITTER_ACCESS_TOKEN,
  consumer_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  app_only_auth: true,
  // access_token: process.env.TWITTER_ACCESS_TOKEN,
  // access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET,
  timeout_ms: 10 * 1000 // optional HTTP request timeout to apply to all requests.
  // strictSSL: true // optional - requires SSL certificates to be valid.
});

// const SERVICE_API_BASE = "https://reqres.in/api";

app.set("port", process.env.PORT || 3001);

/* TODO: Add typing, share those with the ApiClient */

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

function formatUser(userData) {
  return {
    name: userData.name,
    accountName: userData.screen_name,
    avatar: `${userData.profile_image_url}`.replace("_normal", "_bigger")
  };
}

app.get("/api/user", async (req, res) => {
  const { screen_name } = req.query;

  if (!screen_name) {
    res.json({
      error: "Missing required parameter `screen_name`"
    });
    return;
  }

  try {
    // const response = await axios.get(`${SERVICE_API_BASE}/users/${user_id}`);
    const response = await T.get(`users/show`, { screen_name });
    const data = response.data;
    if (!data) {
      res
        .status(404) // HTTP status 404: NotFound
        .send("Not found");
    }
    res.json(formatUser(data));
  } catch (e) {
    res
      .status(500) // HTTP status 404: NotFound
      .send(`Failed to fetch data for 'screen_name=${screen_name}'`);

    // res.json({
    //   error: `Failed to fetch data for 'user_id=${user_id}'`
    // });
    // return;
  }
});

app.get("/api/followers", async (req, res) => {
  const { screen_name, cursor = "-1", count = 30 } = req.query;

  if (!screen_name) {
    res.json({
      error: "Missing required parameter `screen_name`"
    });
    return;
  }

  // TODO: Switch to Twitter API: followers/list
  try {
    const response = await T.get(`followers/list`, {
      screen_name,
      count,
      cursor
    });
    const data = response.data;
    res.json({
      followers: data.users.map(formatUser),
      next_cursor: data.next_cursor_str,
      previous_cursor: data.previous_cursor_str
    });
  } catch (e) {
    res.json({
      error: `Failed to fetch followers data for 'screen_name=${screen_name}'`
    });
    return;
  }
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
