import React, {Component} from 'react';
import './css/slider.css';


const BackArrow = (props) => (
  <div onClick={props.previousImage} className="arrow_left">
    <i className="fa fa-chevron-circle-left" aria-hidden="true"></i>
  </div>
)

const NextArrow = (props) => (
  <div onClick={props.nextImage} className="arrow_right">
    <i className="fa fa-chevron-circle-right" aria-hidden="true"></i>
  </div>
)


class Slider extends Component{

	constructor(props) {
    super(props);
    this.state = {
      photos: [
  {id:1,image: require('./images/gear-junkie-logo.png'), content: 'Your focus on putting in the work, and the technology handle the rest'},
  {id:2,image: require('./images/mashable-logo.png'), content: 'Literally transport you from home to wherever you choose to run'},
  {id:3,image: require('./images/wired-logo.png'), content: 'Breathes new life in to a tired, old running routine'},
  {id:4,image: require('./images/gear-junkie-logo.png'), content: 'Identify Where Your State Should Live'},
  {id:5,image: require('./images/mashable-logo.png'), content: 'Add Inverse Data Flow'},
  {id:6,image: require('./images/wired-logo.png'), content: 'Data Flow'},
  {id:7,image: require('./images/mashable-logo.png'), content: 'Add Inverse on putting in the work'},
   {id:8,image: require('./images/gear-junkie-logo.png'), content: 'Add Inverse Data Flow transport you from home'},
   {id:9,image: require('./images/wired-logo.png'), content: 'Add Inverse Data Flow, Breathe new life'}
      ],
      slideCount: 0
    }
    this.nextImage = this.nextImage.bind(this);
this.previousImage = this.previousImage.bind(this);
  }

nextImage() {
    this.setState({ slideCount: this.state.slideCount + 1 })
  }

  previousImage() {
    this.setState({ slideCount: this.state.slideCount - 1 })
  }
  render() {
    var startindex=this.state.slideCount;
      var finishindex=this.state.slideCount + 3;
    return (
       
<div className="container">
  <div className="slideshow row col-md-12">
    {this.state.slideCount !== 0 ? <BackArrow previousImage={this.previousImage}/> : ''}
    {this.state.photos.slice(startindex, finishindex).map((photo, key) => {
      
         return (
           <div key={photo.id} className="slider_container">
             <img src={photo.image} alt='' className=""/>
             <div className="slide_text">
               {photo.content !== null ? photo.content : ''}
             </div>
           </div>
         )
       
     return ''
   })}
   {this.state.slideCount !== (this.state.photos.length - 1) ? <NextArrow nextImage={this.nextImage}/> : ''} </div>
 </div>
    );
  }
}

export default Slider;