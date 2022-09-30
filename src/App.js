
import Header from './components/Header/Header';
import Shop from './components/Header/shop/Shop';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import './App.css';

function App() {
  return (
    <div className="head-container">
      <div className='all-text'>
          <h1 className='head-text'> <p className='icon1'><i class="fa-solid fa-dumbbell"></i></p> Fitness Mania Club</h1>
          <h2 className='Gym-text'>Pick Your Gym</h2>
          
      </div>
                
      
          

      <Shop></Shop>
    </div>
  );
}

export default App;
