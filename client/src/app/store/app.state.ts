import {IUsersState} from './users/users.state'
import {ICoreState} from './core/core.state'
import {IStateState} from './stats/stats.state'
import {ICarsState} from './cars/cars.state'

export interface IAppState{
  core:ICoreState,
  stats:IStateState,
  users:IUsersState,
  cars:ICarsState
}
