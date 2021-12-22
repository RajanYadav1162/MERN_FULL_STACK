//action types
const CHANGE_CREATOR = "CHANGE_CREATOR";
const CHANGE_TITLE = "CHANGE_TITLE";
const CHANGE_MESSAGE = "CHANGE_MESSAGE";
const CHANGE_TAGS = "CHANGE_TAGS";
const CHANGE_IMAGE = "CHANGE_IMAGE";
const CLEAR_FORM = "CLEAR_FORM";
const FILL_FORM = "FILL_FORM"
//action creators

export const fillForm = (payload)=>{
  return{
  type:FILL_FORM,
    payload
  }
}

export const clearForm = ()=>{
  return {
    type:CLEAR_FORM,
    payload:""
  }
    }


export const changeCreator = (payload) => {
  return {
    type: CHANGE_CREATOR,
    payload,
  };
};

export const changeTitle = (payload) => {
  return {
    type: CHANGE_TITLE,
    payload,
  };
};

export const changeMessage = (payload) => {
  return {
    type: CHANGE_MESSAGE,
    payload,
  };
};

export const changeImage = (payload) => {
  return {
    type: CHANGE_IMAGE,
    payload,
  };
};
export const changeTags = (payload) => {
  //it is an array comma separated
  const newPayload = payload.split(',')
  return {
    type: CHANGE_TAGS,
    payload : newPayload,
  };
};

const initialState = {
  creator: "",
  title: "",
  message: "",
  tags: "",
  image: "",
  edit:false,
  editID:"null"
};

const formReducer = (state = initialState, action) => {

  switch (action.type) {
    case CHANGE_TAGS:
      return { ...state, tags: action.payload };
    case CHANGE_IMAGE:
      return { ...state, image: action.payload };
    case CHANGE_MESSAGE:
      return { ...state, message: action.payload };
    case CHANGE_TITLE:
      return { ...state, title: action.payload };
    case CHANGE_CREATOR:
      return { ...state, creator: action.payload };
    case CLEAR_FORM:
      return initialState
    case FILL_FORM:
      return {...action.payload, edit:true}
    default:
      return state;
  }
};

export default formReducer;
