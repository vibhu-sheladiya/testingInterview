const express = require("express");
const { userValidation } = require("../../validation");
const {  register, getUserList, getUserDetails, updateDetails, deleteUser, sendMail, login, userProfile, createPost, fetchPosts, userWisePosts, likePost } = require("../../controller/user/userController");
const validate = require("../../middleware/validate");
const auth = require("../../middleware/auth");

const router = express.Router();

/** create user */
router.post(
  "/create-user",
  // auth(),
  // validate(userValidation.createUser),
  register
);

router.post("/login",auth.userAuth(),login );

router.get("/profile",auth.userAuth(),userProfile);

router.post("/create-post",auth.userAuth(),createPost);
router.get("/fetch-posts",auth.userAuth(),fetchPosts);
router.get("/user-posts/:userId",auth.userAuth(),userWisePosts);
router.post("/like-post/:id",likePost);

module.exports = router;