import React, {Component} from 'react'
import styles from './BookList.module.sass'
import BookListItem from './BookListItem/BookListItem'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import withBookstoreService from '../../hoc/withBookstoreService'
import compose from '../../../utils/compose'
import Spinner from '../../Spinner/Spinner'
import ErrorIndicator from '../../ErrorIndicator/ErrorIndicator'
import {bookAddedToCart, fetchBooks} from '../../../redux/actions/books'

class BookListContainer extends Component {

  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const {books, loading, error, onAddedToCart} = this.props
    return (
      <ul className={styles.book_list}>
        { loading
          ? <Spinner />
          : error
            ? <ErrorIndicator />
            : books.map(book =>
              <li key={book.id}><BookListItem
                book={book}
                onAddedToCart={() => onAddedToCart(book.id)}
              /></li>)
        }
      </ul>
    )
  }
}

function mapStateToProps({bookList}) {
  return {...bookList}
}

function mapDispatchToProps(dispatch, {bookstoreService}) {
  return bindActionCreators({
    fetchBooks: fetchBooks(bookstoreService),
    onAddedToCart: bookAddedToCart
  }, dispatch)
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps),
)(BookListContainer)