import React, { useState } from "react";
import StripeContainer from "./Stripe/StripeContainer";
import strawberries from './strawberries.jpg';

const App = () => {
  const [ showMyImage, setShowMyImage ] = useState(false);

  return (
    <div className="App">
      {showMyImage ? <StripeContainer /> : 
        <div>
          
          <p>FRUIT SHOP</p>
          <p>$9.99</p>
          <img src={strawberries} alt='box of strawberries' width="500"/>
          <div>
            <button onClick={() => setShowMyImage(true)}>Buy some strawberries!</button>
          </div>
        
        </div>
      }
    
    </div>
  );
};

export default App;
