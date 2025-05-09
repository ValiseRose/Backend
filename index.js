require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const AppRouter = require("./routes/appRouter");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const path = require("path");


const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();
app.use(
  cors({
    origin: "*",
    optionsSuccessStatus: 200,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(
  express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 })
);
app.use(bodyParser.json());
app.use("/files", express.static(path.join(__dirname, "files")));
app.use("/api", AppRouter);


mongoose.connect(process.env.MONGO_URL,  {
  dbName: 'valise_rose',
 
})
  .then(() => console.log('MongoDB connected sucess'))
  .catch(err => console.error(err));



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server running on port ${port}`));
