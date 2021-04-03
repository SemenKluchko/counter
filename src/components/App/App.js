import { useState } from 'react';
import Button from '../Button/Button';
import Counter from '../Counter/Counter';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);
  const resetCounter = () => setCounter(0);
  const increaseCounter = () => setCounter(counter+1);
  const reduceCounter = () => {
    (counter <= 0) ? setCounter(counter) : setCounter(counter-1);
  };
  const multipleIncreaseCounter = (increaseValue) => setCounter(counter+increaseValue);
  
  return (
    <div className="App">
      <Counter 
        onClickIncrease={increaseCounter}
        onClickReduce={reduceCounter}
        onClickReset={resetCounter}
        message={counter}
      />
      <Button onClickMultipleIncrease={multipleIncreaseCounter} increment={5}/>
      <Button onClickMultipleIncrease={multipleIncreaseCounter} increment={10}/>
      <Button onClickMultipleIncrease={multipleIncreaseCounter} increment={100}/>
      <Button onClickMultipleIncrease={multipleIncreaseCounter} increment={500}/>
    </div>
  );
}

export default App;
