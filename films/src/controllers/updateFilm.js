const { response } = require("../utils");
const data = require("../data");

module.exports = async (req, res) => {
    const {id} = req.params;
    const info = req.body;
    const film = await data.update(id, info);
    response(res, 200, film)
}