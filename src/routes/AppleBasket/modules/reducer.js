/**
 * Created by songang on 2017/8/18.
 */
import * as types from './constants'
import { fromJS } from 'immutable'

const initialState = {

  newAppleId: 3,
  apples: [
    {
      id: 0,
      weight: 233,
      isEaten: false,
      isRipening:false
    },
    {
      id: 1,
      weight: 235,
      isEaten: false,
      isRipening:true
    },
    {
      id: 2,
      weight: 256,
      isEaten: false,
      isRipening:false
    }
  ]
}

export default function appleReducer (state = initialState, action) {
  switch (action.type) {
    case types.INIT_APPLES:
      return state

    case types.PICK_APPLE:
      return handlePickApple(state, action)

    case types.EAT_APPLE:
      return handleEatApple(state, action)

    case types.RIPENING_APPLE:
      return handleRipeningApple(state, action)

    default:
      return state
  }

  function handlePickApple (state, action) {
    console.log('weight:', action.payload.weight)
    console.log('isRipening:', action.payload.isRipening)
    let newApple = {
      id: state.newAppleId,
      weight: action.payload.weight,
      isEaten: false,
      isRipening: action.payload.isRipening
    }

    return fromJS(state).update('apples', list => list.push(newApple))
                                .set('newAppleId', state.newAppleId + 1)
                                .toJS()
  }

  function handleEatApple (state, action) {
    console.log('action', action.payload.appleId)
    return fromJS(state).setIn(['apples', action.payload.appleId, 'isEaten'], true).toJS()
  }

  function handleRipeningApple (state, action) {
    return fromJS(state).setIn(['apples', action.payload.appleId, 'isRipening'], true).toJS()
  }
}
