import React, { Component } from 'react';
import './Carousel.css';

export default class Carousel extends Component {
  constructor(){
    super()
    this.assets = [ 1, 2, 3, 4, 5, 6, 7 ]
    this.moveDeg = 90
    this.state = {
      assets: [],
      rotateStatus: {
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
      }
    }
  }

  componentWillMount(){
    this.setState({ assets: this.assets.filter((asset, index) => index < 4) })
  }

  addCubeClasses(index){
    switch(index){
      case 0:
        return 'firstSlide'
        break
      case 1:
        return 'secondSlide'
        break
      case 2:
        return 'thirdSlide'
        break
      case 3:
        return 'fourSlide'
        break
      default:
        return 'none'
        break
    }
  }

  moveSlideX(direction){
    let numberDirection = 1
    const { rotateX, rotateY, rotateZ } = this.state.rotateStatus

    const activeDirection = (direction === 'left' || direction === 'right') ? 'y' : 'x'
    const multiplyDeg = (direction === 'left' || direction === 'down') ? -1 : 1

    this.setState({
      direction: direction,
      rotateStatus: {
        rotateX: rotateX + (activeDirection === 'x' ? multiplyDeg * this.moveDeg : 0) ,
        rotateY: rotateY + (activeDirection === 'y' ? multiplyDeg * this.moveDeg : 0),
        rotateZ: 0
      }
    })
  }

  getRotateStyle(){
  const { rotateStatus, direction } = this.state
  const { rotateX, rotateY, rotateZ } = rotateStatus

  if(!direction) return {}

  const activeX = (direction === 'up' || direction === 'down') ? 1 : 0
  const activeY = (direction === 'left' || direction === 'right') ? 1 : 0
  const activeZ = 0

  const degresToMove = activeX ? rotateX : rotateY

  return `rotate3d(${activeX}, ${activeY}, ${activeZ}, ${degresToMove}deg)`

  }

  renderSlides(){
    const { assets } = this.state

    return (
      <div className='slider' style={{ transform: this.getRotateStyle() }}>
        {
          assets.map((ele, index) => {
            return (
              <div
              key={index}
              className={`slide ${this.addCubeClasses(index)}`}>
              { index }
              </div>)
          })
        }
      </div>
    )
  }
  render() {
    return (
      <div className="Carousel">
        <header className="Carousel-header">
          <h1 className="Carousel-title">Carousel In React</h1>
          <div className='buttons-section'>
            <button className='move' type='button' onClick={() => this.moveSlideX('left')}>left</button>
            <button className='move' type='button' onClick={() => this.moveSlideX('right')}>right</button>
            <button className='move' type='button' onClick={() => this.moveSlideX('up')}>Up</button>
            <button className='move' type='button' onClick={() => this.moveSlideX('down')}>Down</button>
          </div>
        </header>
        <div className='slider-wrapper'>
          { this.state.assets.length && this.renderSlides() }
        </div>
      </div>
    );
  }
}
