const { ClientError } = require("../utils/errors");

module.exports = (req, res, next) => {
    const {
        name,
        rotation_period,
        orbital_period,
        diameter,
        climate,
        gravity,
        terrain,
        surface_water,
    } = req.body;

    if ((
        !name,
        !rotation_period,
        !orbital_period,
        !diameter,
        !climate,
        !gravity,
        !terrain,
        !surface_water
    )) {
        throw new ClientError("Todos los campos son requeridos", 401);
    }

    const { residents } = req.body;
    if (!residents || !Array.isArray(residents) || residents.length === 0) {
        throw new Error("El campo residents no puede estar vacío", 400);
    }

    for (const resident of residents) {
        if (!resident || typeof resident !== "object" || !resident._id || !resident.name) {
            throw new Error(
                "Cada resident debe tener las propiedades _id y name",
                400
            );
        }
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