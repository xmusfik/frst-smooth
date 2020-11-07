import React, { useState } from 'react';
import Video from '../../assets/videos/video.mp4';

import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './hero-section.styles';
import { Button } from '../custom-button/custom-button.styles';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted type='video/mp4' src={Video} />
      </HeroBg>
      <HeroContent>
        <HeroH1>Invest today for the Bright Future </HeroH1>
        <HeroP>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          laudantium.
        </HeroP>
        <HeroBtnWrapper>
          <Button
            to='signup'
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary='true'
            dark='true'
          >
            GET STARTED {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
