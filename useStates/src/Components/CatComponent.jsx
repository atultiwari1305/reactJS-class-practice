import React, {useState, useEffect} from "react";

const CatComponent=()=>{
    const [catFact, setCatFact] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        console.log("Use Effect Triggered");
        const fetchCatFact = async() => {
            try{
                console.log("Fetching cat facts");
                setLoading(true);

                //fetching data from api
                const response = await fetch('https://meowfacts.herokuapp.com/');
                console.log("Fetch Response Status ",response.status)
                
                if(!response.ok){
                    throw new Error("Network Error");
                }
                const data = await response.json();
                console.log("Fetched cat data", data);

                //update the state
                setCatFact(data.data[0]);
            }finally{
                console.log("Loading Finished");
                setLoading(false);
            }
        }
        fetchCatFact();
    },[])

    return(
        <div>
            {loading && <p>Loading Cat Fact</p>}
            {error && <p>{error}</p>}

            {/* display cat facts */}
            {catFact && (
                <div>
                    <h1>Cat Facts</h1>
                    <p>{catFact}</p>
                </div>
            )}
        </div>
    )
}

export default CatComponent;