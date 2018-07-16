import React from 'react';
import { Carousel } from 'react-bootstrap';

const Welcome = props => (
<Carousel>

  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="gardning.jpg" />
    <Carousel.Caption>
      <h3>Gardaning</h3>
    </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="laundry.jpg" />
    <Carousel.Caption>
      <h3>Laundry</h3>
    </Carousel.Caption>
  </Carousel.Item>
 
  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="paint.jpg" />
    <Carousel.Caption>
      <h3>Painting</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
    <img width={900} height={500} alt="900x500" src="plumbing.jpg" />
    <Carousel.Caption>
      <h3>Plumbing</h3>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
);

export default Welcome;