import React from 'react';
import logo from './cafe.jpg';
import './App.css';


function App() {
  return (
   
    <div className="App">
      <header className="App-header">
      
        
        <img className="Coffee-Logo" src={logo} alt="logo"/>
        <p>Choose your Coffee :</p>
        <select name="Coffees">
         <option value="Cappucino">Cappucino</option>
         <option value="Frappucino">Frappucino</option>
         <option value="Chibelino">Chibelino</option>
         <option value="latte">latte</option>
         </select>
         <p>Choose the size :</p>
        <select name="Coffees">
         <option value="XL">XL</option>
         <option value="L">L</option>
         <option value="M">M</option>
         <option value="S">S</option>
         </select>
         <button>order</button>
      
        
        
        
        
        
        
      </header>
    </div>
  );
}

export default App;
