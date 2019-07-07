// importing mongoose module
const mongoose = require('mongoose')
// import schema 
const Schema = mongoose.Schema;

let historySchema = new Schema({
  userName: {
    type: String,
    default: null
  },
  answerList: {
    type: Array,
    default: []
  },
  playedAt: {
    type: String,
    default: null
  }
})

mongoose.model('history', historySchema);