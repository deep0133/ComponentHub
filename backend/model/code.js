const mongoose = require('mongoose');

const codeSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        require: true
    },
    snippets: [
        {
            language: String,
            title: String,
            code: String
        }
    ]
})

const codeModel = mongoose.model('code', codeSchema);

module.exports = codeModel;