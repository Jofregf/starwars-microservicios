const {ClientError} = require("../utils/errors");

module.exports = (req, res, next) => {
    const {
        title,
        opening_crawl,
        director,
        producer,
        release_date,
    } = req.body;

    if ((
        !title,
        !opening_crawl,
        !director,
        !producer,
        !release_date
    )) {
        throw new ClientError("Todos los campos son requeridos", 401);
    }

    const { characters } = req.body;
    if (!characters || !Array.isArray(characters) || characters.length === 0) {
        throw new Error("El campo characters no puede estar vacío", 400);
    }

    for (const character of characters) {
        if (!character || typeof character !== "object" || !character._id || !character.name) {
            throw new Error(
                "Cada character debe tener las propiedades _id y name",
                400
            );
        }
    }

    const { planets } = req.body;
    if (!planets || !Array.isArray(planets) || planets.length === 0) {
        throw new Error("El campo planets no puede estar vacío", 400);
    }

    for (const planet of planets) {
        if (!planet || typeof planet !== "object" || !planet._id || !planet.name) {
            throw new Error(
                "Cada planet debe tener las propiedades _id y name",
                400
            );
        }
    }

    return next();
};
