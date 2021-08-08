export default (posts=[],action)=>{
    switch (action.type){
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