import React, { useRef, useState } from "react";

function App(){
    const [name, setName] = useState(null);
    const inputRef  = useRef(null);
    const handleSubmit=()=>{
        event.preventDefault();
        alert(`Submitted the Name ${name}`)
    }
    return(
        <div>
            <form>
                <input ref={inputRef} type="text" placeholder="Enter Your Name" value={name}></input>
                <button>Submit</button>
                <button>Reset</button>
            </form>
        </div>
    )
}