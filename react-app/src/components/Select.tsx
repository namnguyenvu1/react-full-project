import { useState } from "react";

function Select() {
    const[payment, setPayment] = useState();

    function handlePaymentChange(event){
        setPayment(event.target.value);
    }

    return (
    <div>
        <p>Select Payment Method</p>
        <select value={payment} onChange={handlePaymentChange}>
            <option value="">Select an option</option>
            <option value="Visa">Visa</option>
            <option value="Mastercard">Mastercard</option>
            <option value="Amex">Amex</option>
        </select>
        <p>Payment: {payment}</p>
    </div>)
}

export default Select;