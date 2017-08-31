import { connect } from 'react-redux'
import { pickApple, eatApple, ripeningApple } from '../modules/actions'

import AppleBasket from '../components'

const mapDispatchToProps = {
  pickApple,
  eatApple,
  ripeningApple
}

const mapStateToProps = (state) => ({
  appleBasket : state.apple
})

export default connect(mapStateToProps, mapDispatchToProps)(AppleBasket)
