import React, { useState } from 'react'


function RefHookP() {
    const [state, setState] = useState("");
    const update = (e) => {
        setState(e.target.value)
}

    return (
        <div>
            Mukul Says 
            <input type="text" onChange={update}/>
            <br/>
            <h1>{state}</h1>
            
        </div>
    )
}

export default RefHookP
