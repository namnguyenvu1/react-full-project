import React from "react";
import { useParams } from "react-router-dom";

const Checkout = () => {
    const { seatCount } = useParams<{ seatCount: string }>();
    const seatCountNumber = parseInt(seatCount || "0");
    const pricePerSeat = 10; // example price per seat
    const totalAmount = seatCountNumber * pricePerSeat;

    return (
        <div>
            <h2>Checkout</h2>
            <p>Number of Seats: {seatCountNumber}</p>
            <p>Total Amount: ${totalAmount}</p>
        </div>
    );
};

export default Checkout;
