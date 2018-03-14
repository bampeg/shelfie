import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
import Navbar from '../../components/Navbar/Navbar'

export default class Shelves extends Component {

    render() {
        return (
            <div>
                <Navbar shelfID={this.props.match.params.shelfID} />

                <div className='shelf' >
                    + Add Inventory
                </div>
            </div>
        )
    }
}