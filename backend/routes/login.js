const Router = require("express").Router;

const login = new Router();

login.post("/google", (req, res) => {
  // needs pprovider_user_id, email, provider, provider_id, name
});

module.exports = login;
