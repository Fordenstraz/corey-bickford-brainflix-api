//Initialize Express
const express = require("express");
const app = express();
app.use(express.json());

//Initialize CORS
const cors = require("cors");
const { CORS_ORIGIN } = process.env;
app.use(cors({ CORS_ORIGIN }));

//Initialize Dotenv
require("dotenv").config();

//Declare port
const port = process.env.PORT || 7770;

//Connect static folder
app.use(express.static("public"));

//Video Routes
const videoRoutes = require("./routes/videos");
app.use("/videos", videoRoutes);

//Listener
app.listen(port, function () {
	console.log(`Server is running fine, on port ${port} 👍`);
});
