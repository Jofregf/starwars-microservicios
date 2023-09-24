const response = require("../utils");
const axios = require("axios");

module.exports = async (req, res) => {
    const {error, planet} = await axios.post("http://database:8004/Planet", req.body)
    response(res, 201, planet.data);
}