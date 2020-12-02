import {applyMiddleware, createStore} from 'redux';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const configureStore = createStore(
      reducer,
      composeWithDevTools(applyMiddleware(thunk))
)

export default configureStore;