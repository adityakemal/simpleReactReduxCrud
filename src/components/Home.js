import React, {Component} from 'react'
import {connect} from 'react-redux'



class Home extends Component {  
    render() {
        // console.log(this.props);
        const listData = this.props.posts.map((res, i) => {
            return (
                <div key={i}>

                    <h1>
                    {res.id}. 
                    {res.title}
                    </h1>
                    <p>
                    {res.body}
                    </p>
                </div>
                
            )
        })
        return (
            <div>
                {listData}
            </div>
        )
    }
}
const mapStateToProps = (state) =>{
    return {
        posts : state.posts
    }
}
export default connect(mapStateToProps)(Home)
