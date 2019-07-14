const initState = {
    posts : [
        // {id : '1', title : 'bikin kopi', body: 'hakdfhsh fkashfkhskjf  h kfsfkhslakfjlasfsakasf skhfsahflas fashfhsnlfhosa'},
        // {id : '2', title : 'bikin greentea', body: 'hakdfh shfkas  hfkhskjfh kfsfkhslakfjsdfsafslkasf skhfsahflas fashfhsnlfhosa'},
        // {id : '3', title : 'bikin kue tar', body: 'hakdf  hshfkash  fkhskjfh kfsfkhslakfjlkasf sadfsafas khfsahflas dsfdsfasfs'},
    ]
}
const rootReducer = (state = initState , action) =>{
    console.log(action);
    if (action.type == 'DELETE_POST') {
        let newPost = state.posts.filter(res=>{
            return action.id !== res.id
        })
        return {
            ...state,
            posts : newPost
        }
    }

    if (action.type == 'ADD_POST') {
        console.log(action,'act dari add post');
        
        return {
            // ...state,
            posts : [...state.posts, action.data]
        }
    }
    
    return state
}

export default rootReducer