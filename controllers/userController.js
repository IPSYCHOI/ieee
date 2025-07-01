const User=require("../models/userModel")

exports.create = async(req, res, next) => {
    try {
        // TODO: implement create logic
    } catch (error) {
        next(error)
    }
};

exports.getAll = async(req, res, next) => {
    try {
        res.status(200).json({
            msg:"done"
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
