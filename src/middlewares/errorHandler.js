export const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = statusCode === 500 ? 'Internal server error' : err.message;

    if (statusCode === 500) console.log(err);

    res.status(statusCode).json({
        status: false,
        message,
        data: null
    })
}

export const resourceNotFound = (req, res, next) => {
    const error = new Error(`Resource not found`);
    error.statusCode = 404;
    next(error);
}