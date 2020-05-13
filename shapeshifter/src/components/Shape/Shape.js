import React from 'react';
import './Shape.css';

// Circle
//   background: #d3c4e3;
//   width: 100px;
//   height: 100px;
//   border-radius: 50%;

const Shape = props => {

    let updatedShape = props.shape.shape;

    // const style = {
    //     circle: {
    //         background: "#d3c4e3",
    //         width: "100px",
    //         height: "100px",
    //         borderRadius: "50%"
    //     },
    //     triangle: {
    //         background: "#d3c4e3",
    //         width: 0,
    //         height: 0,
    //         borderLeft: "50px solid transparent",
    //         borderRight: "50px solid transparent",
    //         borderBottom: "100px solid #d3c4e3"
    //     },
    //     square: {
    //         background: "#d3c4e3",
    //         width: "100px",
    //         height: "100px"
    //     }
    // }

    // console.log(style.circle);
    console.log(updatedShape);
    console.log(props.shape.shape);
    // console.log(style.updatedShape);

    switch (updatedShape) {
        case 'triangle':
            // return {
            //     background: "#d3c4e3",
            //     width: 0,
            //     height: 0,
            //     borderLeft: "50px solid transparent",
            //     borderRight: "50px solid transparent",
            //     borderBottom: "100px solid #d3c4e3"
            // };
            console.log("balls!!!")
            break;
        case 'square':
            // return {
            //     background: "#d3c4e3",
            //     width: "100px",
            //     height: "100px"
            // };
            console.log("balls!!!!")
            break;
        default:
            // return {
            //     background: "#d3c4e3",
            //     width: "100px",
            //     height: "100px",
            //     borderRadius: "50%"
            // };
            console.log("balls")

    }



    return (
        // < div className="shape" style={style.updatedShape} ></div >
        // <div className="shape" style={{ styleHandler }}></div >
        <div className="shape"></div >
    )
}

export default Shape;