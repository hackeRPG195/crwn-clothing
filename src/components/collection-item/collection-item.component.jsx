import React from 'react';
import './collection-item.styles.css';

const CollectionItem = ({ id, name, imageUrl, price })=>(
    <div className='collection-item'>
        <div
            className='image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className='collection-footer'>
            <span className='name'>{ name }</span>
            <span className='price'>{ price }</span> 
        </div> 

    </div>
   
);
//style="background-image: url(&quot;https://i.ibb.co/GCCdy8t/womens.png&quot;);">
//<div class="image" style="background-image: url(&quot;https://i.ibb.co/ZYW3VTp/brown-brim.png&quot;);"></div>

export default CollectionItem;