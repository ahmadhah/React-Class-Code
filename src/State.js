import {useState} from 'react'

function State() {

    const [name,setName] = useState('ahmad')

    // console.log(state);

    function updateState(){
        setName('Hannan')
        // console.log(state);
    }

    return (
        <div>
            <h1>State Component</h1>
            <p>My State : {name}</p>
            <button onClick={updateState}>Update-Name</button>
        </div>
    )
}

export default State

