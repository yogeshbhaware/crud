import React, { useMemo, useState } from 'react'

function MemoP() {
    const [number , setNumber] = useState(0);
    const squareNumber = useMemo(()=> {
        return squareNum(number)
    },[number]);
    const [counter , setCounter] = useState(0);
    
    const onChangeHandler = (e) => {
        setNumber(e.target.value)
    }

    const counterHnadler = () => {
        setCounter(counter+1)
    }

    return (
        <div>
            <h1>Welcome To Yuva'S</h1>
            <input type="number" placeholder="Enter a number"
                value={number} onChange={onChangeHandler}
            />
            <div>OUTPUT: {squareNumber}</div>
            <button onClick={counterHnadler}>Counter ++ </button>
            <div> Counter:  {counter}</div>
            
        </div>
    )
}


function squareNum(number){
    console.log("Number is in sqaure")
    return Math.pow(number, 2);
}
export default MemoP
