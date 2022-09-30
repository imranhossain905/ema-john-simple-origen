import React from 'react';
import logo from '../../images/imran-2.jfif'
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;
    // console.log(cart);

    const notify = () =>{
        toast( 'Congratulation you are done with your Activity', {position:'top-center'});
    }
    
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
             
        
    }
    



    return (
        <div className='cart'>
            <div className="personal-details">
                <h2 className='name-text'> <img className='my-img' src={logo} alt="" />  Imran Hossain</h2>
                <h4> <i class="fa-solid fa-location-dot"></i>  Joypurhat, Rajshahi, Bangladesh</h4>
            </div>
            <div className="personal-details2">
                <div className="weight">
                <h2>60<small>kg</small></h2>
                <p>Weight</p>
                </div>
                <div className="height">
                <h2>5.5</h2>
                <p>Height</p>
                </div>
                <div className="Age">
                <h2>33<small>yrs</small></h2>
                <p>Age</p>
                </div>
            </div>
            <div className="break-item">
                <h2>Add Break</h2>
                <div className="btn-item">
                <button className='bnt-1'>10m</button>
                <button className='bnt-2'>20m</button>
                <button className='bnt-3'>30m</button>
                <button className='bnt-4'>40m</button>
                <button className='bnt-5'>50m</button>
                </div>
            </div>
            <div className="exercis">
                <h2>Exercise Details</h2>
                    <div className='time'>
                        <h4>Exercise Time:</h4>
                        <h4>{quantity} m</h4> 
                    </div>
                
            </div>
            <div className='time2'>
                <h4>Exercise Time:</h4>
                <h4>0 m</h4> 
            </div>

            <div className="btn-activaty">
                <button className='btn-Completed'
                onClick={notify}
                >Activity Completed</button>
                <ToastContainer></ToastContainer>
            </div>

            
        </div>
    );
};

export default Cart;

