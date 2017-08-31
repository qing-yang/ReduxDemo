import React from 'react'
import './AppleItem.scss'
import PropTypes from 'prop-types'

class AppleItem extends React.Component {
  eatApple = (id) => () => {
    this.props.eatApple(id)
  }

  ripeningApple = (apple) => () => {
    this.props.ripeningApple(apple.id)
    this.props.handlerRipeningApple(apple)
    console.log('ripeningApple apple', apple)
  }

  render () {
    let { apple } = this.props
    return (
      <div className='appleItem'>
        <div className='apple'>
          {
          apple.isRipening
          ? <img src={require('../assets/red_apple.png')} alt='' />
          : <img style={{ width:55, height:55 }} src={require('../assets/green_apple.jpg')} alt='' />
          }
        </div>
        <div className='info'>
          <div className='name'>{apple.isRipening
          ? '红苹果' : '青苹果'}{ apple.id }</div>
          <div className='weight'>{ apple.weight }克</div>
        </div>
        <div className='btn-div'>
          {
          apple.isRipening
          ? <button style={{ backgroundColor:'#096' }} onClick={this.eatApple(apple.id)}> 吃掉 </button>
          : <button style={{ backgroundColor:'red' }} onClick={this.ripeningApple(apple)}> 催熟 </button>
          }
        </div>
      </div>
    )
  }
}

AppleItem.propTypes = {
  eatApple: PropTypes.func.isRequired,
  ripeningApple: PropTypes.func.isRequired,
  apple: PropTypes.object.isRequired
}

export default AppleItem
