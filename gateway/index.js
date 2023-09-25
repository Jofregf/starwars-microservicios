const express = require("express");
const morgan = require("morgan");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();
app.use(morgan("dev"));

app.use("/characters", createProxyMiddleware({
    target: "http://characters:8001",
    changeOrigin: true,
}))

app.use("/films", createProxyMiddleware({
    target: "http://films:8002",
    changeOrigin: true,
}))

app.use("/planets", createProxyMiddleware({
    target: "http://planets:8003",
    changeOrigin: true,
}))

app.use("*", (req, res) => {
    res.status(404).send("Not found");
});

app.use((err, req, res, next ) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message,
    })
});

const PORT = 8000;

async function main() {
    app.listen(PORT);
    console.log(`Gateway on port ${PORT}`);
}

main();