// Multiple Users Component
// Users Component
import React, { Component} from 'react';
import User from './User';

class Users extends Component {

    //state
    state = {
        users : [
              { name:"Harry",age:28 },
              { name:"Poter",age:35 },
              { name:"Emma",age:25 },
            
        ]
    };
    render() {
        return (
            //<div> Hi!, Welcome to Second Component </div>
            <div>  
                <User age= {this.state.users[0].age}>{this.state.users[0].name} </User>
                <User age= {this.state.users[1].age}>{this.state.users[1].name} </User>
                <User age= {this.state.users[2].age}>{this.state.users[2].name} </User>
            </div>
        );
    }
}

export default Users;