
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


// import { Component } from 'react'

// export default class ClassC extends Component {

//     constructor() {
//         super();
//         this.state = {
//             data: 'Ahmad'
//         }
//         console.log('constructor');
//     }
//     componentDidMount() {
//         console.log("component did mount")
//     }

//     render() {
//         console.log("render");

//         return (
//             <div>
//                 <h1>Hello {this.state.data}</h1>
//                 <button onClick={() => this.setState({ data: "Hannan" })}>brn2</button>
//             </div>
//         )
//     }
// }



//! component did update


// import { Component } from 'react'

// export default class ClassC extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             data: 'Ahmad'
//         }
//         console.log('i am constructor', props.count);
//     }

//     componentDidUpdate(preProps, preState, Snapshot) {
//         if (preState.data === this.state.data) {
//             console.log("both state are same")
//         }
//         console.log("Component did update ==> ", preState)
//         console.log("previous props ", preProps);
//         console.log('this is my count', this.props.count);
//     }

//     componentDidMount() {
//         console.log("component did mount")
//     }

//     render() {
//         console.log("render");

//         return (
//             <div>
//                 <h1>Hello {this.state.data}</h1>
//                 <button onClick={() => this.setState({ data: "Hannan" })}>brn2</button>
//             </div>
//         )
//     }
// }





