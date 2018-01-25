import React, { Component } from 'react'
import { Redirect, Route } from 'react-router-dom';
import './FadeInTransition.css'

export default class FadeInTransition extends Component {
  render () {
   return <div className='fadeInTransition'>
    { this.props.children }
    {/* <Route {...rest} render={(props) => <Component {...props} />}/> */}
    </div>
  }
}