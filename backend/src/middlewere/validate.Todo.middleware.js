const validateTodo = (req, res, next) => {
    const { title, description } = req.body;

    if (!title || !description) {
        return res.status(400).json({ message: "Missing details" });
    }

    next();
};

module.exports={validateTodo}