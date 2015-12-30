import React, {Component} from 'react'
import _ from 'lodash'
import IconMenu from 'material-ui/lib/menus/icon-menu';
import IconButton from 'material-ui/lib/icon-button';
import FontIcon from 'material-ui/lib/font-icon';
import NavigationExpandMoreIcon from 'material-ui/lib/svg-icons/navigation/expand-more';
import MenuItem from 'material-ui/lib/menus/menu-item';
import DropDownMenu from 'material-ui/lib/DropDownMenu';
import RaisedButton from 'material-ui/lib/raised-button';
import Toolbar from 'material-ui/lib/toolbar/toolbar';
import ToolbarGroup from 'material-ui/lib/toolbar/toolbar-group';
import ToolbarSeparator from 'material-ui/lib/toolbar/toolbar-separator';
import ToolbarTitle from 'material-ui/lib/toolbar/toolbar-title';

class TopBar extends Component{
    constructor(props){
        super(props)
    }
    
    render(){
        let { pageTitle, rightBtn } = this.props
        return <div>
                <Toolbar>
                    <ToolbarTitle text={pageTitle}/>
                    <ToolbarGroup float="right">
                        {rightBtn}
                    </ToolbarGroup>
                </Toolbar>
            </div>
    }
}

TopBar.propTypes = {

}

TopBar.defaultProps = {

}

export default TopBar