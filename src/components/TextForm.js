import React, { useState } from 'react'
// import PropTypes from 'prop-types'

export default function TextForm(props){
    const handleUpClick = () => {
        let newText = text.toUpperCase()
        props.showAlert('Converted to Uppercase', 'success')
        setText(newText)
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase()
        props.showAlert('Converted to Lowercase', 'success')
        setText(newText)
    }
    const handleClearClick = () => {
        let newText = ''
        props.showAlert('Text Cleared', 'success')
        setText(newText)
    }
    const handleCopy = () => {
        // var text = document.getElementById('myBox')
        // text.select();
        navigator.clipboard.writeText(text)
        props.showAlert('Text copied to clipboard', 'success')
    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert('Extra spaces removed', 'success')
    }
    const handleOnChange = (event) => {
        console.log('Onchange')
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    return(
        
        <>
        <div className="container" style={{color:props.mode === 'dark'?'white':'#042743'}}>
         <h1>{props.heading}</h1>
       <div className="mb-3">
        <textarea className="form-control" value = {text} onChange = {handleOnChange} style={{backgroundColor:props.mode === 'dark'?'grey':'white', color:props.mode === 'dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
        </div>
        

<button className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
<button className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
</div> 
<div className="conatiner my-3" style={{color:props.mode === 'dark'?'white':'#042743'}}>
    <h2>Your text summary</h2>
    <p>{text.split(/\s+/).filter((element) => {return element.length !== 0 }).length} words and {text.length} characters</p>
    <p>{0.008 * text.split(" ").length} Minutes read</p>
    <h3>Preview</h3>
    <p>{text.length>0?text:"Enter something in the textbox above to preview it"}</p>
</div>

</>
    )
}