import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Navbar/Navbar'
import './Homepage.css'

export default function Homepage() {
    return (
        <div>
            <Navbar />
            <div className='Homepage_container'>
                <div className='Homepage_shelf'>
                    <Link to='/shelf/A' >
                        <span className="Homepage_shelf_title">Shelf A</span>
                    </Link>
                </div>
                <div className='Homepage_shelf'>
                    <Link to='/shelf/B' >
                        <span className='Homepage_shelf_title'>Shelf B</span>
                    </Link>
                </div>
                <div className='Homepage_shelf'>
                    <Link to='/shelf/C' >
                        <span className='Homepage_shelf_title'>Shelf C</span>
                    </Link>
                </div>
                <div className='Homepage_shelf'>
                    <Link to='/shelf/D' >
                        <span className='Homepage_shelf_title'>Shelf D</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}