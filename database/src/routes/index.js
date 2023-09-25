const { Router } = require("express");
const store = require("../database");
const {validateModel} = require("../middlewares");
const {response} = require("../utils");
const {catchedAsync} = require("../utils");

const router = Router();

router.get("/:model", validateModel, catchedAsync(async (req, res) => {
    const {model} = req.params;
    const resp = await store[model].list();
    response(res, 200, resp)
}))

router.get("/:model/:id", validateModel, catchedAsync(async (req, res) => {
    const { model, id } = req.params;
    const resp = await store[model].get(id);
    response(res, 200, resp)
}))

router.post("/:model", validateModel, catchedAsync(async (req, res) => {
    const {model} = req.params;
    const data = req.body;
    const resp = await store[model].insert(data);
    response(res, 200, resp)
}))

router.delete("/:model/:id", validateModel, catchedAsync(async (req, res) => {
    const {model, id} = req.params;
    const resp = await store[model].remov(id);
    response(res, 200, resp);
}))

router.put("/:model/:id", validateModel, catchedAsync(async (req, res) => {
    const {model, id} = req.params;
    const data = req.body;
    const resp = await store[model].update(id, data);
    response(res, 200, resp);
}))

module.exports = router;