import React, {Component} from 'react'
import _ from 'lodash'

import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';


class ButtonGroup extends Component{
    constructor(props){
        super(props)
    }

    renderNumbers(){
        let numbers = [0,1,2,3,4,5,6,7,8,9]

        return <table className="button-group">
            <tbody>
            <tr>
                <td colSpan="3">
                    <RaisedButton onClick={()=>{this.props.onResetScreenValue()}} label="AC" style={{width:'100%'}} primary={true}/>
                </td>
                <td>
                    <RaisedButton onClick={()=>{this.props.onScreenValueUpdate('/')}} label="/" secondary={true}/>
                </td>
            </tr>
            <tr>
                {[7,8,9].map(number => {
                    return <td key={number}>
                        <RaisedButton onClick={()=>{this.props.onScreenValueUpdate(number)}} label={number} primary={true}/>
                    </td>
                })}
                <td>
                    <RaisedButton onClick={()=>{this.props.onScreenValueUpdate('*')}} label="x" secondary={true}/>
                </td>
            </tr>
            <tr>
                {[4,5,6].map(number => {
                    return <td key={number}>
                        <RaisedButton onClick={()=>{this.props.onScreenValueUpdate(number)}} label={number} primary={true}/>
                    </td>
                })}
                <td>
                    <RaisedButton onClick={()=>{this.props.onScreenValueUpdate('-')}} label="-" secondary={true}/>
                </td>
            </tr>
            <tr>
                {[1,2,3].map(number => {
                    return <td key={number}>
                        <RaisedButton onClick={()=>{this.props.onScreenValueUpdate(number)}} label={number} primary={true}/>
                    </td>
                })}
                <td>
                    <RaisedButton onClick={()=>{this.props.onScreenValueUpdate('+')}} label="+" secondary={true}/>
                </td>
            </tr>
            <tr>
                <td colSpan="2">
                    <RaisedButton onClick={()=>{this.props.onScreenValueUpdate('0')}} style={{width: '100%'}} label={'0'} primary={true} />
                </td>
                <td></td>
                <td colSpan="1">
                    <RaisedButton style={{width: '100%'}} onClick={()=>{this.props.onGetResult()}} label="=" secondary={true}/>
                </td>
            </tr>
            </tbody>
        </table>

    }
    
    render(){

        return <div>
                {this.renderNumbers()}
            </div>
    }
}

ButtonGroup.propTypes = {

}

ButtonGroup.defaultProps = {

}

export default ButtonGroup