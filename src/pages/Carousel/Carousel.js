import React, { Component } from 'react';
import Hammer from 'react-hammerjs'
import './Carousel.css';

export default class Carousel extends Component {
  constructor(){
    super()
    this.moveDeg = 90
    this.state = {
      assets: [{ src: 'first' }, { src: 'second' }, { src: 'third' }, { src: 'four' }], //, { src: 'fitht' }, { src: 'six' }, { src: 'seven' }],
      rotateStatus: {
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0
      },
      currentSlide: 0,
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
      this.setState({
        currentSlide: virtualSlidesArray[1],
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
    let virtualSlidesArray = [], next, previous
    const { currentSlide, assets } = this.state
    //left -1 right 1
    if(direction === -1){
      if(currentSlide === assets.length - 1){
        next = assets[1] ? 1 : assets.length - 1
        virtualSlidesArray = [currentSlide, 0 , next]
      } else {
        next = assets[currentSlide + 2] ? currentSlide + 2 : 0
        virtualSlidesArray = [currentSlide, currentSlide + 1, next]
      }
    } else if( direction === 1){
      if(currentSlide === 0){
        previous = assets[assets.length - 2] ? assets.length - 2 : assets.length - 1
        virtualSlidesArray = [previous, assets.length - 1, currentSlide]
      } else {
        previous = (currentSlide -2) < 0 ? assets.length - 1 : currentSlide
        virtualSlidesArray = [previous, currentSlide - 1, currentSlide]
      }
    } else {
      next = assets[1] ? 1 : assets.length - 1
      virtualSlidesArray = [assets.length - 1, currentSlide, next]
    }

    return virtualSlidesArray
  }

  moveSlideX(direction){
    if(!direction) return

    const { rotateX, rotateY, rotateZ } = this.state.rotateStatus

    const activeDirection = (direction === 'left' || direction === 'right') ? 'y' : 'x'
    const dirNumber = (direction === 'left' || direction === 'down') ? -1 : 1
    console.log(dirNumber)

    this.setState({
      dirNumber,
      direction: direction,
      rotateStatus: {
        rotateX: rotateX + (activeDirection === 'x' ? dirNumber * this.moveDeg : 0),
        rotateY: rotateY + (activeDirection === 'y' ? dirNumber * this.moveDeg : 0),
        rotateZ: 0
      }
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
    console.log(virtualSlidesArray)

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
