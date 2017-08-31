import React, { Component } from 'react'
import { connect } from 'react-redux'
import DuckImage from '../assets/Duck.jpg'
import PropTypes from 'prop-types'
import './HomeView.scss'

var width = 120

class HomeView extends Component {
  constructor (props) {
    super(props)
    this.state = {
      nowWeight:0
    }
  }

  calculationStatus () {
    let status = {
      appleNow: {
        number: 0,
        weight:0
      },
      appleEat:{
        number: 0,
        weight:0
      }
    }
    this.props.appleBasket.apples.forEach(apple => {
      let selector = apple.isEaten ? 'appleEat' : 'appleNow'

      status[selector].weight += apple.weight
    })
    return status
  }
  render () {
    var eatWeight
    if (this.props.appleBasket !== undefined) {
      let status = this.calculationStatus()
      eatWeight = status.appleEat.weight
      width = Math.floor(width + eatWeight / 100 * 10)
    }
    return (
      <div>
        <h4>Welcome!</h4>
        <img alt='This is a duck, because Redux!' style={{ width: width, margin: 1.5 }} src={DuckImage} />
      </div>
    )
  }
}
const mapDispatchToProps = {

}

const mapStateToProps = (state) => ({
  appleBasket : state.apple
})

HomeView.propTypes = {
  appleBasket: PropTypes.any
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
