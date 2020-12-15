import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import {Provider} from 'react-redux'
import store from './redux/store'
import BookstoreService from './services/bookstoreService'
import {BookstoreServiceProvider} from './components/bookstoreServiceContext/bookstoreServiceContext'
import {BrowserRouter} from 'react-router-dom'

const bookstoreService = new BookstoreService()

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <BookstoreServiceProvider value={bookstoreService}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </BookstoreServiceProvider>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
