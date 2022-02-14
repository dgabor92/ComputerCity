import React, { Component } from 'react';
import { Image, Box } from '@chakra-ui/react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class AutoPlay extends Component {
  render() {
    const settings = {
      // dots: true,
      arrows: false,
      centerPadding: 0,
      infinite: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: 'linear',
    };
    return (
      <Box p="2" maxW={'full'}>
        <Slider {...settings} centerPadding="0">
          <Box>
            <Image src="/images/brands/acer-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/aio-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/apc-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/arctic-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/asrock-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/asus-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/axagon-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/belkin-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/bequiet-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/black-eye-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/booken-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/cooler-master-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/creative-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/eminent-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/evga-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/evolveo-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/ewent-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/gembird-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/genius-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/gigabyte-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/goodram-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/kingston-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/logitech-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/modecom-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/msi-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/ocz-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/realpower-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/rivacase-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/roccat-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/samsonite-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/samsung-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/smanos-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/steelseries-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/team-group-small.png" />
          </Box>
          <Box>
            <Image src="/images/brands/tenda-small.png" />
          </Box>
        </Slider>
      </Box>
    );
  }
}
