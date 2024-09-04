import React, { useState } from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

const SeatSelection = () => {
    const [seatCount, setSeatCount] = useState(0);

    const increment = () => {
        setSeatCount(seatCount + 1);
    };

    const decrement = () => {
        if (seatCount > 0) {
            setSeatCount(seatCount - 1);
        }
    };

    const reset = () => {
        setSeatCount(0);
    };

    return (
        <div>
            <h2>Select Seats</h2>
            <p>Number of Seats: {seatCount}</p>
            <button type="button" className="btn btn-primary" onClick={decrement}>Decrement</button>
            <button className="btn btn-secondary" onClick={reset}>Reset</button>
            <button className="btn btn-primary" onClick={increment}>Increment</button>
            <br /><br />
            <Link to={`/checkout/${seatCount}`} className="btn btn-success">Checkout</Link>
        </div>
    );
};

export default SeatSelection;
