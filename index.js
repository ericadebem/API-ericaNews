const express = require("express");
const app = express();
const userRoute = require("./src/routes/user.route");

const port = 3000;

app.use("/user", userRoute);

app.listen(port, () => console.log("Server is running on port ${port}"));
