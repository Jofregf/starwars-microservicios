const server = require("./src/server")

const PORT = 8004;

async function main() {
    server.listen(PORT);
    console.log(`DB services listening on port ${PORT}`);
}

main();