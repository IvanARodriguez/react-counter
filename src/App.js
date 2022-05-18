import './App.css';
import './'
import ClickerCounterLogo from './images/logo.png';
import Button from './components/button';
import Counter from './components/Counter'
import { useState } from 'react';

function App() {

  const [setClickNum, setClickNums] = useState(0);

  const countClicks = () => {
   setClickNums(setClickNum + 1);
  };

  const restartCounter = ()=>{
    setClickNums(0);
  };

  return (
    <div className="App">
      <div className="logoImageWrapper">
        <img 
          className="logoImg"
          src={ClickerCounterLogo}
          alt="Logo" />
      </div>

      <div className="counter_container">
        
        <Counter clickNum={setClickNum} />

        <div className="buttonGroup">
          <Button
            text="Add Click"
            handleClick={countClicks}
            isClickButton= {true} />
          <Button
            text="Reset"
            handleClick={restartCounter}
            isClickButton= {false} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
