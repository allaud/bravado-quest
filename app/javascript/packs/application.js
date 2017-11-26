import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { Content } from './Content';
import Reducers from './Redux';
import thunk from 'redux-thunk';
import {initApp} from './Redux/Actions'

// Redux Middleware
const middleware = applyMiddleware(thunk);

// Redux Store
const store = createStore(Reducers, middleware);

store.dispatch(initApp());

ReactDOM.render(
		<Provider store = {store}>
			<Content />
		</Provider>,
		document.getElementById('content'));