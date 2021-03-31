import { useCallback, useState  } from 'react';
import './Counter.css'

function Counter() {
    const [defaultValue, increaseValue] = useState(0);

    const increaseCounter = useCallback(() => {
        increaseValue(defaultValue + 1);
       }, [defaultValue]);
    
    const reduceCounter = useCallback(() => {
        (defaultValue > 0) ? increaseValue(defaultValue - 1) : increaseValue(defaultValue);
       }, [defaultValue]);
       
    return (
      <div className="counter-container">
          <div className="counter-text"><h3>Counter</h3></div>
          <div className="counter-wrapper">
            <button onClick ={increaseCounter}>+</button>
            <span class="current-counter">{defaultValue}</span>
            <button onClick ={reduceCounter}>-</button>
          </div>
      </div>
    );
  }

export default Counter;
