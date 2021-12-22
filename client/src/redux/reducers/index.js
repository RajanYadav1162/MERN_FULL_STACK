import {combineReducers} from "redux";
import formReducer from './formReducer'
import postReducer from "./postReducer";
const reducer  = combineReducers({
    formReducer,
    postReducer
})
export default reducer