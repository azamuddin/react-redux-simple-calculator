import React, {Component} from 'react'
import _ from 'lodash'

import TextField from 'material-ui/lib/text-field';

class ScreenNumber extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        return <div>
                <TextField style={{width: '100%'}} value={this.props.screenValue} disabled={true}/>
            </div>
    }
}

ScreenNumber.propTypes = {

}

ScreenNumber.defaultProps = {

}

export default ScreenNumber