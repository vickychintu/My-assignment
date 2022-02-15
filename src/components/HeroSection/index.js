import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "./ButtonElements";
import {
  HeroContainer,
  VideoBg,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  ArrowForward,
  ArrowRight,
  HeroBtnWrapper,
} from "./HeroElements";
const HeroSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };
  return (
    <>
      <HeroContainer>
        <HeroBg>
          <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
        </HeroBg>
        <HeroContent>
          <HeroH1>Making Health Care Better Together</HeroH1>
          <HeroP>
            Now You can filter and find Doctors for your your ailment and book
            appoiments at comfort of your home
          </HeroP>
          <HeroBtnWrapper>
            <Button
              to="/signin"
              onMouseEnter={onHover}
              onMouseLeave={onHover}
              primary="true"
              dark="true"
            >
              Book An Appoinment {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
          </HeroBtnWrapper>
        </HeroContent>
      </HeroContainer>
    </>
  );
};

export default HeroSection;
