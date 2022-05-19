import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import HeroImageTextDiv from "../HeroImageTextDiv";
import FrequentlyAskedQuestionsContainer from "../FrequentlyAskedQuestionsContainer";
import FooterMasterDiv from "../FooterMasterDiv";
import * as mdc from "material-components-web";
import styled from "styled-components";
import {
  RobotoNormalBlack16px,
  InterNormalWhite30px,
  InterBoldWhite24px,
  RobotoBoldWhite48px,
  RobotoNormalWhite14px,
  InterNormalWhite13px,
  InterBoldWhite15px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./SignUp.css";

function SignUp(props) {
  const {
    signUpPageBackground,
    getStarted1,
    signIn,
    netflixLogo,
    enjoyOnYourTv,
    watchOnSmartTvs,
    willSmithAd,
    group2,
    downloadYourShowsToWatchOffline,
    saveYourFavorites,
    watchEverywhere,
    streamUnlimitedMov,
    group4,
    createProfilesForKids,
    kidsvalueprop1,
    sendKidsOnAdventu,
    frequentlyAskedQuestions,
    readyToWatchEnte,
    getStarted2,
    label,
  } = props;

  useEffect(() => {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-di .mdc-text-field"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="sign-up screen">
        <ContainerContainer>
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
        <OverlapGroup18>
          <ContainerContainer1>
            <EnjoyYourTVContainer>
              <OnContainer>
                <EnjoyOnYourTV>{enjoyOnYourTv}</EnjoyOnYourTV>
                <WatchOnSmartTVs>{watchOnSmartTvs}</WatchOnSmartTVs>
              </OnContainer>
              <WillSmithAd style={{ backgroundImage: `url(${willSmithAd})` }}></WillSmithAd>
            </EnjoyYourTVContainer>
            <DownloadYourShowsContainerDiv>
              <Group2 style={{ backgroundImage: `url(${group2})` }}></Group2>
              <Group15>
                <DownloadYourShowsToWatchOffline>{downloadYourShowsToWatchOffline}</DownloadYourShowsToWatchOffline>
                <SaveYourFavorites>{saveYourFavorites}</SaveYourFavorites>
              </Group15>
            </DownloadYourShowsContainerDiv>
          </ContainerContainer1>
          <OverlapGroup4>
            <OverlapGroup11>
              <Rectangle83></Rectangle83>
              <WatchEverywhereDiv>
                <OverlapGroup>
                  <WatchEverywhere>{watchEverywhere}</WatchEverywhere>
                  <StreamUnlimitedMov>{streamUnlimitedMov}</StreamUnlimitedMov>
                </OverlapGroup>
                <Group4 style={{ backgroundImage: `url(${group4})` }}></Group4>
              </WatchEverywhereDiv>
            </OverlapGroup11>
            <CreateProfilesForKidsContainerDiv>
              <OverlapGroup21>
                <CreateProfilesForKids>{createProfilesForKids}</CreateProfilesForKids>
                <Group11>
                  <KidsValueProp1 src={kidsvalueprop1} />
                  <SendKidsOnAdventu>{sendKidsOnAdventu}</SendKidsOnAdventu>
                </Group11>
              </OverlapGroup21>
            </CreateProfilesForKidsContainerDiv>
          </OverlapGroup4>
        </OverlapGroup18>
        <OverlapGroup19>
          <Indicator></Indicator>
          <OverlapGroup17>
            <FrequentlyAskedQuestionsContainer />
            <OverlapGroup22>
              <Rectangle106></Rectangle106>
              <FrequentlyAskedQuestions>{frequentlyAskedQuestions}</FrequentlyAskedQuestions>
            </OverlapGroup22>
            <EmailAddressGetStarted>
              <OverlapGroup41>
                <Rectangle107></Rectangle107>
                <ReadyToWatchEnte>{readyToWatchEnte}</ReadyToWatchEnte>
              </OverlapGroup41>
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
  height: 585px;
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
  background-color: var(--black);
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

const ContainerContainer1 = styled.div`
  position: absolute;
  width: 1440px;
  height: 293px;
  top: 0;
  left: 0;
`;

const EnjoyYourTVContainer = styled.div`
  position: absolute;
  height: 146px;
  top: 0;
  left: 0;
  display: flex;
  padding: 0 382.2px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1440px;
  background-color: var(--black);
`;

const OnContainer = styled.div`
  width: 303px;
  height: 117px;
  position: relative;
`;

const EnjoyOnYourTV = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite24px}
            position: absolute;
  width: 303px;
  height: 82px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const WatchOnSmartTVs = styled.p`
  ${ValignTextMiddle}
  ${InterNormalWhite13px}
            position: absolute;
  width: 302px;
  height: 47px;
  top: 70px;
  left: 1px;
  letter-spacing: 0;
`;

const WillSmithAd = styled.div`
  width: 287px;
  height: 145px;
  margin-left: 24px;
  margin-top: -0.25px;
  background-color: var(--mist-gray);
  background-size: cover;
  background-position: 50% 50%;
`;

const DownloadYourShowsContainerDiv = styled.div`
  position: absolute;
  height: 148px;
  top: 145px;
  left: 0;
  display: flex;
  padding: 0 380px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1440px;
  background-color: var(--black);
`;

const Group2 = styled.div`
  width: 195px;
  height: 148px;
  margin-top: 0;
  background-color: var(--mist-gray);
  background-size: cover;
  background-position: 50% 50%;
`;

const Group15 = styled.div`
  width: 440px;
  align-self: center;
  margin-left: 39px;
  margin-top: 2.72px;
  display: flex;
  flex-direction: column;
  padding: 0 25.7px;
  align-items: flex-end;
  min-height: 122px;
`;

const DownloadYourShowsToWatchOffline = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite24px}
            width: 350px;
  height: 51px;
  letter-spacing: 0;
`;

const SaveYourFavorites = styled.p`
  ${ValignTextMiddle}
  ${InterNormalWhite13px}
            width: 277px;
  height: 43px;
  align-self: center;
  margin-top: 2px;
  margin-right: 0.58px;
  letter-spacing: 0;
`;

const OverlapGroup4 = styled.div`
  position: absolute;
  width: 1440px;
  height: 291px;
  top: 293px;
  left: 0;
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  width: 1440px;
  height: 146px;
  top: 0;
  left: 0;
`;

const Rectangle83 = styled.div`
  position: absolute;
  width: 1440px;
  height: 146px;
  top: 0;
  left: 0;
  background-color: var(--black);
`;

const WatchEverywhereDiv = styled.div`
  position: absolute;
  height: 146px;
  top: 0;
  left: 385px;
  display: flex;
  padding: 0 0.2px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 673px;
`;

const OverlapGroup = styled.div`
  width: 323px;
  height: 93px;
  position: relative;
  align-self: center;
  margin-bottom: 7.32px;
`;

const WatchEverywhere = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite24px}
            position: absolute;
  width: 323px;
  height: 59px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const StreamUnlimitedMov = styled.p`
  ${ValignTextMiddle}
  ${InterNormalWhite13px}
            position: absolute;
  width: 320px;
  height: 45px;
  top: 48px;
  left: 0;
  letter-spacing: 0;
`;

const Group4 = styled.div`
  width: 233px;
  height: 146px;
  margin-left: 53px;
  margin-top: -0.25px;
  background-color: var(--mist-gray);
  background-size: cover;
  background-position: 50% 50%;
`;

const CreateProfilesForKidsContainerDiv = styled.div`
  position: absolute;
  height: 146px;
  top: 146px;
  left: 0;
  display: flex;
  padding: 0 380px;
  justify-content: flex-end;
  align-items: flex-end;
  min-width: 1440px;
  background-color: var(--black);
`;

const OverlapGroup21 = styled.div`
  width: 674px;
  height: 145px;
  position: relative;
  margin-bottom: 0;
`;

const CreateProfilesForKids = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite24px}
            position: absolute;
  width: 350px;
  height: 55px;
  top: 26px;
  left: 302px;
  letter-spacing: 0;
`;

const Group11 = styled.div`
  position: absolute;
  height: 145px;
  top: 0;
  left: 0;
  display: flex;
  align-items: flex-start;
  min-width: 674px;
`;

const KidsValueProp1 = styled.img`
  width: 302px;
  height: 145px;
  margin-top: -0.25px;
  object-fit: cover;
`;

const SendKidsOnAdventu = styled.p`
  ${ValignTextMiddle}
  ${InterNormalWhite13px}
            width: 346px;
  height: 43px;
  align-self: center;
  margin-top: 40.58px;
  letter-spacing: 0;
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

const OverlapGroup22 = styled.div`
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

const OverlapGroup41 = styled.div`
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

export default SignUp;
