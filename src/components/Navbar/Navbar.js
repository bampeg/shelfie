import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'
import './Navbar.css'

export default function Navbar(props) {
    let { shelfID, binID, add } = props
    return (
        add ?
            <div className="Navbar_container">
                <div className="Navbar_bin_logo_container">
                    <Link to="/">
                        <img src={logo} alt='logo' className='Navbar_logo' />
                    </Link>
                </div>
                <div className="Navbar_bin_shelf_header_container">
                    <Link to={`/shelf/${shelfID}`}>
                        <span className="Navbar_shelf_header">{`Shelf ${shelfID}`}</span>
                    </Link>
                </div>
                <div className="Navbar_add_bin_header_container">
                    <span className="Navbar_add_bin_header">{`Add to Bin ${binID}`}</span>
                </div>
            </div> :

            shelfID && binID ?
                <div className="Navbar_container">
                    <div className="Navbar_bin_logo_container">
                        <Link to="/">
                            <img src={logo} alt='logo' className='Navbar_logo' />
                        </Link>
                    </div>
                    <div className="Navbar_bin_shelf_header_container">
                        <Link to={`/shelf/${shelfID}`}>
                            <span className="Navbar_shelf_header">{`Shelf ${shelfID}`}</span>
                        </Link>
                    </div>
                    <div className="Navbar_bin_header_container">
                        <span className="Navbar_bin_header">{`Bin ${binID}`}</span>
                    </div>
                </div> :

                shelfID ?
                    <div className="Navbar_container">
                        <div className="Navbar_shelf_logo_container">
                            <Link to="/">
                                <img src={logo} alt='logo' className='Navbar_logo' />
                            </Link>
                        </div>
                        <div className="Navbar_shelf_header_container">
                            <span className="Navbar_shelf_header">{`Shelf ${shelfID}`}</span>
                        </div>
                    </div> :

                    <div className="Navbar_container Navbar_homepage">
                        <img src={logo} alt='logo' className='Navbar_logo Navbar_logo_homepage' />
                        <span className="Navbar_header">SHELFIE</span>
                    </div>

    )
}
