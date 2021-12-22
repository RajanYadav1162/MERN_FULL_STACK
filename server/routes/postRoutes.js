import express from 'express';
import {
  getPosts,
  addPost,
  updatePost,
  deletePost,
  likePost
} from '../controllers/postcontrollers.js';
const Router = express.Router();

Router.get('/', getPosts);
Router.post('/', addPost);
Router.put('/:postID', updatePost);
Router.delete('/:postID', deletePost);
Router.put('/likes/:postID', likePost)

export default Router;
