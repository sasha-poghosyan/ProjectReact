import {connect} from 'react-redux';
import './Likes.css';
import { onDecrementLikes, onIncrementLikes } from '../../Redux/about/action';





function Likes(props){
    console.log(props);
    return(
        <div className='button-controls'>
            <button onClick={props.onincrementLikes}>like</button>
            {props.likes}
            <button onClick={props.ondecrementLikes}>dislike</button>
        </div>
    )
}
function mapStateToProps(state){
    console.log(state);
    const {likes}=state;
    return{
        likes: likes.likes
    }
}

// function mapDispatchToProps(dispatch){
//     return{
//         onIncrementLikes:()=>{
//             const action = {type:'INCREMENT'}
//             dispatch(action)
            
//         },
//         onDecrementLikes:()=>{
//             const action = {type:'DECREMENT'}
//             dispatch(action)
//         }
//     }
// }

function mapDispatchToProps(dispatch){
    return{
        onincrementLikes:()=>dispatch(onIncrementLikes()),
        ondecrementLikes:()=>dispatch(onDecrementLikes())
    }
}

export default  connect (mapStateToProps,mapDispatchToProps)(Likes);