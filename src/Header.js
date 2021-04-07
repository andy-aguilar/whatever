import React, { Component } from 'react'


export default class Header extends Component {

    renderH1 = () => {
        return <h1>Happy App Fun Time with Meerkats, Cats, and Dogs!!!</h1>
    }

    render() {
        return (
            <header>
                {this.renderH1()}
            </header>
        )
    }
}
