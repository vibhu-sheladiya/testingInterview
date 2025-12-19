const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../../models/userModel");
const scretKey = "csvscvsvsuwdvdfyd";
const moment = require("moment");
const Post = require("../../models/postModel");


const register = async (req, res) => {
  try {
    const { email, name, password, role, confirmpass, mobile,} = req.body;
    // if (!email || !name || !password || !role || !mobile || !confirmpass || !adress) {
    //   throw new Error("please all feild required and fillup");
    // }
    if (password !== confirmpass) {
      throw new Error("password does not match");
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      throw new Error("user already existing this email");
    }
    const hashpassword = await bcrypt.hash(password, 8);
  
    const payload = {
      email,
      exp: moment().add(1, "days").unix(),
    };
    const token =await jwt.sign(payload, scretKey);
    const filter = {
      email,
      name,
      password: hashpassword,
      role,
      mobile,
      token,
    };
    const data = await User.create(filter);
    return res.status(200).json({ data: data, message: "created user succesfully" });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("user not found");
    }

    const comparepasword =await bcrypt.compare(password, user.password);
    if (!comparepasword) {
      throw new Error("invalid password");
    }
    const payload = {
      email: user.email,
    };
    const token = await jwt.sign(payload, scretKey, {
      expiresIn: "10m",
    });
    user.token = token;
    const output = await user.save();
    res.status(200).json({
      data: output,
      message: "welcome login successfully",
      success: true,
      status: 200,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const userProfile = async (req, res) => {
  try {
    const userId = req.body.userId;
    const user = await User.findById(userId).select("-password -token");
    if (!user) {
      throw new Error("user not found");
    } 
    res.status(200).json({ data: user, message: "user details fetched" });
  }
  catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const createPost = async (req, res) => {
  try {
     const { caption,userId } = req.body;

    if (!caption) {
      return res.status(400).json({ message: "Caption is required" });
    }

    const post = await Post.create({
      userId, 
      caption,
    });

    res.status(200).json({ message: "created post successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const fetchPosts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    const skip = (page - 1) * limit;

      const totalPosts = await Post.countDocuments();

    const posts = await Post.find()
      .populate("userId", "first_name last_name email")
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      message: "Posts fetched successfully",
      meta: {
        totalPosts,
        currentPage: page,
        totalPages: Math.ceil(totalPosts / limit),
        limit,
      },
      data: posts,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const userWisePosts = async (req, res) => {
  try {
    const userId = req.params.userId;
    const posts = await Post.find({ userId }).populate("userId", "first_name last_name email");
    res.status(200).json({ total: posts.length, data: posts, message: "User posts fetched successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const likePost = async (req, res) => {
  try {
    const postId = req.params.id;

    const post = await Post.findByIdAndUpdate(
      postId,
      { $inc: { likes: 1 } },   
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    res.status(200).json({
      success: true,
      message: "Post liked successfully",
      data: post,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  userProfile,
  createPost,
  fetchPosts,
  userWisePosts,
  likePost,

};