const router = require('express').Router();
const Comment = require('../models/Comment');
const User = require("../models/User");
const Post = require("../models/Post");

//create comment
router.post("/", async (req, res) => {
    const newComment = new Comment(req.body);

    try{
        const savedComment = await newComment.save();
        res.status(200).json(savedComment);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//update comment
router.put("/:id", async(req, res) => {
    try{
        const comment = await Comment.findById(req.params.id);

        if(comment.userId === req.body.userId){
            await comment.updateOne({$set:req.body});

            res.status(200).json("The comment has been updated");
        }
        else{
            res.status(403).json("You can update only your comment");
        }
    }
    catch(err){
        res.status(500).json(err);
    }
});

//delete comment
router.delete("/:id", async(req, res) => {
    try{
        const comment = await Comment.findById(req.params.id);

        if(comment.userId === req.body.userId){
            await comment.deleteOne({$set:req.body});

            res.status(200).json("The post has been deleted");
        }
        else{
            res.status(403).json("You can delete only your comment");
        }
    }
    catch(err){
        res.status(500).json(err);
    }
});

//get a comment
router.get("/:id", async(req, res) => {
    try{
        const comment = await Comment.findById(req.params.id);

        res.status(200).json(comment);
    }
    catch(err){
        res.status(500).json(err);
    }
});

//get all comments
router.get("/all/:userId", async(req, res) => {
    try{
        const currentUser = await User.findById(req.params.userId);

        const userComments = await Comment.find({userId: currentUser._id});

        const friendComments = await Promise.all(
            currentUser.followings.map((friendId) => {
                return Comment.find({userId: friendId});
            })
        );

        res.status(200).json(userComments.concat(...friendComments));
    }
    catch(err){
        res.status(500).json(err);
    }
});

//get post's comment
router.get("/post/:postId", async(req, res) => {
    try{
        const post = await Post.findOne({postId : req.params.postId});

        const comments= await Comment.find({postId : post._id});

        res.status(200).json(comments);
    }
    catch(err){
        res.status(500).json(err);
    }
});

module.exports = router;
