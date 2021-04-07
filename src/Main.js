import React, { Component } from 'react'
import meerkats from "./images/meerkats.jpeg"

export default class Main extends Component {

    state = {
        imgNumber: 0,
        imgArray:["https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg",
        "https://www.americanhumane.org/app/uploads/2016/08/animals-cats-cute-45170-min.jpg",
        "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F80b8c7d4-ac66-11e8-8404-0bee60a6f70d.jpg?crop=2000%2C1333%2C0%2C40"]
    }

    handleClick = () => {
        // 2. unless it is 2, in which case set imgNumber to 0
        let newNumber = this.state.imgNumber + 1
        if(newNumber > 2){
            newNumber = 0
        }
        this.setState({imgNumber: newNumber})
    }

    render() {
        return (
            <div>
                <img id="image" src={this.state.imgArray[this.state.imgNumber]} alt="meerkats" onClick={this.handleClick} />
            </div>
        )
    }
}
