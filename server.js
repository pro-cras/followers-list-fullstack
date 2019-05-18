const express = require("express");

const app = express();

app.set("port", process.env.PORT || 3001);

// Express only serves static assets in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/api/user", (req, res) => {
  const param = req.query.user_id;

  if (!param) {
    res.json({
      error: "Missing required parameter `user_id`"
    });
    return;
  }

  res.json({ user_id: param, name: "Foo" });
});

app.listen(app.get("port"), () => {
  console.log(`Find the server at: http://localhost:${app.get("port")}/`); // eslint-disable-line no-console
});
