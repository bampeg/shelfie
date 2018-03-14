import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'

export default class TheBin extends Component {
    render() {
        return(
            <div>
                <Navbar binID={ this.props.match.params.binID } shelfID={ this.props.match.params.shelfID }/>
                some bins
            </div>
        )
    }
}