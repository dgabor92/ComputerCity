import React, { Component } from 'react';
import { Box, Image } from '@chakra-ui/react';
import Slider from 'react-slick';

export default class AutoPlayMethods extends Component {
  constructor(props) {
    super(props);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
  }
  play() {
    this.slider.slickPlay();
  }
  pause() {
    this.slider.slickPause();
  }
  render() {
    const settings = {
      // dots: true,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000,
    };
    return (
      <Box p="2" maxW="full" m="0">
        <Slider ref={(slider) => (this.slider = slider)} {...settings}>
          <Box border="1px solid black">
            <Image src="/images/unv.jpeg" />
          </Box>
          <Box border="1px solid black">
            <Image src="/images/sandisck.jpeg" />
          </Box>
          <Box border="1px solid black">
            <Image src="/images/laxi.jpeg" />
          </Box>
          <Box border="1px solid black">
            <Image src="/images/brother.jpeg" />
          </Box>
          <Box border="1px solid black">
            <Image src="/images/allin.jpeg" />
          </Box>
          <Box border="1px solid black">
            <Image src="/images/ewent.jpg" />
          </Box>
          <Box border="1px solid black">
            <Image src="/images/thrustmaster.jpg" />
          </Box>
        </Slider>
      </Box>
    );
  }
}
