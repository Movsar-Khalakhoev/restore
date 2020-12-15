import React from 'react'
import CartPage from '../pages/CartPage'
import HomePage from '../pages/HomePage'
import {Switch, Route} from 'react-router-dom'
import ShopHeader from './ShopHeader/shopHeader'

const App = () => {
  return (
    <main role='main' className='container'>
      <ShopHeader />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/cart' component={CartPage} />
      </Switch>
    </main>
  )
}

export default App