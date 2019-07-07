const express = require('express');
const appConfig = require("./../appConfig");
const triviaController = require("./../controllers/triviaController")

module.exports.setRouter = function (app) {

	let baseUrl = '/trivia';

	app.post(baseUrl + '/addQuiz', triviaController.addQuiz);

	app.get(baseUrl + '/getAllQuiz', triviaController.getQuiz);

	app.post(baseUrl + '/addHistory', triviaController.addHistory);

	app.get(baseUrl + '/getAllHistory', triviaController.getHistory);


	/* app.get(baseUrl + '/getAll', triviaController.getHistory); */

}