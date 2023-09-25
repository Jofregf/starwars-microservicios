const { Schema } = require("mongoose");
const { ClientError } = require("../../utils/errors");

const characterSchema = new Schema({
    _id: String,
    name: {
        type: String,
        required: true,
    },
    height: {
        type: String,
        validate: {
            validator: (value) => !isNaN(value),
            message: "El height debe ser un número válido",
        },
    },
    mass: {
        type: String,
        validate: {
            validator: (value) => !isNaN(value),
            message: "El height debe ser un número válido",
        },
    },
    hair_color: String,
    skin_color: String,
    eye_color: String,
    birth_year: String,
    gender: { 
        type: String, 
        enum: ["male", "female", "n/a"] 
    },
    homeworld: { 
        type: String, 
        ref: "Planet" 
    }, // Referencia al Id del planeta
    films: [{ 
        type: String, 
        ref: "Film" 
    }], // Array de referencia a films
});

characterSchema.statics.list = async function () {
    return await this.find()
        .populate("homeworld", ["_id", "name"])
        .populate("films", ["_id", "title"]);
};

characterSchema.statics.get = async function (_id) {
    return await this.findById(_id)
        .populate("homeworld", ["_id", "name"])
        .populate("films", ["_id", "title"]);
};

characterSchema.statics.insert = async function (character) {
    return await this.create(character);
};

characterSchema.statics.remov = async function (_id) {
    const result = await this.findByIdAndDelete(_id);
    if (!result) {
        throw new ClientError("Character no encontrado", 404);
    }
    return result;
};

characterSchema.statics.update = async function (_id, character) {
    const result = await this.findByIdAndUpdate(_id, character, {
        runValidators: true,
        new: true
    });
    if (!result) {
        throw new ClientError("Character no encontrado", 404);
    }
    return result;
};

module.exports = characterSchema;
