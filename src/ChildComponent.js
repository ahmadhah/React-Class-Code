import React from 'react'
import GrandChild from './GrandChild'

function ChildComponent({number}) {
    return (
        <div>
            <h1>Hello itss my Child component...........:-)</h1>
            <p>My Count in my Child component : {number}</p>
            <br/><hr/><br/>
            <GrandChild number={number}/>
        </div>
    )
}

export default ChildComponent
