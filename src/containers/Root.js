import React, {Component} from 'react'
import {render} from 'react-dom'
import _ from 'lodash'
import {connect} from 'react-redux'
import {increment, decrement} from '../redux/actions/counter'

import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';


class Root extends Component{
    constructor(props){
        super(props)
    }
   
    componentDidMount(){}
    
    render(){
        let {dispatch, number} = this.props
        return <div>
                {number}
                <RaisedButton onClick={() => dispatch(increment(1))} label="increment" primary={true}/>
                <RaisedButton onClick={() => dispatch(decrement(1))} label="decrement" secondary={true} />
            </div>
    }
}

Root.propTypes = {

}

Root.defaultProps = {

}

Root.state = {

}

function mapStateToProps(state){
    return {
        number: state.counter
    }
}

export default connect(mapStateToProps)(Root)