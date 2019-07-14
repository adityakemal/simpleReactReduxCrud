// import React, {Component} from 'react'
// import {createStore} from 'redux'


// class ReduxDemo extends Component {
//     render(){
//         //step2 Reducer : state and action
//         // const reducer = function(state, action) {
//         //     if (action.type === 'ATTACK') {
//         //         return action.payload //can be data value dll
//         //     }
//         //     if (action.type === 'GREENATTACK') {
//         //         return action.payload //can be data value dll
//         //     }
//         //     return state
//         // }
//         // //step1 Store : reducer and state
//         // const store = createStore(reducer, 'peace')
        
//         // //step3 subsribe
//         // store.subscribe(()=>{
//         //     console.log('store now ::', store.getState());
//         // })

//         // // step4 dispatch action
//         // store.dispatch({type : 'ATTACK', payload : 'iron man'})
//         // store.dispatch({type : 'GREENATTACK', payload : 'HULK'})


//         const initState = {
//             todos : [],
//             posts : [],
//           }
          
//           function myreducer(state = initState , action){  
//              if(action.type == 'ADD_TODO'){
//                 return{
//                   todos : [...state.todos, action.todo]
//                 }
//               }
//           }
//           store.subscribe(()=>{
//             console.log('store updated');
//             console.log(store.getState());
//           })
//           const store = createStore(myreducer)
          
//           const todoAction = { type : 'ADD_TODO', todo : 'beli kue'}
//           store.dispatch(todoAction)


//         return(
//             <div>
//                 test
//             </div>
//         )
//     }
// } 

// export default ReduxDemo;