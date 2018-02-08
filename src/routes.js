import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './main.css'
import Homepage from './components/homepage/Homepage'
import Shelf from './components/shelf/Shelf'
import Bin from './components/bin/Bin'
import AddToBin from './components/addToBin/AddToBin'

export default (
    <Switch>
        <Route exact path='/' component={ Homepage } />
        <Route path='/shelf/:shelfID' component={ Shelf } />
        <Route path='/bin/:binID' component={ Bin } />
    </Switch>
)