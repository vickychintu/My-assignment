import React from "react";
import { Button } from "../HeroSection/ButtonElements";
import {
  InfoContainer,
  InfoRow,
  InfoWrapper,
  ImgWrap,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
} from "./InfoElements";

const InfoSection = (props) => {
  return (
    <>
      <InfoContainer lightBg={props.lightBg} id={props.id}>
        <InfoWrapper>
          <InfoRow imgStart={props.imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{props.topLine}</TopLine>
                <Heading lightText={props.lightText}>{props.headLine}</Heading>
                <Subtitle darkText={props.darkText}>
                  {props.description}
                </Subtitle>
                {/* <BtnWrap>
                  <Button to="/home">{props.buttonLabel}</Button>
                </BtnWrap> */}
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={props.img} alt={props.alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoSection;
