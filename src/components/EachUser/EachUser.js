import React from "react";

import './EachUser.css';

const EachUser = props => {


    return (
        <li className="user-item">
            {props.children}
        </li>
    )

}

export default EachUser;