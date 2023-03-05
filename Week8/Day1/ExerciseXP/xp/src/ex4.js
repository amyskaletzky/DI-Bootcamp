import React from "react";
import './Exercise4.css'

const Exercise4 = () => {
    // Part II
    const style_header = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
    };

    return (
        <>
            {/* for Part I -> <h1 style={{ color: 'red', backgroundColor: 'lightblue' }}>This is a header</h1>  */}
            <h1 style={style_header}>This is a header</h1>
            <p className="para">This is a paragraph</p>
            <a href="#">This is a link</a>

            <h2>This is form:</h2>
            <form>
                <label form="form-name">Enter your name:</label><br></br>
                <input type={"text"} name="name" id="form-name" ></input>
                <input type={"submit"}></input>
            </form>
            <h3>Here is the image:</h3>
            <img src="https://www.patterns.dev/img/reactjs/react-logo@3x.svg" alt="react-logo img" width={"600px"}></img>
            <h3>This is a list:</h3>
            <ul>
                <li>Coffee</li>
                <li>Tea</li>
                <li>Milk</li>
            </ul>
        </>


    )
}

export default Exercise4;   