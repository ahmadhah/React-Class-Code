import { useState } from 'react';
import './App.css';
function Form() {
    const [name, setname] = useState("")
    const [interest, setinterest] = useState("")
    const [Terms, setTerms] = useState(false)
    function fData(e) {
        e.preventDefault();
        console.log(name, interest, Terms)
    }
    return (
        <div className="App">
            <h1>My Form</h1>
            <form onSubmit={fData}>
                <input type="text" placeholder="enter your name" onChange={(e) => setname(e.target.value)}></input><br /><br />
                <select value={interest} onChange={(e) => setinterest(e.target.value)}>
                    <option>Ali</option>
                    <option>maki</option>
                    <option>madni</option>
                </select><br />
                <input type="checkbox" onChange={(e) => setTerms(e.target.checked)} />
                <span>Accept terms and conditions</span>
                <br /><br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
export default Form;
