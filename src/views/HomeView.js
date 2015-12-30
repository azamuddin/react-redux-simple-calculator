import React, {Component} from 'react'
import {render} from 'react-dom'
import _ from 'lodash'
import TopBar from '../components/TopBar'
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import {Link} from 'react-router'
import {connect} from 'react-redux'

import TextField from 'material-ui/lib/text-field';
import * as actions from '../redux/actions/calculator'



// components
import ScreenNumber from '../components/ScreenNumber'
import ButtonGroup from '../components/ButtonGroup'


class HomeView extends Component{
    constructor(props){
        super(props)
    }
   
    componentDidMount(){}
    
    render(){
        let rightBtn = (<Link to="about">
            <FlatButton label="tentang" secondary={true}/>
        </Link>)

        let {screenValue, dispatch} = this.props

        return <div>
                <TopBar pageTitle="Calculator" rightBtn={rightBtn}/>
                <div className="content">
                    <ScreenNumber screenValue={screenValue} />
                    <ButtonGroup
                        onScreenValueUpdate={(value) => dispatch(actions.updateScreenValue(value)) }
                        onGetResult={()=>dispatch(actions.getResult())}
                        onResetScreenValue={()=>dispatch(actions.resetScreenValue())}
                        />
                </div>
            </div>
    }
}

HomeView.propTypes = {

}

HomeView.defaultProps = {

}

HomeView.state = {

}

function mapStateToProps(state){
   return {
        screenValue: state.screenValue
   }
}

export default connect(mapStateToProps)(HomeView)