import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.css';

const MenuItem = ({ title,imageUrl,size, history,linkUrl, match})=>(
    <div style={{
        backgroundImage: `url(${imageUrl})`
     }} 
        className={`${size} menu-item`} onClick={()=>history.push(`${match.url}${linkUrl}`)}>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)
//props.title = title if we have {title} instead of props

export default withRouter(MenuItem);
