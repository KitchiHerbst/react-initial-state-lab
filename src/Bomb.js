// your Bomb code here!
import { Component } from "react"
import React from "react"



class Bomb extends Component {

    constructor(props) {
        super()
        if (props.initialCount !== 0){
             this.state = {
                secondsLeft: props.initialCount,
                text: ' seconds left before I go boom!'
            }
        }else{
            this.state = {
                secondsLeft: '',
                text: 'Boom!'
            }
        }
    }

    


    render(){
        return(
            <div>{this.state.secondsLeft}{this.state.text}</div>
        )
    }
}

export default Bomb