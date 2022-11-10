const notFound = "Not found"

const setPath = () => {
    if (process.env.NODE_ENV === "production") {
        return "/"
    } else {
        return "http://localhost:3000";
    }
}

const secured = (req, res, next) => {
    if (req.user) {
        return next();
    }
    res.send(notFound);
};

module.exports = { secured, setPath, notFound }