import {
  ALL_BOOK_REMOVED_FROM_CART,
  BOOK_ADDED_TO_CART, BOOK_REMOVED_FROM_CART,
  FETCH_BOOKS_FAILURE,
  FETCH_BOOKS_REQUEST,
  FETCH_BOOKS_SUCCESS
} from './actionTypes'

export const fetchBooks = bookstoreService => () => (dispatch) => {
  dispatch(booksRequested())
  bookstoreService.getBooks()
    .then(data => dispatch(booksLoaded(data)))
    .catch(error => dispatch(booksError(error)))
}

const booksRequested = () => {
  return {
    type: FETCH_BOOKS_REQUEST
  }
}

const booksLoaded = newBooks => {
  return {
    type: FETCH_BOOKS_SUCCESS,
    payload: newBooks
  }
}

const booksError = error => {
  return {
    type: FETCH_BOOKS_FAILURE,
    payload: error
  }
}


export const bookAddedToCart = id => {
  return {
    type: BOOK_ADDED_TO_CART,
    payload: id
  }
}

export const bookRemovedFromCart = id => {
  return {
    type: BOOK_REMOVED_FROM_CART,
    payload: id
  }
}

export const allBookRemovedFromCart = id => {
  return {
    type: ALL_BOOK_REMOVED_FROM_CART,
    payload: id
  }
}