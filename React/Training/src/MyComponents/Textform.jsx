import React, { useState } from 'react'

export default function Textform({ heading }) {
    const [text, setText] = useState('');

    const handleUpClick = () => {
        // console.log("YOU ENTERED: " + text)
        // alert('uppercase clicked');
        let newText = text.toUpperCase();
        setText(newText)
    };

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText)
    };

    const handleOnChange = () => {
        // console.log("On change")
        setText(event.target.value)
    };

    return (
        <>
            <div>
                <div className="d-flex justify-content-md-center my-3">
                <h1>{heading}</h1>
                </div>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="theBox" rows="8"></textarea>
                </div>

                <button className="btn btn-primary m-1" onClick={handleUpClick}>Convert to UPPERCASE</button>
                <button className="btn btn-primary m-1" onClick={handleLowClick}>Convert to lowercase</button>
            </div>

            <div className="container my-3">
                <h1>Your text summary</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
