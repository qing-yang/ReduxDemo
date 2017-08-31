import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'apple',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Counter = require('./containers').default
      const reducer = require('./modules/reducer').default
      injectReducer(store, { key: 'apple', reducer })

      /*  Return getComponent   */
      cb(null, Counter)

    /* Webpack named bundle   */
    }, 'apple')
  }
})
