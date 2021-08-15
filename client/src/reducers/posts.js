export default (posts=[],action)=>{
    switch (action.type){
        case 'DELETE':
            return posts.filter((post)=>posts._id!==action.payload);

        case 'UPDATE':
        case 'LIKE':
            return posts.map((post)=>posts._id===action.payload._id? action.payload : posts);
            
        case 'FETCH_ALL':
            return action.payload;

        case 'CREATE':
            return [...posts,action.payload];

        default:
            return posts;

    }
}


//import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes';



