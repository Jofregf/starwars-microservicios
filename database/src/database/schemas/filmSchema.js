const { Schema } = require("mongoose");
const { ClientError } = require("../../utils/errors");
const {v4: uuidv4} = require("uuid");

const filmSchema = new Schema({
    "_id": {
        type: String, 
        default: uuidv4
    },
    "title": {
        type: String, 
        required: true
    },
    "opening_crawl": String,
    "director": {
        type: String, 
        required: true
    },
    "producer": String,
    "release_date": {
        type: Date, 
        match: /^\d{4}-\d{2}-\d{2}$/
    },
    "characters": [{
        type: String, 
        ref: "Character"
    }],
    "planets": [{
        type: String, 
        ref: "Planet"
    }]
});

filmSchema.statics.list = async function() { 
    return await this.find()
        .populate("characters", ["_id", "name"])
        .populate("planets", ["_id", "name"])
};

filmSchema.statics.get = async function(id) {
    return await this.findById(id)
        .populate("characters", ["_id", "name"])
        .populate("planets", ["_id", "name"])
};

filmSchema.statics.insert = async function(film) {
    return await this.create(film)
};

filmSchema.statics.remov = async function (_id) {
    const result = await this.findByIdAndDelete(_id);
    if (!result) {
        throw new ClientError("Film no encontrado", 404);
    }
    return result;
};

filmSchema.statics.update = async function (_id, film) {
    const result = await this.findByIdAndUpdate(_id, film, {
        runValidators: true,
        new: true
    });
    if (!result) {
        throw new ClientError("Film no encontrado", 404);
    }
    return result;
};

module.exports = filmSchema;