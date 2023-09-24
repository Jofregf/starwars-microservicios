const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const {
        name,
        height,
        mass,
        hair_color,
        skin_color,
        eye_color,
        birth_year,
        gender,
        homeworld,
    } = req.body;

    if (
        (!name,
        !height,
        !mass,
        !hair_color,
        !skin_color,
        !eye_color,
        !birth_year,
        !gender,
        !homeworld)
    ) {
        throw new ClientError("Todos los campos son requeridos", 401);
    }

    if (!homeworld || !homeworld._id || !homeworld.name) {
        throw new ClientError(
            "EL campo homeworld debe tener las propiedades _id y name",
            400
        );
    }

    const { films } = req.body;
    if (!films || !Array.isArray(films) || films.length === 0) {
        throw new Error("El campo films no puede estar vacío", 400);
    }

    for (const film of films) {
        if (!film || typeof film !== "object" || !film._id || !film.title) {
            throw new Error(
                "Cada film debe tener las propiedades _id y title",
                400
            );
        }
    }

    return next();
};
