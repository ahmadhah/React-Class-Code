
import React, { useState } from 'react'

function PrevState() {
    const [count, setcount] = useState(0)

    function UpdateCount() {
        let random = Math.floor(Math.random() * 10)
        setcount((prev) => {
            console.log('prev', prev)
            return random
        })
        console.log('random', random);
    }
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={UpdateCount}>UpdateCount</button>
        </div>
    )
}

export default PrevState
