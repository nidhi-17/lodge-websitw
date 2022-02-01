import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../styles/view.css'
const View = () => {
  return (
    <Carousel indicators={false}> 
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2016/12/11/18/10/apartment-1899964__480.jpg"
          alt="First slide"
          height='630px'
        />
        <Carousel.Caption  >
          <h1 style={{color:"black"}}>Designed to make your stay magnificient</h1>
          < button className='viewmore' >VIEW MORE</ button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2013/07/25/01/31/forest-166733__480.jpg"
          alt="Second slide"
          height='630px'
        />

        <Carousel.Caption  >
          <h1 style={{color:"blue"}}>Beautiful and Cozy Ambiance</h1>
          < button>VIEW MORE</ button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515__340.jpg"
          alt="Third slide"
          height='630px'
        />

        <Carousel.Caption  >
          <h1 style={{color:"yellow"}}>Exceptional Care and Precautions taken</h1>
          < button>VIEW MORE</ button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default View;
