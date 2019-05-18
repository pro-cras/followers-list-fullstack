const express = require("express");
const axios = require("axios");
const querystring = require("querystring");

const app = express();

const SERVICE_API_BASE = "https://reqres.in/api";

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

function formatUser(userData) {
  return {
    name: `${userData.first_name} ${userData.last_name}`,
    accountName: userData.email,
    avatar: userData.avatar
  };
}
app.get("/api/user", async (req, res) => {
  const { user_id, page = 1, per_page = 4 } = req.query;

  if (!user_id) {
    res.json({
      error: "Missing required parameter `user_id`"
    });
    return;
  }

  // Twitter API: users/lookup
  try {
    const response = await axios.get(`${SERVICE_API_BASE}/users/${user_id}`);
    if (!response.data.data) {
      res
        .status(404) // HTTP status 404: NotFound
        .send("Not found");
    }
    const data = response.data.data;
    res.json(formatUser(data));
  } catch (e) {
    res.json({
      error: `Failed to fetch data for 'user_id=${param}'`
    });
    return;
  }
});

app.get("/api/followers", async (req, res) => {
  const { user_id, page = 1, per_page = 4 } = req.query;

  if (!user_id) {
    res.json({
      error: "Missing required parameter `user_id`"
    });
    return;
  }

  // Twitter API: hit followers/list
  try {
    const response = await axios.get(
      `${SERVICE_API_BASE}/users`,
      querystring.stringify({ page, per_page })
    );
    const data = response.data.data;
    res.json({
      total_followers: response.data.total,
      followers: data.map(formatUser)
    });
  } catch (e) {
    res.json({
      error: `Failed to fetch followers data for 'user_id=${param}'`
    });
    return;
  }
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
