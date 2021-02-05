import React from 'react';
import { Avatar } from '@material-ui/core';
import './HeaderOption.css';

function HeaderOption({ Icon, avatar, title, onClick }) {  
    return (
        <div onClick={onClick} className="headerOption">
            {Icon && <Icon className="headerOption_icon" />}
            {avatar && <Avatar className="headerOption_icon"/>}
            <h3 className="headerOption_title"> {title} </h3>
        </div>
    )
}

export default HeaderOption;
