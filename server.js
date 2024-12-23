const express = require('express');
const mongoose = require('mongoose');
const connectDb = require('./config/connectDb');

app.listen(PORT, (err) => {
  console.log(`app is listening on port ${PORT}`)
});
