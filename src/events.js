import React from 'react'

const Events = () => {
    return (
        <div>
            <h1>Event in React JS</h1>
            <button onClick = {()=>alertDisplay('Rabiha tul Islam')}>Show Name</button>
        </div>
    )
}

export default Events

const alertDisplay = (name) => {
    console.log(name)
}