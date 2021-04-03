import './Counter.css'

function Counter(props) {
    return (
      <div className="counter-container">
          <div className="counter-text"><h3>Counter</h3></div>
          <div className="counter-wrapper">
            <button onClick={props.onClickIncrease}>+</button>
            <span class="current-counter">{props.message}</span>
            <button onClick={props.onClickReduce}>-</button>
          </div>
          <button onClick={props.onClickReset}>Reset</button>
      </div>
    );
  }

export default Counter;
