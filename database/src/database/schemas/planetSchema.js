const { Schema } = require("mongoose");
const { ClientError } = require("../../utils/errors");
const {v4: uuidv4} = require("uuid");

const planetSchema = new Schema({
    "_id": {
        type: String, 
        default: uuidv4
    },
    "name": {
        type: String, 
        required: true
    },
    "rotation_period": {
        type: String,
        validate: {
            validator: (value) => !isNaN(value),
            message: "El height debe ser un número válido",
        },
    },
    "orbital_period": {
        type: String,
        validate: {
            validator: (value) => !isNaN(value),
            message: "El height debe ser un número válido",
        },
    },
    "diameter": {
        type: String,
        validate: {
            validator: (value) => !isNaN(value),
            message: "El height debe ser un número válido",
        },
    },
    "climate": String,
    "gravity": String,
    "terrain": String,
    "surface_water": String,
    "residents": [{type: String, ref: "Character"}],
    "films": [{type: String, ref:"Film"}]
})

planetSchema.statics.list = async function (){
    return this.find()
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"])
}

planetSchema.statics.get = async function (id){
    return await this.findById(id)
        .populate("residents", ["_id", "name"])
        .populate("films", ["_id", "title"])
}

planetSchema.statics.insert = async function (planet){
    return await this.create(planet);
}

planetSchema.statics.remov = async function (_id) {
    const result = await this.findByIdAndDelete(_id);
    if (!result) {
        throw new ClientError("Planet no encontrado", 404);
    }
    return result;
};

planetSchema.statics.update = async function (_id, planet) {
    const result = await this.findByIdAndUpdate(_id, planet, {
        runValidators: true,
        new: true
    });
    if (!result) {
        throw new ClientError("Planet no encontrado", 404);
    }
    return result;
};

module.exports = planetSchema;