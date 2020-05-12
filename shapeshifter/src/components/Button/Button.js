import React, { Component } from 'react';
import './Button.css';

class Button extends Component {

    state = {
        shape: "circle"
    }

    shapeHandler = (e) => {
        e.preventDefault();
        console.log(`Current State: ${this.state.shape}`);
        console.log(`New Shape: ${this.props.shapeName}`);
        // console.log(typeof (props.shapeName));
        this.setState({
            shape: this.props.shapeName
        }, () => {
            console.log(`Updated State: ${this.state.shape}`)
        });
    }


    render() {
        return (
            <button onClick={this.shapeHandler}>{this.props.shapeName}</button>
        )
    }

}

export default Button;