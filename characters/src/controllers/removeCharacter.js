const { response } = require("../utils");
const data = require("../data");

module.exports = async (req, res) => {

    const {id} = req.params;
    const character = await data.remove(id);
    response(res, 201, character);
}