// signle User Component

import React from 'react';

const User = (props) => {
    let version = props.version ? props.version : "NA";
    if(props.children){
        return (
            <div> Name: {props.children} | version : {version}</div>
        )
    } else {
        return <div> Please Enter Details </div>
       
    }

    
}

export default User;