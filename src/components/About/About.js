import React, { Component } from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import History from '../History/History'
import Contact from '../Contact/Contact'

export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
        <Link to='/about' className='subnav_links'><h3>About</h3> </Link>
        <Link to='/about/history'className='subnav_links'><h3>History</h3> </Link>
        <Link to='/about/contact' className='subnav_links'><h3>Contact</h3> </Link>

        </div>
        <div className='box'>
        <Switch>
          <Route path='/about/history' component={History}></Route>
          <Route path='/about/contact' component={Contact}></Route>
          <Route path='/about/' render={() => (
            <div>
              <h1>About the University</h1>
              <p>Loremlakdfjaf fjalkj bjadk Ex nulla tempor cupidatat proident proident minim sint non. Sint fugiat ea ullamco nostrud aliquip laboris irure sit laborum ipsum. Exercitation aute cillum in tempor incididunt in ullamco cillum laboris dolor consequat esse id Lorem. Nostrud aliquip adipisicing fugiat veniam aliqua pariatur cillum qui sunt Lorem non deserunt. Sunt officia in et exercitation proident tempor ex reprehenderit sint pariatur sint voluptate veniam ullamco. </p>
            </div>
             )} 
             ></Route>
        
        </Switch>
        </div>
      </div>
    )
  }
}