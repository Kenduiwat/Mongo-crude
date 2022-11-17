
const express = require('express');
const mongoose = require('mongoose');
const { json } = require('express');
const todoRoutes = require('./routes/todoRoutes')
const dotenv =require('dotenv');
dotenv.config();



const app = express();

app.use(json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true
})

app.use('/todo', todoRoutes);


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log('LeRoi Vladimir here to Serve you on port', PORT))
