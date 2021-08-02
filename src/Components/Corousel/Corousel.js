import React, { Component } from 'react';
import Slider from 'infinite-react-carousel';
import Bounce from 'react-reveal/Bounce';
import './Corousel.css'
import Wfh1 from '../Svgs/wfh_1.svg'
import Wfh2 from '../Svgs/wfh_6.svg'
import Wfh3 from '../Svgs/wfh_10.svg'


function Carousel() {
    const settings =  {
      arrows: false,
      autoplay: true,
      duration: 100,
      shift: 10
    };
    return (
      <Bounce right>
      <div className="slider-par">
        <Slider { ...settings }>
          <div>
            <img className="svg" src={Wfh1} />
          </div>
          <div>
              <img className="svg" src={Wfh2} />
          </div>
          <div>
            <img className="svg" src={Wfh3} />
          </div>
        </Slider>
        </div>
        </Bounce>
    );
  };
export default Carousel