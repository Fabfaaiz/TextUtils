import React, { useState } from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('Enter Your Text');
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase","success");
  }
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  }
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
    props.showAlert("Removed Extra Spaces","success");
  }
  const handleCopy = () => {
    let newText = document.getElementById("myBox");
    newText.select();
    navigator.clipboard.writeText(newText.value);
    props.showAlert("Copied to clipboard","success");
  }
  return (
    <div style={{ color: props.mode === 'light' ? 'black' : 'white' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3" >
      
        <textarea className="form-control" onChange={handleOnChange} value={text} id="myBox" rows="7" style={{ color: props.mode === 'light' ? 'black' : 'white', backgroundColor: props.mode === 'light' ? 'white' : 'black' }}></textarea>
      </div>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'primary'} mx-1 my-1`} onClick={handleUpClick}>Convert to Upper Case</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'primary'} mx-1 my-1`} onClick={handleLowClick}>Convert to Lower Case</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'primary'} mx-1 my-1`} onClick={handleExtraSpaces}>Remove Extra Space</button>
      <button disabled={text.length===0} className={`btn btn-${props.mode==='light'?'dark':'primary'} mx-1 my-1`} onClick={handleCopy}>Copy</button>
      <h1>Your text Summary</h1>
      <p>{text.length===0?0:text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words, {text.length} character</p>
      <p>{0.008 * (text.length===0?0:text.split(" ").filter((element)=>{return element.length!==0}).length)} minutes to read this text</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Nothing to Preview!"}</p>
    </div>
  )
}
