//imports
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require("mongoose");
const path = require("path");

dotenv.config();

//middlewares
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));

// route imports
const homeRoutes = require("./routes/homeRoutes");
const userRoutes = require("./routes/userRoutes");

//routes
app.use("/auth", userRoutes);
app.use("/", homeRoutes);

//

app.get("/", (req, res) => {
    res.send("API is running");
});

//db connection
mongoose
    .connect(process.env.DB_URL, {})
    .then(() => console.log("connection successful"))
    .catch((err) => console.log(err));

//error handler
// app.use(errorHandler);

app.listen(process.env.PORT || 5000, () => {
    console.log(`App listening on http://localhost:${process.env.PORT}`);
});
