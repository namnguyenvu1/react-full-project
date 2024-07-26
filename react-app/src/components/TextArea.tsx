import { useState } from "react";

function TextArea() {
    const[feedback, setFeedback] = useState();

    function handleFeedbackChange(event){
        setFeedback(event.target.value);
    }

    return (
    <div>
        <p>Enter Comment</p>
        <textarea value={feedback} onChange={handleFeedbackChange}></textarea>
        <p>Feedback: {feedback}</p>
    </div>)
}

export default TextArea;