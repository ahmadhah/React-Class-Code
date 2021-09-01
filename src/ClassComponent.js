import React, { Component } from 'react'
export class ClassComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name:'ahmad'
        }
        this.name = props.a;
    }

    render() {

        return (
            <div style={{textAlign: 'center'}}>
                <h1>Class Component</h1>
                <h4>{this.state.count}</h4>
                <h4>{this.state.name}</h4>
                <button onClick={()=>this.setState({count:this.state.count+1,name:"Hannan"})}>Incre</button>
            </div>
        )
    }
}

export default ClassComponent
