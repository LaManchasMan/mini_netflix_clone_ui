import React from "react";
import styled from "styled-components";
import { InterNormalWhite13px, InterBoldWhite24px, ValignTextMiddle } from "../../styledMixins";


function MediaMasterContainer() {
  return (
    <MediaMasterContainer1>
      <ContainerContainer>
        <EnjoyYourTVContainer>
          <OnContainer>
            <EnjoyOnYourTV>Enjoy on your TV.</EnjoyOnYourTV>
            <WatchOnSmartTVs>
              Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.
            </WatchOnSmartTVs>
          </OnContainer>
          <WillSmithAd></WillSmithAd>
        </EnjoyYourTVContainer>
        <DownloadYourShowsContainerDiv>
          <Group2></Group2>
          <Group15>
            <DownloadYourShowsToWatchOffline>Download your shows to watch offline.</DownloadYourShowsToWatchOffline>
            <SaveYourFavorites>Save your favorites easily and always have something to watch.</SaveYourFavorites>
          </Group15>
        </DownloadYourShowsContainerDiv>
      </ContainerContainer>
      <OverlapGroup3>
        <OverlapGroup1>
          <Rectangle83></Rectangle83>
          <WatchEverywhereDiv>
            <OverlapGroup>
              <WatchEverywhere>Watch everywhere.</WatchEverywhere>
              <StreamUnlimitedMov>
                Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.
              </StreamUnlimitedMov>
            </OverlapGroup>
            <Group4></Group4>
          </WatchEverywhereDiv>
        </OverlapGroup1>
        <CreateProfilesForKidsContainerDiv>
          <OverlapGroup2>
            <CreateProfilesForKids>Create profiles for kids.</CreateProfilesForKids>
            <Group11>
              <KidsValueProp1 src="/img/kidsvalueprop-1@2x.png" />
              <SendKidsOnAdventu>
                Send kids on adventures with their favorite characters in a space made just for them- free with your
                membership.
              </SendKidsOnAdventu>
            </Group11>
          </OverlapGroup2>
        </CreateProfilesForKidsContainerDiv>
      </OverlapGroup3>
    </MediaMasterContainer1>
  );
}

const MediaMasterContainer1 = styled.div`
  position: absolute;
  width: 1440px;
  top: 583px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 586px;
`;

const ContainerContainer = styled.div`
  width: 1440px;
  height: 294px;
  position: relative;
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
  background-color: var(--mist-gray);
  background-image: url(/img/screen-shot-2022-05-17-at-2-18-1@2x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const DownloadYourShowsContainerDiv = styled.div`
  position: absolute;
  height: 149px;
  top: 145px;
  left: 0;
  display: flex;
  padding: 0 380px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--black);
`;

const Group2 = styled.div`
  width: 195px;
  height: 149px;
  background-color: var(--mist-gray);
  background-image: url(/img/screen-shot-2022-05-17-at-2-25-1@2x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Group15 = styled.div`
  width: 440px;
  margin-left: 39px;
  margin-top: 2.73px;
  display: flex;
  flex-direction: column;
  padding: 0 25.7px;
  align-items: flex-end;
  min-height: 123px;
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

const OverlapGroup3 = styled.div`
  width: 1440px;
  height: 292px;
  position: relative;
`;

const OverlapGroup1 = styled.div`
  position: absolute;
  width: 1440px;
  height: 147px;
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
  height: 147px;
  top: 0;
  left: 385px;
  display: flex;
  padding: 0 0.2px;
  justify-content: flex-end;
  align-items: center;
  min-width: 673px;
`;

const OverlapGroup = styled.div`
  width: 323px;
  height: 93px;
  position: relative;
  margin-bottom: 7.35px;
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
  height: 147px;
  margin-left: 53px;
  background-color: var(--mist-gray);
  background-image: url(/img/screen-shot-2022-05-17-at-2-38-1@2x.png);
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

const OverlapGroup2 = styled.div`
  width: 674px;
  height: 145px;
  position: relative;
`;

const CreateProfilesForKids = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite24px}
            position: absolute;
  width: 350px;
  height: 56px;
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
  align-items: center;
  min-width: 674px;
`;

const KidsValueProp1 = styled.img`
  width: 302px;
  height: 145px;
  object-fit: cover;
