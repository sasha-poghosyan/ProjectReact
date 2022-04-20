import { combineReducers } from "redux";
import { likesReducer } from "./about/Reducer";


const rootReducer = combineReducers({
    likes:likesReducer
})
export default rootReducer;