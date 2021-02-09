import TodoReducer from './redusers/todoreduser'
import BlogReducer from './redusers/blogreduser'
import UserReduser from './redusers/userReduser'
import { createStore, combineReducers,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
const loggerMiddleware = createLogger();

const rootreduser = combineReducers({Todo:TodoReducer,Blog:BlogReducer,Users:UserReduser})

export const store = createStore(rootreduser,applyMiddleware(thunkMiddleware,loggerMiddleware))