import React, {Component} from 'react'
import { connect } from "react-redux";
import {deletePost} from '../actions/postAction.js'

class DeletePost extends Component {
    state = {
        id : '',
        dummy : {id : '5', title : 'saya dummy', body : ' wkwkwkwkwkw kwkwkwkw kwkwkw wkkww '}
    }
    handleChange = (e)=>{
        console.log(this.state);
        this.setState({id : e.target.value})
    }
    handleClick = ()=>{

        //ini dari action redux ada di props
       return this.props.deletePost(this.state.id)
    }

    handleAdd=()=>{
        console.log(this.props);
        
        this.props.addPost(this.state.dummy)
    }
    render(){ 
        console.log(this.props , 'from add post');
        return (
            <div>
                <hr />
                <input type='number' min='1' onChange={this.handleChange}/>
                <button onClick={this.handleClick}>delete</button>
                <button onClick={this.handleAdd}>add dumy fro state</button>

                
            </div>
        )
    }
}

////////////menampilkan state di root reducer menjadi props disini
const mapStateToProps = (state, ownProps)=>{
    console.log(ownProps);
    const id = '2'
    return{
        post : state.posts.find(post => post.id === id)
    }
}

///////////// menambah action / fungsi ke rootreducer
const mapDispatchToProps = (dispatch) =>{
    return {
        deletePost : (id) => { dispatch({type:'DELETE_POST' , id : id})},
        addPost : (data) => { dispatch({type:'ADD_POST' , data: data})}
    }
}

///////////// sama saja seperti di atas hanya object dalam 
///////////// dispatch di import dari file lain yg khusus semua action
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         deletePost : (id) => { dispatch(deletePost(id)) }
//     }
// }
export default connect(mapStateToProps, mapDispatchToProps)(DeletePost)
