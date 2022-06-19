import React, { useState } from 'react'; 

const propTypes = {};

const defaultProps = {};

const TextForm = (props) => {

     //custom styling of button
     const mystyle={
        margin:"4px"        
     }

    // THE REMAINING THING IS TO MAKE EMPTY INPUT VALIDATION LOGIC USEING DRY  
    //let copyT = document.getElementById("myBox");
    const handleUpClick = (event) => {
    
    //   if(copyT.value.length===0){
    //         props.showAlert("please enter","warning"); 
    //   }
    //   else{
      let newtext = text.toUpperCase();
      setText(newtext); 
    // props.showAlert("Converted to uppercase","success");
    //   } 
    }
 
    const handleLoClick = (event) => {
        let newtext = text.toLowerCase();
        setText(newtext);
       
    }

    const handleSenCaseClick=(event)=>{
        let ntext= text.toLowerCase();
        let newtext=ntext.charAt(0).toUpperCase()+ntext.slice(1);
        setText(newtext);
       
    }

    const handleCopyClick = (event) => {
         let copyText = document.getElementById("myBox");
         if(copyText.value.length===0){
            props.showAlert("Please enter some text to copy","warning")
         }
         else{
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert("Copied to clipboard","success");
         }
    }

    const handleClearClick = (event) => {
        let newtext = '';
        setText(newtext);
               
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const [text, setText] = useState('');

    return (
        <>
            <div className="container">
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#212529':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary" style={mystyle} onClick={handleUpClick}>Convert to Upper case</button>
                <button disabled={text.length===0} className="btn btn-primary" style={mystyle} onClick={handleLoClick}>Convert to Lower case</button>
                <button disabled={text.length===0} className="btn btn-primary" style={mystyle} onClick={handleSenCaseClick}>Convert to Sentance case</button>
                <button disabled={text.length===0} className="btn btn-primary" style={mystyle} onClick={handleCopyClick}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary" style={mystyle} onClick={handleClearClick}>Clear</button>
            </div>
            <div className="container my-4">
                <h2>Your text summary</h2>
                <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:'Nothing to preview!'}</p>
            </div>
        </>
    )
}

TextForm.propTypes = propTypes;
TextForm.defaultProps = defaultProps;


export default TextForm;