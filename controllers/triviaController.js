const mongoose = require("mongoose");
const shortid = require("shortid");
const moment = require("moment")
/* Models */
const TriviaModel = mongoose.model("trivia");
const HistoryModel = mongoose.model("history");

/**
 * function to read all quiz questions.
 */
let getQuiz = (req, res) => {
  console.log("here")
  TriviaModel.find()
    .select("-__v -_id")
    .lean()
    .exec((err, result) => {
      if (err) {
        console.log(err);
        console.log("trivia Controller: getQuiz");
        let apiResponse = "Failed To Find quiz Details";
        res.send(apiResponse);
      } else {
        let apiResponse = result
        res.send(apiResponse);
      }
    });
}; // end 

let addQuiz = (req, res) => {
  let newTrivia = new TriviaModel({
    question: req.body.question,
    answer: req.body.answer,
    answerType: req.body.answerType
  }); // end new trivia model

  newTrivia.save((err, result) => {
    if (err) {
      console.log("Error Occured.");
      console.error(`Error Occured : ${err}`, "Database", 10);
      let apiResponse = "Error Occured"
      res.send(apiResponse);
    } else {
      console.log("Success in blog creation");
      res.send(result);
    }
  }); // end new trivia save

}

let addHistory = (req, res) => {
  console.log("inside create history")
  console.log(req.body);
  let newData = new HistoryModel({
    userName: req.body.userName,
    answerList: req.body.answerList,
    playedAt: moment().format('LLL')
  }); // end new history model

  console.log(newData)

  newData.save((err, result) => {
    if (err) {
      console.log("Error Occured.");
      console.error(`Error Occured : ${err}`, "Database", 10);
      let apiResponse = "Error Occured"
      res.send(apiResponse);
    } else {
      console.log("Success in blog creation");
      res.send(result);
    }
  }); // end new history save

}

let getHistory = (req, res) => {
  console.log("in getHistory")
  HistoryModel.find()
    .select("-__v -_id")
    .lean()
    .exec((err, result) => {
      if (err) {
        console.log(err);
        console.log("Trivia Controller: getHistory");
        let apiResponse = "Failed To Find history Details";
        res.send(apiResponse);
      } else {
        let apiResponse = result
        res.send(apiResponse);
      }
    });
}; // end 



module.exports = {
  getQuiz: getQuiz,
  addQuiz: addQuiz,
  addHistory: addHistory,
  getHistory: getHistory
}; // end exports