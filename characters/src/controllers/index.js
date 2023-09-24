const {catchedAsync} = require("../utils")

module.exports = {
    getCharacters: catchedAsync(require("./getCharacters")),
    createCharacter: catchedAsync(require("./createCharacter")),
    getCharacter: catchedAsync(require("./getOne")),
    removeCharacter: catchedAsync(require("./removeCharacter")),
    updateCharacter: catchedAsync(require("./updateCharacter")),
};