import {combineReducers} from 'redux'
import {IAppState} from './app.state'
import {statsReducer} from './stats/stats.reducer'
import {carsReducer} from './cars/cars.reducer'

import {coreReducer} from './core/core.reducer'

import {usersReducer} from './users/users.reducer'

export const reducer=combineReducers<IAppState>({
  core:coreReducer,
  stats:statsReducer,
  users:usersReducer,
  cars:carsReducer
})
