/**
 * Created by songang on 2017/8/18.
 */
import React, { Component } from 'react'
import './View.scss'
import PropTypes from 'prop-types'
import AppleItem from './AppleItem'

class AppleBasket extends Component {
  constructor (props) {
    super(props)
    this.state = {
      count:0,
      countweight:0
    }
  }
  calculationStatus () {
    let status = {
      appleNow: {
        number: 0,
        weight:0,
        greenApple:0,
        greenAppleweight:0
      },
      appleEat:{
        number: 0,
        weight:0
      }
    }
    this.props.appleBasket.apples.forEach(apple => {
      let selector = apple.isEaten ? 'appleEat' : 'appleNow'

      apple.isRipening ? status[selector].number ++ : status[selector].greenApple ++
      apple.isRipening ? status[selector].weight += apple.weight
      : status[selector].greenAppleweight += apple.weight
    })
    return status
  }

  handlerRipeningApple = (apple) => {
    this.setState({
      count: this.state.count + 1,
      countweight : apple.weight
    })
  }

  getAppleItem (apples) {
    let data = []
    console.log('apples', apples)
    apples.forEach(apple => {
      if (!apple.isEaten) {
        data.push(<AppleItem
          key={apple.id}
          apple={apple}
          eatApple={this.props.eatApple}
          handlerRipeningApple={this.handlerRipeningApple}
          ripeningApple={this.props.ripeningApple} />)
      }
    })

    if (!data.length) data.push(<div className='empty-tip' key='empty'>苹果篮子空空如也</div>)

    return data
    /* return (
      apples.map((apple, index) => {
        return <AppleItem
          key={apple.id + '_' + index}
          apple={apple}
          eatApple={this.props.eatApple}
          ripeningApple={this.props.ripeningApple} />
      }) */
  }

  handlePress = () => (pickApple) => {
    let randomNumber = Math.random() * 100
    let weight = Math.floor(200 + Math.random() * 50)
    let payload = {
      randomNumber, weight
    }
    this.props.pickApple(payload)
  }

  render () {
    let { appleBasket, pickApple } = this.props
    let { apples } = appleBasket
    console.log('this props', this.props)
    let status = this.calculationStatus()
    let {
      appleNow :{ number:notEatNumber, weight:notEatWeight,
                  greenApple:notGreenApple,
                  greenAppleweight:greeneweight },
      appleEat:{ number:eatNumber, weight:eatWeight },
    } = status

    return (
      <div className='appleBusket'>
        <div className='title'>苹果篮子</div>

        <div className='stats'>
          <div className='section'>
            <div className='head'>当前</div>
            <div className='content'>{notEatNumber}个红苹果(共{notEatWeight}克)，{notGreenApple}个青苹果(共{greeneweight}克)</div>
          </div>
          <div className='section'>
            <div className='head'>吃掉</div>
            <div className='content'>{eatNumber}个红苹果(共{eatWeight}克)</div>
          </div>
          <div className='section'>
            <div className='head'>催熟</div>
            <div className='content'>{this.state.count}个青苹果(共{this.state.countweight}克)</div>
          </div>
        </div>

        <div className='appleList'>
          { this.getAppleItem(apples) }
        </div>

        <div className='btn-div'>
          <button onClick={this.handlePress(pickApple)}>摘苹果</button>
        </div>

      </div>
    )
  }
}

AppleBasket.propTypes = {
  appleBasket: PropTypes.any,
  pickApple: PropTypes.func.isRequired,
  eatApple: PropTypes.func.isRequired,
  ripeningApple: PropTypes.func.isRequired
}

export default AppleBasket
