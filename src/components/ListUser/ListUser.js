import React from "react";

import EachUser from "../EachUser/EachUser";

import './ListUser.css';

const ListUser = (props) =>{


    return (
        <ul>
            {props.items.map(user => (
                <EachUser>
                    {user.name}, age {user.age}
                </EachUser>
            ))}
        </ul>
    );

}



export default ListUser;

