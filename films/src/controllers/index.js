const {catchedAsync} = require("../utils");

module.exports = {
    getFilms: catchedAsync(require("./getFilms")),
    createFilm: catchedAsync(require("./createFilm")),
    getFilm: catchedAsync(require("./getFilm")),
    removeFilm: catchedAsync(require("./removeFilm")),
    updateFilm: catchedAsync(require("./updateFilm")),
}
