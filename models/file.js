const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema({
    createdAt: {
        type: Date,
        default: Date.now,
    },
    jsonObj: {
        type:  Object,
        required: true
    }
})
;

const File = mongoose.model("File", fileSchema);

module.exports = File;