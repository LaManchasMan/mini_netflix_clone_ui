import React from "react";
import styled from "styled-components";
import { InterBoldWhite64px, InterNormalWhite20px, ValignTextMiddle, InterNormalWhite32px } from "../../styledMixins";


function HeroImageTextDiv() {
  return (
    <HeroImageTextDiv1>
      <Title>Unlimited movies, TV shows, and more.</Title>
      <WatchContainer>
        <WatchAnywhereCancelAnytime>Watch anywhere. Cancel anytime.</WatchAnywhereCancelAnytime>
        <ReadyToWatchEnte>Ready to watch? Enter your email to create or restart your memebership.</ReadyToWatchEnte>
      </WatchContainer>
    </HeroImageTextDiv1>
  );
}

const HeroImageTextDiv1 = styled.div`
  width: 888px;
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  padding: 28px 65px;
  align-items: flex-start;
  min-height: 301px;
`;

const Title = styled.h1`
  ${ValignTextMiddle}
  ${InterBoldWhite64px}
            width: 752px;
  height: 129px;
  margin-top: 8px;
  text-shadow: 0px 4px 4px #00000040;
  text-align: center;
  letter-spacing: 0;
`;

const WatchContainer = styled.div`
  width: 674px;
  height: 108px;
  position: relative;
  align-self: center;
  margin-right: 2px;
`;

const WatchAnywhereCancelAnytime = styled.div`
  ${ValignTextMiddle}
  ${InterNormalWhite32px}
            position: absolute;
  width: 674px;
  height: 65px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const ReadyToWatchEnte = styled.div`
  ${ValignTextMiddle}
  ${InterNormalWhite20px}
            position: absolute;
  width: 674px;
  height: 44px;
  top: 64px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const HeroImageTextDiv2 = styled.div`
  width: 888px;
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  padding: 28px 65px;
  align-items: flex-start;
  min-height: 301px;
`;

const UnlimitedMoviesTVShowsAndMore = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite64px}
            width: 752px;
  height: 129px;
  margin-top: 8px;
  text-shadow: 0px 4px 4px #00000040;
  text-align: center;
  letter-spacing: 0;
`;

const WatchContainer1 = styled.div`
  width: 674px;
  height: 108px;
  position: relative;
  align-self: center;
  margin-right: 2px;
`;

const WatchAnywhereCancelAnytime1 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalWhite32px}
            position: absolute;
  width: 674px;
  height: 65px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const ReadyToWatchEnte1 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalWhite20px}
            position: absolute;
  width: 674px;
  height: 44px;
  top: 64px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const HeroImageTextDiv3 = styled.div`
  width: 888px;
  margin-left: 6px;
  display: flex;
  flex-direction: column;
  padding: 28px 65px;
  align-items: flex-start;
  min-height: 301px;
`;

const UnlimitedMoviesTVShowsAndMore1 = styled.div`
  ${ValignTextMiddle}
  ${InterBoldWhite64px}
            width: 752px;
  height: 129px;
  margin-top: 8px;
  text-shadow: 0px 4px 4px #00000040;
  text-align: center;
  letter-spacing: 0;
`;

const WatchContainer2 = styled.div`
  width: 674px;
  height: 108px;
  position: relative;
  align-self: center;
  margin-right: 2px;
`;

const WatchAnywhereCancelAnytime2 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalWhite32px}
            position: absolute;
  width: 674px;
  height: 65px;
  top: 0;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

const ReadyToWatchEnte2 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalWhite20px}
            position: absolute;
  width: 674px;
  height: 44px;
  top: 64px;
  left: 0;
  text-align: center;
  letter-spacing: 0;
`;

export default HeroImageTextDiv;
