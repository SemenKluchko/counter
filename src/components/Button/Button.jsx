function Button(props) {
  const handleClick = () => props.onClickMultipleIncrease(props.increment)
       
    return (
            <button onClick={handleClick}>+{props.increment}</button>
    );
  }

export default Button;
