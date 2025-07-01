const {users}=require("../app")
exports.create = async(req, res, next) => {
    try {
        const user = req.body.userName
        users.push(user)
    } catch (error) {
        next(error)
    }
};

exports.getAll = async(req, res, next) => {
    try {
        res.status(200).json({
            users
        })
    } catch (error) {
        next(error)
    }
};

exports.getOne = async(req, res, next) => {
    try {
        // TODO: implement get one logic
    } catch (error) {
        next(error)
    }
};

exports.update = async(req, res, next) => {
    try {
        // TODO: implement update logic
    } catch (error) {
        next(error)
    }
};

exports.remove = async(req, res, next) => {
    try {
        // TODO: implement remove logic
    } catch (error) {
        next(error)
    }
};
