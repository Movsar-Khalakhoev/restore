import React from 'react'
import styles from './ShopHeader.module.sass'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const ShopHeader = ({numItems, total}) => {
  return (
    <header className={`${styles.header} row`}>
      <Link className={`${styles.logo} text-dark`} to='/'>ReStore</Link>
      <Link className={styles.cart} to='/cart'>
        <i className={`${styles.cart_icon} fa fa-shopping-cart`} />
        {numItems} items (${total})
      </Link>
    </header>
  )
}

function mapStateToProps({shoppingCart}) {
  return {
    numItems: shoppingCart.cartItems.reduce((total, item) => total + item.count, 0),
    total: shoppingCart.orderTotal
  }
}

export default connect(mapStateToProps)(ShopHeader)