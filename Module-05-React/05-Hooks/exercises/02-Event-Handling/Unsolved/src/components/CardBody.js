import React from 'react';

// TODO: Add a comment explaining what is being passed to this "child" component as props
// the count handles are being passed as props
function CardBody(props) {
  return (
    <div className="card-body">
      <p className="card-text">Click Count: {props.count}</p>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.handleIncrement}
      >
        Increment
      </button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleDecrement}
      >
        Decrement
      </button>{' '}
      <button
        type="button"
        className="btn btn-danger"
        onClick={props.handleMultiply}
      >
        Multiply
      </button>
    </div>
  );
}

export default CardBody;
