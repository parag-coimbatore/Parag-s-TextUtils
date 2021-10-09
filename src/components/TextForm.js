import React ,{useState} from 'react'


export default function TextForm(props) { //Here we will create functions that takes action on clicking of buttons
    const handleUpClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperrCase","success");
    }

    const handleLoClick = () => {
        console.log("Uppercase was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to LowerCase","success");

    }

    const handleCopy = () => {
        console.log("Copy the text");
        var text = document.getElementById("MyBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");
    }

    const handleclrClick = () => {
        console.log("Clear was clicked");
        let newText = (" ");
        setText(newText);
        props.showAlert("Cleared the text","success");
    }
    const removeEs = () => {
        console.log("Removed extra spaces");
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed","success");
    }

    const handleOnChange = (event) => {
        console.log("On Changed");
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
            <div className ="Container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1 >  {props.heading}  </h1>
                <div className="mb-13">
                
                <textarea className="form-control my-3" value = {text} id="MyBox" onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#e9ecef':'white'}} rows="5"></textarea>
                <button className="btn btn-primary mx-2" onClick= {handleUpClick} > Convert to UPPERCASE</button>  
                <button className="btn btn-primary mx-2" onClick= {handleLoClick} > Convert to lowercase</button> 
                <button className="btn btn-primary mx-2" onClick= {handleclrClick} > Clear the text</button>  
                <button className="btn btn-primary mx-2" onClick= {handleCopy} > Copy the text</button> 
                <button className="btn btn-primary mx-2" onClick= {removeEs} > Remove extra spaces</button> 
                
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>  
                <h2 style = {{color: props.mode==='light'?'black':'white'}}> Your text summary</h2>
                <p> {text.split (" ").length} words and {text.length} characters </p>
                <p> {0.008 * text.split (" ").length} minutes to read this </p>
                <h2> Preview </h2>
                <p> {text.length>0?text:"Your text will be previwed here "}</p>
            </div>
        </>
    )
}
