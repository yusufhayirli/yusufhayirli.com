require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const recordRoutes = require('./routes/records');

// express app
const app = express();

// middleware
app.use(express.json())

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// routes
app.use('/api/records', recordRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // listen for request
    app.listen(process.env.PORT, () => {
      console.log('Connected to db & listening on my precious port', process.env.PORT);
    })
  })
  .catch((error) => {
    console.log(error);
  })


