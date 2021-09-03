// Code SimpleComponent Here
import React, {Component} from 'react'

class SimpleComponent extends Component {
    state = {
        mood: "happy"
    }

    render() {
        return(
            <div onClick={this.handleClick}>{this.state.mood}</div>
        ) // sadly it's looking for a div, not a button
        // yes, the HTML makes me twitch here
    }

    handleClick = () => {
        // this.setState = "sad";
        // no, this needs to toggle
        const doom = this.state.mood === "happy" ? "sad" : "happy";
        // LOOK I CAN DO TERNARY OPERATORS
        this.setState({mood: doom});
        // and mood has reached semantic saturation
    }

}

export default SimpleComponent