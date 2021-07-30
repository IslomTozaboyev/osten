import React from 'react'
import { Component } from 'react'
import "./HomeCard.css"

export default class HomeCard extends Component {
    render() {
        return (
            <div className={this.props.className}>
                {this.props.children}
            </div>
        )
    }
}
