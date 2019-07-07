let errorHandler = (err, req, res, next) => {
    console.log("application error handler called");
    console.log(err);

    let apiResponse = 'Some error occured at global level'
    res.send(apiResponse)

} // end request ip logger function 

let notFoundHandler = (req, res, next) => {

    console.log("Global not found handler called");
    let apiResponse = 'Route not found in the application'
    res.status(404).send(apiResponse)

} // end not found handler

module.exports = {
    globalErrorHandler: errorHandler,
    globalNotFoundHandler: notFoundHandler
}