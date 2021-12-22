//action types
const GET_POSTS = "GET_POSTS";
const CREATE_POST = "CREATE_POST";
const DELETE_POST = "DELETE_POST";
const LIKE_POST = "LIKE_POST";
const EDIT_POST = "EDIT_POST"

export const editPost = (id,payload)=>{
  return async (dispatch) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "PUT",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
    let data = await res.json();
    dispatch({ type: EDIT_POST,payload:data });
  };
}

export const likePost = (id) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:5000/posts/likes/${id}`, {
      method: "PUT",
    });
     let data = await res.json();
    dispatch({ type: LIKE_POST,payload:data });
  };
};


export const createPost = (payload) => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:5000/posts", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "content-type": "application/json",
      },
    });
    const data = await res.json();

    dispatch({ type: CREATE_POST, payload: data });
  };
};

export const getPosts = () => {
  return async (dispatch) => {
    const res = await fetch("http://localhost:5000/posts");
    const data = await res.json();
    dispatch({ type: GET_POSTS, payload: data });
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    const res = await fetch(`http://localhost:5000/posts/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    dispatch({ type: DELETE_POST, payload: data });
  };
};

const initialState = [];
const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POSTS:
      return [...action.payload];
    case CREATE_POST:
      return [...state, action.payload];
    case DELETE_POST:
      return [...action.payload];
    case LIKE_POST:
    return state.map((post)=>post._id === action.payload._id ? action.payload:post)
    case EDIT_POST:
      return state.map((post)=>post._id === action.payload._id ? action.payload:post)
    default:
      return state;
  }
};
export default postReducer;
