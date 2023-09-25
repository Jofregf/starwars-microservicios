const {response} = require("../utils");
const data = require("../data");

module.exports = async (req, res) => {
    
    const film = await data.list();
    response(res, 200, film);
}