const { Router } = require("express");
const store = require("../database");
const router = Router();
const {validateModel} = require("../middlewares")
const {response} = require("../utils")

router.get("/:model", validateModel, async (req, res) => {
    const {model} = req.params;
    const resp = await store[model].list();
    response(res, 200, resp)
})

router.get("/:model/:id", validateModel, async (req, res) => {
    const { model, id } = req.params;
    const resp = await store[model].get(id);
    response(res, 200, resp)
})

router.post("/:model", validateModel, async (req, res) => {
    const {model} = req.params;
    const data = req.body;
    const resp = await store[model].insert(data);
    response(res, 200, resp)
})

module.exports = router;