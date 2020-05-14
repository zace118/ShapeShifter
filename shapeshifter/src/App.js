import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './components/Button/Button';
import Shape from './components/Shape/Shape';

const App = () => {
    const [shapeState, setShapeState] = useState({
        shape: "circle"
    })

    // Handler that logs state and the shape you're wanting to change to 
    const shapeHandler = e => {
        e.preventDefault();
        console.log(`Current State: ${shapeState.shape}`);
        console.log(`New Shape: ${e.target.innerHTML}`);
        // // console.log(typeof (props.shapeName));
        setShapeState({
            shape: e.target.innerHTML
        });
    }

    // Initally shows current state, but then shows updated state.
    useEffect(() => {
        console.log(`Updated State: ${shapeState.shape}`)
    })

    const shapeOptions = ["Triangle", "Square", "Pentagon", "Hexagon", "Octagon", "Pacman"];

    const createButtons = shapeOptions.map((shape, index) => {
        return (
            // console.log(index)
            <Button shapeName={shape} key={index} onClick={shapeHandler} />

            // Why do I need the onClick thing on both the render and the actual component?
            // <Button shapeName={shape} key={index} />
        )
    })

    return (
        <div>
            <div className="buttonDiv">
                {createButtons}
            </div>
            <div className="shapeDiv">
                <Shape shape={shapeState} />
            </div>
        </div>

    )
}

export default App;


// Handle state here
// Get rid of the row completely
// map over a bigger array to dynamically create all the buttons.

// Pass in the click handler while mapping them here

// Pass in the name for each one while mapping. In button component use that in click handler.