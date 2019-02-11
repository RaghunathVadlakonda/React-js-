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
            <User> React-Native </User>
            <User> Node </User>
            <User> MongoDB </User>
            </div>
        );
    }
}

export default Users;