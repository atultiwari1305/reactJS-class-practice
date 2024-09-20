const TestComponent = () =>{
    const handleClick=()=>{
        const messageElement = document.getElementById('message');
        messageElement.textContent = "You have clicked the button";
    };
    return(
        <div>
            <h1 id="message"></h1>
            <button onClick = {handleClick}>Press Me</button>
        </div>    
    );
};
export default TestComponent;