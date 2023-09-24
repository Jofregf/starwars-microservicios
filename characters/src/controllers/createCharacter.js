const { response } = require("../utils");
const data = require("../data");

module.exports = async (req, res) => {

    const {info} = req.body;
    const character = await data.create(info);
    response(res, 201, character);
}