const { response } = require("../utils");
const data = require("../data");

module.exports = async (req, res) => {
    
    const info = req.body;
    const planet = await data.create(info);
    response(res, 201, planet);
}