import React, { Component } from "react";

export class ClassComponent extends Component {
    render() {
        // complete Array destructure + Object rename

        const {
            arr: [a, b, c, d, { object: ahmad }],
        } = this.props;
        const { name, email, showName } = ahmad;
    
        const cities = [a, b, c, d];

        console.log(this.props);

        return (
            <div style={{ textAlign: "center" }}>
                <h2>
                    Cities are
                    <br />
                    {cities.map((city,i) => <p key={i}>{city}</p>  )}
                </h2>
                <h4>
                    Name is {name} <br />
                    and
                    <br /> email is {email}
                </h4>
                <button className="btn btn-primary" onClick={showName}>
                    Click
                </button>
            </div>
        );
    }
}

export default ClassComponent;
