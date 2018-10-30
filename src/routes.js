import React from 'react'
import {Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'
import Student from './components/Student/Student'

export default (
     <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/About' component={About}></Route>
        <Route path='/classlist/:class' component={ClassList}></Route>
        <Route path='/student/:id' component={Student}></Route>
    </Switch>
)
