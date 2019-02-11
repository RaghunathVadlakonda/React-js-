// Multiple Users Component
// Users Component
import React, { Component} from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            //<div> Hi!, Welcome to Second Component </div>
            <div>  
            <h3>{this.props.title}</h3>
            <User> React </User>
            <User version = "16.8"> React-Native </User>
            <User version = "5.11"> Node </User>
            <User ></User>
            
            </div>
        );
    }
}

export default Users;