import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import './index.css'
import App from './pages/App/App'
import Carousel from './pages/Carousel/Carousel'
import FadeInTransition from './components/FadeinTransition/FadeInTransition'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render((
  <BrowserRouter>
    <FadeInTransition>
      <Switch>
        <Route exact path='/' component={ App }/>
        <Route path='/carousel' component={ Carousel }/>
      </Switch>
    </FadeInTransition>
  </BrowserRouter>
), document.getElementById('root'))
registerServiceWorker()
registerServiceWorker()