`;

const SendKidsOnAdventu = styled.p`
  ${ValignTextMiddle}
  ${InterNormalWhite13px}
            width: 346px;
  height: 43px;
  margin-top: 40.72px;
  letter-spacing: 0;
`;

const MediaMasterContainer2 = styled.div`
  position: absolute;
  width: 1440px;
  top: 583px;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 586px;
`;

const ContainerContainer1 = styled.div`
  width: 1440px;
  height: 294px;
  position: relative;
`;

const EnjoyYourTVContainer1 = styled.div`
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

const OnContainer1 = styled.div`
  width: 303px;
  height: 117px;
  position: relative;
`;

const EnjoyOnYourTV1 = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite24px}
            position: absolute;
  width: 303px;
  height: 82px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const WatchOnSmartTVs1 = styled.p`
  ${ValignTextMiddle}
  ${InterNormalWhite13px}
            position: absolute;
  width: 302px;
  height: 47px;
  top: 70px;
  left: 1px;
  letter-spacing: 0;
`;

const WillSmithAd1 = styled.div`
  width: 287px;
  height: 145px;
  margin-left: 24px;
  background-color: var(--mist-gray);
  background-image: url(/img/screen-shot-2022-05-17-at-2-18-1@2x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const DownloadYourShowsContainerDiv1 = styled.div`
  position: absolute;
  height: 149px;
  top: 145px;
  left: 0;
  display: flex;
  padding: 0 380px;
  justify-content: flex-end;
  align-items: center;
  min-width: 1440px;
  background-color: var(--black);
`;

const Group21 = styled.div`
  width: 195px;
  height: 149px;
  background-color: var(--mist-gray);
  background-image: url(/img/screen-shot-2022-05-17-at-2-25-1@2x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const Group151 = styled.div`
  width: 440px;
  margin-left: 39px;
  margin-top: 2.73px;
  display: flex;
  flex-direction: column;
  padding: 0 25.7px;
  align-items: flex-end;
  min-height: 123px;
`;

const DownloadYourShowsToWatchOffline1 = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite24px}
            width: 350px;
  height: 51px;
  letter-spacing: 0;
`;

const SaveYourFavorites1 = styled.p`
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
  width: 1440px;
  height: 292px;
  position: relative;
`;

const OverlapGroup11 = styled.div`
  position: absolute;
  width: 1440px;
  height: 147px;
  top: 0;
  left: 0;
`;

const Rectangle831 = styled.div`
  position: absolute;
  width: 1440px;
  height: 146px;
  top: 0;
  left: 0;
  background-color: var(--black);
`;

const WatchEverywhereDiv1 = styled.div`
  position: absolute;
  height: 147px;
  top: 0;
  left: 385px;
  display: flex;
  padding: 0 0.2px;
  justify-content: flex-end;
  align-items: center;
  min-width: 673px;
`;

const OverlapGroup5 = styled.div`
  width: 323px;
  height: 93px;
  position: relative;
  margin-bottom: 7.35px;
`;

const WatchEverywhere1 = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite24px}
            position: absolute;
  width: 323px;
  height: 59px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const StreamUnlimitedMov1 = styled.p`
  ${ValignTextMiddle}
  ${InterNormalWhite13px}
            position: absolute;
  width: 320px;
  height: 45px;
  top: 48px;
  left: 0;
  letter-spacing: 0;
`;

const Group41 = styled.div`
  width: 233px;
  height: 147px;
  margin-left: 53px;
  background-color: var(--mist-gray);
  background-image: url(/img/screen-shot-2022-05-17-at-2-38-1@2x.png);
  background-size: cover;
  background-position: 50% 50%;
`;

const CreateProfilesForKidsContainerDiv1 = styled.div`
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
`;

const CreateProfilesForKids1 = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite24px}
            position: absolute;
  width: 350px;
  height: 56px;
  top: 26px;
  left: 302px;
  letter-spacing: 0;
`;

const Group111 = styled.div`
  position: absolute;
  height: 145px;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  min-width: 674px;
`;

const KidsValueProp11 = styled.img`
  width: 302px;
  height: 145px;
  object-fit: cover;
`;

const SendKidsOnAdventu1 = styled.p`
  ${ValignTextMiddle}
  ${InterNormalWhite13px}
            width: 346px;
  height: 43px;
  margin-top: 40.72px;
  letter-spacing: 0;
`;

export default MediaMasterContainer;
