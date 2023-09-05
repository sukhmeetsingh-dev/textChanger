import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
    }

    const handleloClick = () => {
        // console.log("UpperCase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClearClick = () => {
        let newText = '';
        setText(newText)
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" ")) 
    }
    
    const handleOnChange = (event) => {
        // console.log("On Change");
        setText(event.target.value);
    }


    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'grey':'white' , 
                color:props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick} >Convert to Upper-CaseName</button>
            <button className="btn btn-primary mx-1" onClick={handleloClick} >Convert to Lower-CaseName</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p> {text.split(" ").length} words and {text.length} characters</p>
            <p> {0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something into the text box to preview"}</p>
        </div>
        </>
    )
}
