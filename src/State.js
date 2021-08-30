import {useState} from 'react'
import ChildComponent from './ChildComponent'
function State() {

    const [name,setName] = useState('ahmad')
    const [number, setnumber] = useState(0);
    const [Flag, setFlag] = useState(false);
    // console.log(state);

    function updateState(){
        Flag && setName('Hannan')   
        // console.log(state);
    }
    // function Increment() {
    //     Flag && setnumber(number+1)
    // }

    return (
        <div>
            <h1>State Component</h1>
            <p>My State : {name}</p>
            <p>My Count : {number}</p>
            <p>My Flag : {Flag.toString()}</p>
            {/* <button onClick={()=>setName('Hannan')}>Update-Name</button> */}
            <button onClick={updateState}>Update-Name</button>
            <button onClick={Flag?()=>setnumber(number+1):''}>Increment</button>
            <button onClick={()=>setFlag(!Flag)}>Change Flag</button>
            <br/><hr/><br/>
            <ChildComponent number={number}/>
        </div>
    )
}

export default State

