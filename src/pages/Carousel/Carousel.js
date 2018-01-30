import React, { Component } from 'react';
import Hammer from 'react-hammerjs'
import './Carousel.css';

export default class Carousel extends Component {
  constructor(){
    super()
    this.canMove = true
    this.moveDeg = 90
    this.state = {
      assets: [{ src: 'asset0' }, { src: 'asset1' }, { src: 'asset2' }, { src: 'asset3' }, { src: 'asset4' }, { src: 'asset5' }, { src: 'assset6' }],
      rotateStatus: {
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
      },
      current: 0,
      virtualIndexArray: []
    }
  }

  componentWillMount(){
    this.getVirtualSlides()
  }
  componentDidMount(){
   this.slider.addEventListener('transitionend', this.getVirtualSlides, false)
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

  getVirtualSlides = () => {
    const { assets, virtualIndexArray } = this.state
    let virtualArray = []
    let { current } = this.state

    if(!virtualIndexArray.length){
      virtualArray = Array.from(Array(4), (ele, index) => {
        if(assets[current] && index !== 3){
          return current++
        }
        return assets.length -1
      })
    } else {
      virtualArray = virtualIndexArray.map((ele, index) => {
        const visibledSlide = virtualIndexArray[current]
        if(index === current) {
          return ele
        } else if(index === current - 1) {
          return visibledSlide - 1 >= 0 ? visibledSlide - 1 : assets.length -1
        } else if(index === current + 1){
          return visibledSlide + 1 <= assets.length -1 ? visibledSlide + 1 : 0
        } else if(index === 0){
          return visibledSlide + 1 <= assets.length -1 ? visibledSlide + 1 : 0
        } else if(index === virtualIndexArray.length -1){
          return visibledSlide -1 >= 0 ? visibledSlide - 1 : assets.length -1
        } else if(index !== current -1 || index !== current +1){
          return ele
        }
        // else if((current - 1 >= 0) && (index === current - 1)){
        //   return visibledSlide - 1 >= 0 ? visibledSlide - 1 : assets.length -1
        // } else if((current + 1 <= virtualIndexArray.length -1) && (index === current +1)){
        //   return visibledSlide + 1 <= assets.length -1 ? visibledSlide + 1 : 0
        // } else if(current -1 < 0 && index === virtualIndexArray.length -1){
        //   return visibledSlide -1 >= 0 ? visibledSlide - 1 : assets.length -1
        // } else if(current + 1 > virtualIndexArray.length - 1 && index === 0){
        //   return visibledSlide + 1 <= assets.length -1 ? visibledSlide + 1 : 0
        // } else if(index !== current -1 || index !== current +1) {
        //   return ele
        // }
      })
    }

  this.setState({ virtualIndexArray: virtualArray }, () => (this.canMove = true))

}

  setCurrent(dirNumber){
    //Need to rest instead of sum because of the deg are going to -90deg when left direction
    const { current, virtualIndexArray } = this.state
    if((current - dirNumber) < 0) {
      return virtualIndexArray.length - 1
    } else if((current - dirNumber) > (virtualIndexArray.length -1)) {
      return 0
    } else {
      return current - dirNumber
    }
  }

  moveSlideX(direction){
    const { rotateY } = this.state.rotateStatus

    const dirNumber = direction === 'left' ? -1 : 1

    this.setState({
      dirNumber,
      direction: direction,
      rotateStatus: {
        rotateX: 0,
        rotateY: rotateY + (dirNumber * this.moveDeg),
        rotateZ: 0
      },
      current: this.setCurrent(dirNumber)
    })
  }

  getRotateDeg(){
  const { rotateStatus, direction } = this.state
  const { rotateX, rotateY, rotateZ } = rotateStatus

  if(!direction) return {}

  const activeX = 0
  const activeY = 1
  const activeZ = 0

  return `rotate3d(${activeX}, ${activeY}, ${activeZ}, ${rotateY}deg)`
  }

  renderSlides(){
    const { assets, virtualIndexArray } = this.state

    return (
      <div className='slider' style={{ transform: this.getRotateDeg()}} ref={slider => this.slider = slider}>
        {
        virtualIndexArray.map((virtualAssetNumber, index) =>{
          return (
            <div
            key={index}
            className={`slide ${this.addCubeClasses(index)}`}>
            { assets.find(({ src }, i) => virtualAssetNumber === i).src }
            </div>
          )
        })
        }
      </div>
    )
  }

  handleSwipe = ({ offsetDirection }) => {
    if (!this.canMove) {
      return false
    }

    this.canMove = false

    const direction = {
      2: 'left',
      4: 'right'
    }
    this.moveSlideX(direction[offsetDirection])
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
            <Hammer onSwipe={this.handleSwipe}>
            <div className='slider-wrapper'>
              { this.state.assets.length && this.renderSlides() }
            </div>
            </Hammer>
      </div>
    )
  }
}
