
// import React from 'react'
// class User extends React.Component {
//     constructor() {
//         super();
//         this.state = {
//             email: "anil@test.com"
//         }
//         console.log('====================================');
//         console.log('====================================');
//     }
//     render() {
//         console.log("Render method", this.state.email)
//         return (
//             <div>
//                 <h1>User Component </h1>
//                 <button onClick={() => this.setState({ email: "XYZsidhu@test.com" })}>Update Email</button>
//             </div>
//         )
//     }
// }

// export default User;


import { Component } from 'react'

export default class ClassC extends Component {

    constructor() {
        super();
        this.state = {
            data: 'Ahmad'
        }
        console.log('constructor');
    }
    componentDidMount() {
        console.log("component did mount")
    }

    render() {
        console.log("render");

        return (
            <div>
                <h1>Hello {this.state.data}</h1>
                <button onClick={() => this.setState({ data: "Hannan" })}>brn2</button>
            </div>
        )
    }
}


