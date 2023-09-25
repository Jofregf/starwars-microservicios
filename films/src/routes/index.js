const {Router} = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")

const router = Router();

router.get("/", controllers.getFilms);

router.post("/", middlewares.filmValidation, controllers.createFilm);

router.get("/:id", controllers.getFilm);

router.delete("/:id", controllers.removeFilm);

router.put("/:id", middlewares.filmValidation, controllers.updateFilm);

module.exports = router;