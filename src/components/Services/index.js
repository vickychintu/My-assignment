import React from "react";
import Icon1 from "../../images/icon1.svg";
import Icon2 from "../../images/icon2.svg";
import Icon3 from "../../images/icon3.svg";
import {
  ServicesP,
  ServicesH2,
  ServicesCard,
  ServicesH1,
  ServicesIcon,
  ServicesWrapper,
  ServicesContainer,
} from "./ServiceElements";
const Services = () => {
  return (
    <>
      <ServicesContainer id="service">
        <ServicesH1>Our Services</ServicesH1>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesH2>Online Consultation</ServicesH2>
            <ServicesP>
              Maecenas in tincidunt turpis. Pellentesque non mauris eget risus.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesH2>Digital Prescription</ServicesH2>
            <ServicesP>
              Maecenas in tincidunt turpis. Pellentesque non mauris eget risus.
            </ServicesP>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesH2>Primary Care</ServicesH2>
            <ServicesP>
              Maecenas in tincidunt turpis. Pellentesque non mauris eget risus.
            </ServicesP>
          </ServicesCard>
        </ServicesWrapper>
      </ServicesContainer>
    </>
  );
};

export default Services;
