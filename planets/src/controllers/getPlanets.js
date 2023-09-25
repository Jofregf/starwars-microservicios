const {response} = require("../utils");
const data = require("../data");

module.exports = async (req, res) => {
    
    const planet = await data.list();
    response(res, 200, planet);
}