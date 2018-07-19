// import React from 'react';
// import {Carousel} from 'react-bootstrap';


import React, { Component } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';

const items = [
  {
    src: "gardning.jpg",
    caption: 'Gardening'
  },
  {
    src: "paint.jpg",
    caption: 'Painting'
  },
  {
    src: "laundry.jpg",    
    caption: 'Laundry'
  },
  {
    src: "plumbing.jpg",
    caption: 'Plumbing'
  },
];

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.goToIndex = this.goToIndex.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  goToIndex(newIndex) {
    if (this.animating) return;
    this.setState({ activeIndex: newIndex });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = items.map((item) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
        >
          <img src={item.src} alt={item.altText} />
          <CarouselCaption captionText={item.caption} />
        </CarouselItem>
      );
    });

    return (
      <Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl direction="next" directionText="Next" onClickHandler={this.next} />
      </Carousel>
    );
  }
}


export default Welcome;

// const Welcome = props => (
// <Carousel>
//   <Carousel.Item>
//     <img width={900} height={300} alt="900x500" src="gardning.jpg" />
//     <Carousel.Caption>
//       <h3>Gardaning</h3>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img width={900} height={300} alt="900x500" src="laundry.jpg" />
//     <Carousel.Caption>
//       <h3>Laundry</h3>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img width={900} height={300} alt="900x500" src="paint.jpg" />
//     <Carousel.Caption>
//       <h3>Painting</h3>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img width={900} height={300} alt="900x500" src="plumbing.jpg" />
//     <Carousel.Caption>
//       <h3>Plumbing</h3>
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// );

// export default Welcome;