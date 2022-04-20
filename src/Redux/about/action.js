import { INCREMENT,DECREMENT } from "./Types";


export function onIncrementLikes(){
    return{
        type: INCREMENT
    }
}
export function onDecrementLikes(){
    return{
        type: DECREMENT
    }
}