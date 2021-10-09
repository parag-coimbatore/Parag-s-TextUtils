import React , {useState} from 'react'


export default function About(props) {
    
    
   

    return (       
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
    )
}
