const PostModel = require('../models/post.model');
const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.readPost = (req, res) => {
    PostModel.find((err, docs) => {
        if (!err) res.send(docs);
        else console.log('Error to get data : ' + err);
    })
}

module.exports.createPost = (req, res) => {
    
}

module.exports.updatePost = (req, res) => {
    
}

module.exports.deletePost = (req, res) => {
    
}