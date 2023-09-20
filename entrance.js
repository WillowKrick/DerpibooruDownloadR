const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const testErr = require("./middleware/err");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", express.static("./client/"));

app.use("*", cors());

app.use(testErr);
app.listen(1551, "0.0.0.0", () =>
	console.log(
		`your sever is running on port: 1551\nInput =>localhost:1551<= in your broswer to start`
	)
);
