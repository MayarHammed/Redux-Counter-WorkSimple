import { createStore } from 'redux'
// import {ReducerCounter} from  './reducer'
import { rootreducer } from './RootReducer'

// create story 
export const StoryCounter = createStore(rootreducer)