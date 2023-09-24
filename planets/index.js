const server = require("./src/server");

const PORT = 8003;

async function main() {
    server.listen(PORT);
    console.log(`Planets services listening on port ${PORT}`);
}

main();