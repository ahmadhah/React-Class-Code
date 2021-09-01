import React, { Component } from 'react'
export class ClassComponent extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
            name:'ahmad'
        }
        this.name = props.a;
        // this.changeName.bind(this)
        // console.log(this);
    }

    changeName= name=>{
        
        // this.setState({count: this.state.count,name:"Hannan"})
        // kchBI.setState({count: kchBI.state.count,name})
        console.log(this.props);
    }

    render() {

        return (
            <div style={{textAlign: 'center'}}>
                <h1>Class Component</h1>
                <h4>{this.state.count}</h4>
                <h4>{this.state.name}</h4>
                {/* {console.log(this)} */}
                <button onClick={()=>this.changeName("Hannan")}>Change Name</button>
                <button onClick={()=>this.setState({count:this.state.count+1,name:this.state.name})}>Incre</button>
            </div>
        )
    }
}

export default ClassComponent
