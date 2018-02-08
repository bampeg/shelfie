import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Shelves extends Component {
    constructor() {
        super()

        this.state = {
            theBins: [{}
            
            ]
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3002/')
    }

    render() {
        var bins = this.state.theBins.map( (bin, i) => {
            
            <Link><div>{ 'Bin '+ (i + 1) }</div></Link>
        } )

        return (
            <div>
                <div className='shelf_nav' >
                    <Link to='/' className='logo' ><h1>SHELFIE</h1></Link>
                    <h1>{ 'Shelf ' + this.props.match.params.shelfID }</h1>
                </div>
                <div className='shelf' >
                    { bins }
                </div>
                <div className='shelf' >
                    + Add Inventory
                </div>
            </div>
        )
    }
}