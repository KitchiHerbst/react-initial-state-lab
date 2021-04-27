// your ImageSlider code here!
import { Component } from "react"
import React from "react"

class ImageSlider extends Component {
    constructor() {
        super() 
        this.state = {
            currentSlideIndex: 0 
        }
    }

    increment = () => {
        const newSlideIndex = this.state.currentSlideIndex + 1
        this.setState({
            currentSlideIndex: newSlideIndex
        })
    }

    render(){
        return(
            <div>I am on slide {this.state.currentSlideIndex}</div>
        )
    }
}

export default ImageSlider