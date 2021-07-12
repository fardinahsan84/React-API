import React from 'react';
import { Link } from 'react-router-dom';

const ImageList = (props) =>
{
    const images = props.images.map((image) => {
        return(
                <Link to ={'/'+image.id} key={image.id}> 
                    <img  src={image.webformatURL} alt='' />
                </Link>
            )
    })
    return (
        <div className='ui medium bordered images' >
            {images}
        </div>
    )
} 

export default ImageList;