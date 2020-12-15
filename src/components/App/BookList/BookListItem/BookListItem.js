import React from 'react'
import styles from './BookListItem.module.sass'

const BookListItem = ({book: { title, author, price, image}, onAddedToCart}) => {
  return (
    <div className={styles.list_item}>
      <div className={styles.cover}>
        <img className={styles.image} src={image} alt={title}/>
      </div>
      <div className={styles.details}>
        <span className={styles.title}>{title}</span>
        <div className={styles.author}>{author}</div>
        <div className={styles.price}>${price}</div>
        <button
          className={`btn btn-info add-to-cart`}
          onClick={onAddedToCart}
        >Add to cart</button>
      </div>
    </div>
  )
}

export default BookListItem