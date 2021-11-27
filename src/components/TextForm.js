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
                
                <textarea  className="form-control my-3" value = {text} id="MyBox" onChange = {handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#e9ecef':'white'}} rows="5"></textarea>
                <button disabled = {text.length=== 0} className="btn btn-primary mx-2 my-2" onClick= {handleUpClick} > Convert to UPPERCASE</button>  
                <button disabled = {text.length=== 0} className="btn btn-primary mx-2 my-2" onClick= {handleLoClick} > Convert to lowercase</button> 
                <button disabled = {text.length=== 0} className="btn btn-primary mx-2 my-2" onClick= {handleclrClick} > Clear the text</button>  
                <button disabled = {text.length=== 0} className="btn btn-primary mx-2 my-2" onClick= {handleCopy} > Copy the text</button> 
                <button disabled = {text.length=== 0} className="btn btn-primary mx-2 my-2" onClick= {removeEs} > Remove extra spaces</button> 
                
                </div>
            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>  
                <h2 style = {{color: props.mode==='light'?'black':'white'}}> Your text summary</h2>
                <p> {text.split (" ").filter((element)=> {return element.length!==0}).length} words and {text.length} characters </p>
                <p> {0.008 * text.split (" ").filter((element)=> {return element.length!==0}).length} minutes to read this </p>
                <h2> Preview </h2>
                <p> {text.length>0?text:"Nothing to preview"}</p>
            </div>

            <div className = "container my-5"  >  
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}> 
                <h1>About Us </h1>    
                <img src="/images/my pic.jpg" class="rounded mx-auto d-block" alt="..."/> 
                <span class="border border-warning"></span>
                <p class="font-italic">This website allows you to modify your text as per your requirement.
                        It is designed by Parag Coimbatore. </p>
                        <p>You can do the following:-</p>
                        <p>1. Convert to Uppercase </p>
                        <p>2. Convert to LowerCase </p>
                        <p>3. Clear the text </p>
                        <p>4. Copy it to clipboard </p>

            </div>    
        </div>

            
        </>
    )
}
