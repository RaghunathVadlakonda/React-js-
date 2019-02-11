// Multiple Users Component
// Users Component
import React, { Component} from 'react';
import User from './User';

class Users extends Component {
    render() {
        return (
            //<div> Hi!, Welcome to Second Component </div>
            <User />
        );
    }
}

export default Users;