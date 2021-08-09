export default (posts=[],action)=>{
    switch (action.type){
        case 'DELETE':
            return posts.filter(()=>posts._id!==action.payload);

        case 'UPDATE':
            return posts.map(()=>posts._id===action.payload._id? action.payload : posts);
            
        case 'FETCH ALL':
            return action.payload;

        case 'CREATE':
            return [...posts,action.payload];

        default:
            return posts;

    }
}