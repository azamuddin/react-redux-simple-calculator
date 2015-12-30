import React, {Component} from 'react'
import {render} from 'react-dom'
import _ from 'lodash'

class Root extends Component{
    constructor(props){
        super(props)
    }
   
    componentDidMount(){}
    
    render(){
        return <div>
            Root ready
            </div>
    }
}

Root.propTypes = {

}

Root.defaultProps = {

}

Root.state = {

}

export default Root