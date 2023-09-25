const { response } = require("../utils");
const data = require("../data");

module.exports = async (req, res) => {

    const {id} = req.params;
    const planet = await data.getOne(id);
    response(res, 201, planet);
}