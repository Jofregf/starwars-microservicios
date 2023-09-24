const {Router} = require("express");
const controllers = require("../controllers");
const middlewares = require("../middlewares")
const router = Router();

router.get("/", controllers.getCharacters);

router.post("/", middlewares.characterValidation, controllers.createCharacter);

router.get("/:id", controllers.getCharacter);

router.delete("/:id", controllers.removeCharacter);

router.put("/:id", middlewares.characterValidation, controllers.updateCharacter);


module.exports = router;