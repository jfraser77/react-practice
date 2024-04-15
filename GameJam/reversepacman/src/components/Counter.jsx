import { useEffect } from "react";
import { useState } from "react";

export default function Counter() {
    const [ count, setCount] = useState(5)

    useEffect(() => {
        console.log(count)
    }, [count])

    return (
        <>
            <p>{count}</p>
            <button onClick={() => setCount(count - 1)} >Decrease</button>
            <button onClick={() => setCount(0)} >Reset</button>
            <button onClick={() => setCount(count + 1)} >Increase</button>
        </>
   
        )
}