import Post from '../database/models/Post.js';

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    return res.status(200).send(posts);
  } catch (err) {
    return res.send('error while fetching todos');
  }
};

export const addPost = async (req, res) => {
  const data = req.body;

  try {
    const newPost = new Post(data);
    const result = await newPost.save(data);
    return res.status(200).send(result);
  } catch (err) {
    return res.send('error while adding post');
  }
};

export const updatePost = async (req, res) => {
  const data = req.body;
  const { postID } = req.params;
  try {
    const targetPost = await Post.findOne({ _id: postID });
    if (targetPost) {
      const response = await Post.findByIdAndUpdate({_id:postID},data,{new:true});
      return res.status(200).send(response);
    } else {
      return res.send('error while updating the post');
    }
  } catch (err) {
    return res.send('error while updating post');
  }
};

export const deletePost = async (req, res) => {
  const { postID } = req.params;
  try {
    const targetPost = await Post.findOne({ _id: postID });
    if (targetPost) {
      await Post.deleteOne({_id: postID});
      //return res.status(200).send(deleteResponse);
      const newData = await Post.find({});
      return res.status(200).send(newData);
    }
    return res.send('error while deleting the post');
  } catch (err) {
    return res.send('error while deleting post');
  }
};
export const likePost = async (req,res)=>{

    const { postID } = req.params;
  try {
    const targetPost = await Post.findOne({ _id: postID });
    if (targetPost) {
      targetPost.likes = targetPost.likes + 1;
     const response =  await targetPost.save()
      return res.status(200).send(response);
    } else {
      return res.send('error while liking the post');
    }
  } catch (err) {
    return res.send('error while liking post');
  }
}