const express = require('express');

const authRouter = express.Router();

const googleConfig = {
    clientId: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET, 
    redirect: `https://${}/google-auth` // this must match your google api settings
  };


authRouter.post('/google-auth', (req, res) => {
    const code = req.query;
}); 

