import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Homepage from './containers/Homepage/Homepage'
import Shelf from './containers/Shelf/Shelf'
import TheBin from './containers/TheBin/TheBin'
import AddToBin from './containers/AddToBin/AddToBin'

export default (
    <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shelf/:shelfID' component={Shelf} />
        <Route path='/bin/:shelfID/:binID' component={TheBin} />
        <Route path='/addto/:shelfID/:binID' component={ AddToBin } />
    </Switch>
)