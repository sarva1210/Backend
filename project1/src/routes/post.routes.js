const express = require('express')
const postController = require('../controllers/post.controller')
const postRouter = express.Router()
const multer = require('multer')
const upload = multer({storage:multer.memoryStorage()})

// post /api/posts {protected}
postRouter.post("/",upload.single("image"), postController.createPostController)

// get /api/posts
postRouter.get("/",postController.getPostController)

// get /api/posts/details/:postid
postRouter.get("/details:postId", postController.getPostDetailsController)


module.exports = postRouter
