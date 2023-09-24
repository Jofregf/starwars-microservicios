const server = require("./src/server");

const PORT = 8001;

async function main(){
    await server.listen(PORT);
    console.log(`Characters services listening on port ${PORT}`);
}

main()