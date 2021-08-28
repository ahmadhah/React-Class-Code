import React, { Component } from 'react'

export class ClassComponent extends Component {
    constructor( props ){
        super( props );
        this.state = {
            a:this.props.a
        }
        this.call = this.call.bind(this);
      }

    call(){
        // alert('hello')
        console.log(this.props.a);
        this.setState({a:this.state.a +1})
    // this.setState.a = this.state.a +1;
    }
    render() {
        return (
            <div>
                ClassComponent
                <br/> props : {this.state.a}
                <br/>
                <button onClick={this.call}>btn</button>
            </div>
        )
    }
}

export default ClassComponent
