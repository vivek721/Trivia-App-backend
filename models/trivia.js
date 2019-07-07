// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let triviaSchema = new Schema({
    question: {
        type: String,
    },
    answer: {
        type: Array,
        default: null
    },
    answerType: {
        type: String
    }
})

mongoose.model('trivia', triviaSchema);