import { useCallback, useState  } from 'react';
import './Counter.css'

function Counter() {
    const [defaultValue, increaseValue] = useState(0);

    const increaseCounter = useCallback(() => {
        (defaultValue >= 0) ? increaseValue(defaultValue + 1) : increaseValue(defaultValue);
       }, [defaultValue]);
    
    const reduceCounter = useCallback(() => {
        (defaultValue > 0) ? increaseValue(defaultValue - 1) : increaseValue(defaultValue);
       }, [defaultValue]);
       
    return (
      <div className="couner-container">
          <div className="counter">Counter current number: {defaultValue}</div>
          <button onClick ={increaseCounter}>+</button>
          <button onClick ={reduceCounter}>-</button>
      </div>
    );
  }

export default Counter;
