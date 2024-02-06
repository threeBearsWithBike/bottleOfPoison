import React from "react";
import mouseIcon from './img/icons8-мышь-64.png';
import './Mouse.css';

const Mouse = ({ mouse }) => {
    return (
        <div className={ mouse ? 'Mouse-dead' : 'Mouse' }>
            <img src={mouseIcon}></img>
        </div>
    )
}

export default Mouse;