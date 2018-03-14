import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './main.css'
import Homepage from './containers/Homepage/Homepage'
import Shelf from './containers/Shelf/Shelf'
import TheBin from './containers/TheBin/TheBin'
// import AddToBin from './components/AddToBin/AddToBin'

export default (
    <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route path='/shelf/:shelfID/bin/:binID' component={ TheBin } />
        <Route path='/shelf/:shelfID' component={ Shelf } />
        {/* <Route path='/create/:binID' component={ AddToBin } /> */}
    </Switch>
)