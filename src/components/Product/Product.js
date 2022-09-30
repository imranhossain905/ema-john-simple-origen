// import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {fa-dumbbell} from '@fortawesome/free-solid-svg-icons';
import './Product.css'

const Product = (props) => {
    const {title, img, description, age, time} = props.product;
    //  const {handleAddToCart} = props;
    
    return (
        
        <div className='product'> 
            <img src={img} alt=""></img>
            <div className='product-info'>
            <p className='product-name'>{title}</p>
            <p>{description}</p>
            <p className='age-text'>For Age : {age}</p>
            <p>Time required : {time} m</p>
            </div>
            <button onClick={() => props.handleAddToCart(props.product)} className='button-cart'>
                <p className='btn-text'>Add To Cart</p>
                
            </button>
        </div>
        
    );
};

export default Product;