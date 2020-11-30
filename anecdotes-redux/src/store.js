import { createStore, combineReducers } from 'redux'
import anecdoteReducer from './reducers/anecdoteReducer'
import notificationReducer from './reducers/notificationReducer'
import filterReducer from './reducers/filterReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
    Anecdotes: anecdoteReducer,
    Message: notificationReducer,
    Filter: filterReducer
})

const store = createStore(
    reducer,
    composeWithDevTools()
)



export default store