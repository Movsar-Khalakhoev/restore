import React from 'react'
import styles from './ShoppingCartTable.module.sass'
import {connect} from 'react-redux'
import {allBookRemovedFromCart, bookAddedToCart, bookRemovedFromCart} from '../../../redux/actions/books'

const ShoppingCartTable = ({items, total, onIncrease, onDecrease, onDelete}) => {
  return (
    <div className={styles.table}>
      <h2>Your Order</h2>
      <table className='table'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            items.map(({id, title, count, total}, index) => (
              <tr key={id}>
                <td>{index + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                  <button
                    onClick={() => onDelete(id)}
                    className='btn btn-outline-danger btn-sm float-right'>
                    <i className='fa fa-trash' />
                  </button>
                  <button
                    onClick={() => onIncrease(id)}
                    className='btn btn-outline-success btn-sm float-right'>
                    <i className='fa fa-plus-circle' />
                  </button>
                  <button
                    onClick={() => onDecrease(id)}
                    className='btn btn-outline-warning btn-sm float-right'>
                    <i className='fa fa-minus-circle' />
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <div className={styles.total}>
        Total: {total}
      </div>
    </div>
  )
}

function mapStateToProps({shoppingCart: {cartItems: items, orderTotal: total}}) {
  return {items, total}
}

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBookRemovedFromCart
}
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)
