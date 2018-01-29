import React, { Component } from 'react';
import Hammer from 'react-hammerjs'
import './Carousel.css';

export default class Carousel extends Component {
  constructor(){
    super()
    this.moveDeg = 90
    this.state = {
      assets: [{ src: 'asset0' }, { src: 'asset1' }, { src: 'asset2' }, { src: 'asset3' }, { src: 'asset4' }, { src: 'asset5' }, { src: 'assset6' }],
      rotateStatus: {
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
      },
      current: 0,
      virtualSlidesArray: []
    }
  }

  componentWillMount(){
    this.setState({ virtualSlidesArray: this.getVirtualSlides() })
  }
  componentDidMount(){
   this.slider.addEventListener('transitionend', () => {
      const { dirNumber } = this.state
      const virtualSlidesArray = this.getVirtualSlides(dirNumber)
      console.log(virtualSlidesArray)
      this.setState({
        virtualSlidesArray
      })
    })
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

  getVirtualSlides(direction){
    const { assets, virtualSlidesArray } = this.state
    let { current } = this.state

    if(virtualSlidesArray.length === 0) {
      return Array.from(Array(4), (ele, index) => {
        if(assets[current] && index !== 3){
          return current++
        }
        return assets.length -1
      })
    }

    return virtualSlidesArray.map((ele, i) => {
      const visibledSlide = virtualSlidesArray[current]
      if(i === current) {
        //console.log('equal')
        return ele
      }
      if((current - 1 >= 0) && (i === current - 1)){
        //console.log('rest and more than 0')
        return visibledSlide - 1 >= 0 ? visibledSlide - 1 : assets.length -1
      }
      if((current + 1 <= virtualSlidesArray.length -1) && (i === current +1)){
        //console.log('sum and less than length 0')
        return visibledSlide + 1 <= assets.length -1 ? visibledSlide + 1 : 0
      }
      if(current -1 < 0 && i === virtualSlidesArray.length -1){
        //console.log('rest and less than 0 equal to length')
        return visibledSlide -1 >= 0 ? visibledSlide - 1 : assets.length -1
      }
      if(current + 1 > virtualSlidesArray.length - 1 && i === 0){
       // console.log('sum and more than legnth')
        return visibledSlide + 1 <= assets.length -1 ? visibledSlide + 1 : 0
      }
      if(i !== current -1 || i !== current +1) {
        //console.log('nothing')
        return ele
      }
  })
}

  setCurrent(dirNumber){
    //Need to rest instead of sum because of the deg are going to -90deg when left direction
    const { current, virtualSlidesArray } = this.state
    if((current - dirNumber) < 0) {
      return virtualSlidesArray.length - 1
    } else if((current - dirNumber) > (virtualSlidesArray.length -1)) {
      return 0
    } else {
      return current - dirNumber
    }
  }

  moveSlideX(direction){
    if(!direction) return

    const { rotateX, rotateY, rotateZ } = this.state.rotateStatus

    const activeDirection = (direction === 'left' || direction === 'right') ? 'y' : 'x'
    const dirNumber = (direction === 'left' || direction === 'down') ? -1 : 1

    this.setState({
      dirNumber,
      direction: direction,
      rotateStatus: {
        rotateX: rotateX + (activeDirection === 'x' ? dirNumber * this.moveDeg : 0),
        rotateY: rotateY + (activeDirection === 'y' ? dirNumber * this.moveDeg : 0),
        rotateZ: 0
      },
      current: this.setCurrent(dirNumber)
    })
  }

  getRotateDeg(){
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
    const { assets, virtualSlidesArray } = this.state
    console.log('current', this.state.current)
    // console.log(virtualSlidesArray)

    return (
      <div className='slider' style={{ transform: this.getRotateDeg()}} ref={slider => this.slider = slider}>
        {
        virtualSlidesArray.map((virtualAssetNumber, index) =>{
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

  handleSwipe = ({ offsetDirection, isFinal }) => {
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
            <div className='slider-wrapper' ref={jose => this.jose = jose}>
              { this.state.assets.length && this.renderSlides() }
            </div>
            </Hammer>
      </div>
    )
  }
}
