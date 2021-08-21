import React, { Component } from 'react'
import logo from './Screenshot_3.png'

export class ClassComponent extends Component {
    render() {
        return (
            <div>
                <div className="card" style={style}>
                    <img src={logo} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>


            </div>
        )
    }
}

export default ClassComponent

const style = {
     "width": "18rem"
}