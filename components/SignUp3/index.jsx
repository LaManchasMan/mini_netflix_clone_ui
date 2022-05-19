import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MediaMasterContainer from "../MediaMasterContainer";
import HeroImageTextDiv from "../HeroImageTextDiv";
import FrequentlyAskedQuestionsContainer from "../FrequentlyAskedQuestionsContainer";
import FooterMasterDiv from "../FooterMasterDiv";
import * as mdc from "material-components-web";
import styled from "styled-components";
import {
  RobotoNormalBlack16px,
  RobotoBoldWhite48px,
  InterNormalWhite30px,
  RobotoNormalWhite14px,
  InterBoldWhite15px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./SignUp3.css";

function SignUp3(props) {
  const {
    signUpPageBackground,
    getStarted1,
    signIn,
    netflixLogo,
    frequentlyAskedQuestions,
    readyToWatchEnte,
    getStarted2,
    label,
    frequentlyAskedQuestionsContainerProps,
  } = props;

  useEffect(() => {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-di .mdc-text-field"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="sign-up2 screen">
        <ContainerContainer>
          <MediaMasterContainer />
          <HeroImageContainerDiv>
            <OverlapGroup18>
              <SignUpPageBackground src={signUpPageBackground} />
              <Rectangle85></Rectangle85>
              <HeroImageTextContainer>
                <HeroImageTextDiv />
                <OverlapGroup1>
                  <Rectangle91></Rectangle91>
                  <Rectangle90></Rectangle90>
                  <Link to="/home">
                    <GetStarted>{getStarted1}</GetStarted>
                  </Link>
                  <Rectangle93></Rectangle93>
                  <div className="text-field-filled-di">
                    <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with--icon ">
                      <span className="mdc-text-field__ripple"></span>
                      <span className="mdc-floating-label" id="my-label-id">
                        Email address
                      </span>
                      <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                      <span className="mdc-line-ripple"></span>
                    </label>
                  </div>
                </OverlapGroup1>
              </HeroImageTextContainer>
              <OverlapGroup2>
                <SignIn>{signIn}</SignIn>
              </OverlapGroup2>
            </OverlapGroup18>
          </HeroImageContainerDiv>
          <Link to="/login">
            <NetflixLogoContainer>
              <NetflixLogo src={netflixLogo} />
            </NetflixLogoContainer>
          </Link>
        </ContainerContainer>
        <OverlapGroup19>
          <Indicator></Indicator>
          <OverlapGroup17>
            <FrequentlyAskedQuestionsContainer className={frequentlyAskedQuestionsContainerProps.className} />
            <OverlapGroup21>
              <Rectangle106></Rectangle106>
              <FrequentlyAskedQuestions>{frequentlyAskedQuestions}</FrequentlyAskedQuestions>
            </OverlapGroup21>
            <EmailAddressGetStarted>
              <OverlapGroup4>
                <Rectangle107></Rectangle107>
                <ReadyToWatchEnte>{readyToWatchEnte}</ReadyToWatchEnte>
              </OverlapGroup4>
              <OverlapGroup3>
                <Rectangle91></Rectangle91>
                <Link to="/home">
                  <GetStarted>{getStarted2}</GetStarted>
                </Link>
                <Rectangle110></Rectangle110>
                <Vector src="/img/vector@2x.png" />
                <Vector1 src="/img/vector-1@2x.svg" />
                <Label>{label}</Label>
              </OverlapGroup3>
            </EmailAddressGetStarted>
          </OverlapGroup17>
        </OverlapGroup19>
        <FooterMasterDiv />
      </div>
    </div>
  );
}

const ContainerContainer = styled.div`
  width: 1440px;
  height: 1169px;
  position: relative;
`;

const HeroImageContainerDiv = styled.div`
  position: absolute;
  height: 585px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 1440px;
  background-color: var(--new-york-pink);
`;

const OverlapGroup18 = styled.div`
  width: 1440px;
  height: 584px;
  position: relative;
`;

const SignUpPageBackground = styled.img`
  position: absolute;
  width: 1440px;
  height: 583px;
  top: 0;
  left: 0;
  object-fit: cover;
`;

const Rectangle85 = styled.div`
  position: absolute;
  width: 1440px;
  height: 584px;
  top: 0;
  left: 0;
  background-color: var(--heavy-metal);
`;

const HeroImageTextContainer = styled.div`
  position: absolute;
  width: 882px;
  top: 138px;
  left: 279px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 360px;
`;

const OverlapGroup1 = styled.div`
  width: 674px;
  height: 59px;
  position: relative;
  margin-left: 4px;
`;

const Rectangle91 = styled.div`
  position: absolute;
  width: 209px;
  height: 59px;
  top: 0;
  left: 464px;
  background-color: var(--tamarillo);
`;

const Rectangle90 = styled.div`
  position: absolute;
  width: 674px;
  height: 59px;
  top: 0;
  left: 0;
  background-color: var(--red);
`;

const GetStarted = styled.div`
  ${ValignTextMiddle}
  ${InterNormalWhite30px}
            position: absolute;
  width: 210px;
  height: 59px;
  top: 0;
  left: 464px;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
`;

const Rectangle93 = styled.div`
  position: absolute;
  width: 465px;
  height: 59px;
  top: 0;
  left: 0;
  background-color: var(--mist-gray);
`;

const OverlapGroup2 = styled.div`
  position: absolute;
  height: 25px;
  top: 41px;
  left: 1321px;
  display: flex;
  align-items: flex-start;
  min-width: 75px;
  background-color: var(--red);
  border-radius: 4px;
`;

const SignIn = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite15px}
            width: 75px;
  height: 25px;
  text-align: center;
  letter-spacing: 0;
`;

const NetflixLogoContainer = styled.div`
  position: absolute;
  height: 51px;
  top: 41px;
  left: 46px;
  display: flex;
  padding: 4px 17px;
  align-items: flex-end;
  min-width: 220px;
  cursor: pointer;
`;

const NetflixLogo = styled.img`
  width: 178px;
  height: 42px;
  object-fit: cover;
`;

const OverlapGroup19 = styled.div`
  width: 1440px;
  height: 587px;
  position: relative;
`;

const Indicator = styled.div`
  position: absolute;
  width: 467px;
  height: 3px;
  top: 565px;
  left: 382px;
  background-color: var(--black-2);
`;

const OverlapGroup17 = styled.div`
  position: absolute;
  width: 1440px;
  height: 587px;
  top: 0;
  left: 0;
`;

const OverlapGroup21 = styled.div`
  position: absolute;
  width: 838px;
  height: 49px;
  top: 29px;
  left: 301px;
`;

const Rectangle106 = styled.div`
  position: absolute;
  width: 837px;
  height: 49px;
  top: 0;
  left: 1px;
  background-color: var(--black);
`;

const FrequentlyAskedQuestions = styled.div`
  ${ValignTextMiddle}
  ${RobotoBoldWhite48px}
            position: absolute;
  width: 838px;
  height: 49px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0.15px;
  line-height: 24px;
`;

const EmailAddressGetStarted = styled.div`
  position: absolute;
  width: 756px;
  top: 482px;
  left: 345px;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 85px;
`;

const OverlapGroup4 = styled.div`
  width: 750px;
  height: 26px;
  position: relative;
  margin-right: 6px;
`;

const Rectangle107 = styled.div`
  position: absolute;
  width: 750px;
  height: 25px;
  top: 1px;
  left: 0;
  background-color: var(--black);
`;

const ReadyToWatchEnte = styled.p`
  ${RobotoNormalWhite14px}
  position: absolute;
  width: 750px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0.15px;
  line-height: 24px;
  white-space: nowrap;
`;

const OverlapGroup3 = styled.div`
  width: 674px;
  height: 59px;
  position: relative;
  margin-right: 6px;
  background-color: var(--congo-brown);
`;

const Rectangle110 = styled.div`
  position: absolute;
  width: 465px;
  height: 59px;
  top: 0;
  left: 0;
  background-color: var(--white);
`;

const Vector = styled.img`
  position: absolute;
  width: 1px;
  height: 1px;
  top: 29px;
  left: 28px;
`;

const Vector1 = styled.img`
  position: absolute;
  width: 20px;
  height: 16px;
  top: 21px;
  left: 18px;
`;

const Label = styled.div`
  ${RobotoNormalBlack16px}
  position: absolute;
  top: 17px;
  left: 54px;
  letter-spacing: 0.15px;
  line-height: 24px;
  white-space: nowrap;
`;

export default SignUp3;
