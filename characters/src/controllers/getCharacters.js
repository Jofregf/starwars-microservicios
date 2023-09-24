const {response} = require("../utils");
const data = require("../data");

module.exports = async (req, res) => {
    
    const character = await data.list();
    response(res, 200, character);
}