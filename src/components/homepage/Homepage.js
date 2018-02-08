import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../../main.css'

export default class Homepage extends Component {
    render() {
        return (
            <div>
                <div className='nav' >
                        <h1>SHELFIE</h1>

                </div>
                <div className='shelves'>

                    <Link to='/shelf/A' >
                        <div className='shelf'>Shelf A</div>
                    </Link>

                    <Link to='/shelf/B' >
                        <div className='shelf'>Shelf B</div>
                    </Link>

                    <Link to='/shelf/C' >
                        <div className='shelf'>Shelf C</div>
                    </Link>

                    <Link to='/shelf/D' >
                        <div className='shelf'>Shelf D</div>
                    </Link>
                    
                </div>
            </div>
        )
    }
}