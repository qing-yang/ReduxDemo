import { createAction } from 'redux-actions'
import * as types from './constants'

// export function fetchApple () {
//   return (dispatch, getState) => {
//     return fetch('').then((result) => {
//       let fetchAction = createAction(types.INIT_APPLES)
//       dispatch(fetchAction({ weight: payload.weight }))
//       return result
//     }).catch((error) => {
//       console.log('pickApple error', error)
//     })
//   }
// }

export function pickApple (payload) {
  return (dispatch, getState) => {
    return fetch('').then((result) => {
      // let weight = Math.floor(200 + Math.random() * 50)
      let isRipening = false
      // let randomNumber = Math.random() * 100
      if (payload.randomNumber > 40) {
        isRipening = true
      }
      let pickAction = createAction(types.PICK_APPLE)
      dispatch(pickAction({ weight: payload.weight, isRipening:isRipening }))
      return result
    }).catch((error) => {
      console.log('pickApple error', error)
    })
  }
}

export function eatApple (payload) {
  return (dispatch, getState) => {
    return fetch('').then((result) => {
      let appleId = payload
      let eatAction = createAction(types.EAT_APPLE)
      dispatch(eatAction({ appleId: appleId }))
      return result
    }).catch((error) => {
      console.log('eatApple error', error)
    })
  }
}

export function ripeningApple (payload) {
  return (dispatch, getState) => {
    return fetch('').then((result) => {
      let appleId = payload
      let ripeningAction = createAction(types.RIPENING_APPLE)
      dispatch(ripeningAction({ appleId:appleId }))
      return result
    }).catch((error) => {
      console.log('ripeningApple error', error)
    })
  }
}
