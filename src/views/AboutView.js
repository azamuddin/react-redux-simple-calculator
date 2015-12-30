import React, {Component} from 'react'
import {render} from 'react-dom'
import _ from 'lodash'
import TopBar from '../components/TopBar'
import {Link} from 'react-router'
import FlatButton from 'material-ui/lib/flat-button';
import RaisedButton from 'material-ui/lib/raised-button';
import FloatingActionButton from 'material-ui/lib/floating-action-button';


class AboutView extends Component{
    constructor(props){
        super(props)
    }
   
    componentDidMount(){}
    
    render(){
        let rightBtn = (<Link to="/">
            <FlatButton label="kembali" secondary={true}/>
        </Link>)
        return <div>
                    <TopBar pageTitle="Tentang Calculator" rightBtn={rightBtn}/>
                    <div className="content" style={{textAlign: 'center'}}>
                        <h4>React Redux Simple Calculator </h4> <hr/>
                        Contoh aplikasi sederhana react-redux menggunakan:
                        <br/>
                        <ul style={{textAlign: 'left'}}>
                            <li>
                                <b>react-redux-simple-starter</b>
                                <br/>
                                <a target="_new" href="https://github.com/frontendfuture/redux-react-simple-starter">
                                    https://github.com/frontendfuture/redux-react-simple-starter
                                </a>
                            </li>
                            <br/>
                            <li>
                                <b>react-simple-router</b>
                                <br/>
                                    <a target="_new" href="https://github.com/rackt/redux-simple-router">
                                        https://github.com/rackt/redux-simple-router
                                    </a>
                            </li>
                            <br/>
                            <li>
                                <b>material UI</b>
                                 <br/>
                                 <a target="_new" href="http://www.material-ui.com/">
                                    http://www.material-ui.com/
                                 </a>
                            </li>
                        </ul>
                        <hr/>
                        email: <a href="mailto:mas.azamuddin@gmail.com">mas.azamuddin@gmail.com</a><hr/>
                        Join FB GROUP ReactJS Indonesia:
                        <a href="https://www.facebook.com/groups/442974152553174/" target="_new">
                            ReactJS Indonesia
                        </a>
                    </div>
            </div>
    }
}

AboutView.propTypes = {

}

AboutView.defaultProps = {

}

AboutView.state = {

}

export default AboutView