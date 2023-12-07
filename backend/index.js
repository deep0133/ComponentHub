const express = require("express");
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser');
require("./config/db");

const port = 5000;
const corsOptions = {
    origin: 'http://192.168.1.65:3000',
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}


// middleware :
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsOptions))
app.use(cookieParser());

// Handle Preflight Requests for all routes
app.options('*', cors(corsOptions));

// API's :
app.get("/test", (req, res) => {
    res.json({
        message: "hello world",
        status: 200,
    });
});

app.use("/auth", require("./router/user"));
app.use("/code", require("./router/code"));

app.listen(port, (req, res) => {
    console.log("server is listening at port", port);
});
