import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../logo.png'

export default function Navbar(props) {
    let shelfTitle = null
      , binTitle = null
      , theNameShelfie = <div>SHELFIE</div>
      , theLogo = <img src={ logo } alt='logo' className='logo'/>

    if(props.shelfID) {
        if(props.binID) {
            binTitle = props.binID
        }
        theLogo = <Link to='/'><img src={ logo } alt='logo' className='logo'/></Link>
        shelfTitle = <div className={ shelfTitle ? 'shelf_nav' : null }>Shelf { props.shelfID }</div>
        theNameShelfie = null
    }

    return(
        <div className={ !shelfTitle ? 'nav' : binTitle ? 'bin_nav' : 'shelf_nav' }>
            { theLogo }
            { theNameShelfie }
            { shelfTitle }
        </div>
    )
}
