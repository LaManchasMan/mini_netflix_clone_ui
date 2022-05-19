import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as mdc from "material-components-web";
import styled from "styled-components";
import {
  RobotoNormalWhite10px,
  RobotoNormalGray10px,
  InterNormalGray16px,
  InterNormalWhite16px,
  RobotoNormalWhite18px,
  InterNormalGray14px,
  RobotoNormalGray16px,
  RobotoNormalWhite15px,
  ValignTextBottom,
  RobotoNormalGray15px,
  ValignTextMiddle,
} from "../../styledMixins";
import "./ContentPage.css";

function ContentPage(props) {
  const {
    place1,
    kisspngNetflixStreamingMediaTelevis1,
    tvShows1,
    movies1,
    myList1,
    recentlyAdded1,
    kisspngNetflixStreamingMediaTelevis2,
    place2,
    kisspngNetflixStreamingMediaTelevis3,
    tvShows2,
    movies2,
    myList2,
    recentlyAdded2,
    houseofcardsFoto1,
    pngwing1,
    x91Match,
    number1,
    address,
    shesGotThePower,
    episodes,
    castRobinWright,
    generasPoliticalT,
    thisShowIsCerebralDark1,
    screenShot20220519At10132,
    whenTheNewlyElect,
    episode1,
    number2,
    x56M,
    screenShot20220519At10133,
    screenShot20220519At10391,
    name1,
    episode2,
    number3,
    x49M1,
    screenShot20220519At10401,
    name2,
    episode3,
    number4,
    x51M1,
    screenShot20220519At10411,
    name3,
    episode4,
    number5,
    x49M2,
    screenShot20220519At10421,
    franksFightOverT,
    episode5,
    number6,
    x52M1,
    screenShot20220519At10138,
    screenShot20220519At10422,
    name4,
    episode6,
    number7,
    x50M,
    screenShot20220519At10423,
    name5,
    episode7,
    number8,
    x54M,
    screenShot20220519At10431,
    name6,
    episode8,
    number9,
    x47M,
    screenShot20220519At10432,
    surname1,
    episode9,
    number10,
    x51M2,
    screenShot20220519At10433,
    rebellionOnAllFon,
    episode10,
    number11,
    x52M2,
    screenShot20220519At12081,
    number12,
    pennBadgleyGossi1,
    screenShot20220519At12091,
    number13,
    pennBadgleyGossi2,
    screenShot20220519At12101,
    number14,
    pennBadgleyGossi3,
    screenShot20220519At12111,
    number15,
    pennBadgleyGossi4,
    screenShot20220519At12112,
    number16,
    pennBadgleyGossi5,
    screenShot20220519At12121,
    number17,
    pennBadgleyGossi6,
    screenShot20220519At2351,
    surname2,
    screenShot20220519At2352,
    surname3,
    screenShot20220519At2361,
    season6TeaserTheEnd,
    screenShot20220519At2362,
    season6TeaserMyHouse,
    screenShot20220519At2363,
    surname4,
    screenShot20220519At2371,
    surname5,
    aboutHouseOfCards,
    castKevinSpacey,
    genresPoliticalTv,
    thisShowIsCerebralDark2,
    maturityRatingLan,
  } = props;

  useEffect(() => {
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis .mdc-select"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <div className="content-page screen">
        <OverlapGroup7>
          <Rectangle20></Rectangle20>
          <NavBar></NavBar>
          <NavBarLogoBox></NavBarLogoBox>
          <NavBarHome></NavBarHome>
          <Link to="/sign-up">
            <Place>{place1}</Place>
          </Link>
          <Link to="/login">
            <KisspngNetflixStreamingMediaTelevis src={kisspngNetflixStreamingMediaTelevis1} />
          </Link>
          <NavBarTVShows></NavBarTVShows>
          <Link to="/sign-up">
            <TVShows>{tvShows1}</TVShows>
          </Link>
          <NavBarMovies></NavBarMovies>
          <Link to="/sign-up">
            <Movies>{movies1}</Movies>
          </Link>
          <NavBarMyList></NavBarMyList>
          <Link to="/login">
            <MyList>{myList1}</MyList>
          </Link>
          <NavBarRecentlyAdded></NavBarRecentlyAdded>
          <Link to="/login">
            <RecentlyAdded>{recentlyAdded1}</RecentlyAdded>
          </Link>
          <Rectangle49></Rectangle49>
          <Rectangle50></Rectangle50>
          <Link to="/login">
            <KisspngNetflixStreamingMediaTelevis1 src={kisspngNetflixStreamingMediaTelevis2} />
          </Link>
          <Rectangle51></Rectangle51>
          <Rectangle52></Rectangle52>
          <Rectangle53></Rectangle53>
          <Rectangle54></Rectangle54>
          <NavBarLogoBox></NavBarLogoBox>
          <NavBarHome></NavBarHome>
          <Link to="/sign-up">
            <Place>{place2}</Place>
          </Link>
          <Link to="/login">
            <KisspngNetflixStreamingMediaTelevis src={kisspngNetflixStreamingMediaTelevis3} />
          </Link>
          <NavBarTVShows></NavBarTVShows>
          <Link to="/sign-up">
            <TVShows>{tvShows2}</TVShows>
          </Link>
          <NavBarMovies></NavBarMovies>
          <Link to="/sign-up">
            <Movies>{movies2}</Movies>
          </Link>
          <NavBarMyList></NavBarMyList>
          <Link to="/login">
            <MyList>{myList2}</MyList>
          </Link>
          <NavBarRecentlyAdded></NavBarRecentlyAdded>
          <Link to="/login">
            <RecentlyAdded>{recentlyAdded2}</RecentlyAdded>
          </Link>
        </OverlapGroup7>
        <OverlapGroup15>
          <Rectangle15></Rectangle15>
          <HouseofcardsFoto1 className="animate-enter1" src={houseofcardsFoto1} />
          <Pngwing1 src={pngwing1} />
          <Rectangle130></Rectangle130>
          <Ellipse1></Ellipse1>
          <Ellipse2></Ellipse2>
          <Ellipse3></Ellipse3>
        </OverlapGroup15>
        <OverlapGroup3>
          <OverlapGroupContainer>
            <OverlapGroup26>
              <Rectangle242></Rectangle242>
              <Rectangle246></Rectangle246>
              <X91Match>{x91Match}</X91Match>
              <Rectangle247></Rectangle247>
              <Number>{number1}</Number>
              <Rectangle248></Rectangle248>
              <Address>{address}</Address>
            </OverlapGroup26>
            <OverlapGroup24>
              <Rectangle243></Rectangle243>
              <ShesGotThePower>{shesGotThePower}</ShesGotThePower>
              <Rectangle249></Rectangle249>
              <Episodes>{episodes}</Episodes>
            </OverlapGroup24>
          </OverlapGroupContainer>
          <OverlapGroup25>
            <div className="drop-down-filled-dis">
              <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
                <div
                  className="mdc-select__anchor custom-enhanced-select-width"
                  role="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                >
                  <span className="mdc-select__ripple"></span>{" "}
                  <span id="demo-label" className="mdc-floating-label">
                    Season 1
                  </span>
                  <span className="mdc-select__selected-text-container">
                    <span id="demo-selected-text" className="mdc-select__selected-text"></span>
                  </span>
                  <span className="mdc-select__dropdown-icon">
                    <span className="mdc-select__dropdown-icon-inactive material-icons">arrow_drop_down</span>
                    <span className="mdc-select__dropdown-icon-active material-icons">arrow_drop_up</span>
                  </span>
                  <span className="mdc-line-ripple"></span>
                </div>
                <div className="mdc-select__menu mdc-menu mdc-menu-surface mdc-menu-surface--fullwidth">
                  <ul className="mdc-list" id="select_dropdown" role="listbox" aria-label="listbox">
                    <li className="mdc-list-item " data-value="Season 1" role="option">
                      <span className="mdc-list-item__ripple"></span>{" "}
                      <span className="mdc-list-item__text">Season 1</span>
                    </li>
                    <li className="mdc-list-item " data-value="Season 2" role="option">
                      <span className="mdc-list-item__ripple"></span>{" "}
                      <span className="mdc-list-item__text">Season 2</span>
                    </li>
                    <li className="mdc-list-item " data-value="Season 3" role="option">
                      <span className="mdc-list-item__ripple"></span>{" "}
                      <span className="mdc-list-item__text">Season 3</span>
                    </li>
                    <li className="mdc-list-item " data-value="Season 4" role="option">
                      <span className="mdc-list-item__ripple"></span>{" "}
                      <span className="mdc-list-item__text">Season 4</span>
                    </li>
                    <li className="mdc-list-item " data-value="Season 5" role="option">
                      <span className="mdc-list-item__ripple"></span>{" "}
                      <span className="mdc-list-item__text">Season 5</span>
                    </li>
                    <li className="mdc-list-item " data-value="Season 6" role="option">
                      <span className="mdc-list-item__ripple"></span>{" "}
                      <span className="mdc-list-item__text">Season 6</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <Rectangle144></Rectangle144>
            <Rectangle244></Rectangle244>
            <CastRobinWright>{castRobinWright}</CastRobinWright>
            <GenerasPoliticalT>{generasPoliticalT}</GenerasPoliticalT>
            <ThisShowIsCerebralDark>{thisShowIsCerebralDark1}</ThisShowIsCerebralDark>
          </OverlapGroup25>
        </OverlapGroup3>
        <OverlapGroup1>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle149></Rectangle149>
          <ScreenShot20220519At10132 src={screenShot20220519At10132} />
          <Rectangle150></Rectangle150>
          <Rectangle151></Rectangle151>
          <Rectangle152></Rectangle152>
          <Rectangle153></Rectangle153>
          <WhenTheNewlyElect>{whenTheNewlyElect}</WhenTheNewlyElect>
          <Episode1>{episode1}</Episode1>
          <Number1>{number2}</Number1>
          <X56m>{x56M}</X56m>
        </OverlapGroup1>
        <OverlapGroup1>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle149></Rectangle149>
          <ScreenShot20220519At10132 src={screenShot20220519At10133} />
          <Rectangle150></Rectangle150>
          <Rectangle151></Rectangle151>
          <Rectangle152></Rectangle152>
          <Rectangle153></Rectangle153>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle149></Rectangle149>
          <Rectangle150></Rectangle150>
          <Rectangle151></Rectangle151>
          <Rectangle152></Rectangle152>
          <Rectangle153></Rectangle153>
          <ScreenShot20220519At10132 src={screenShot20220519At10391} />
          <WhenTheNewlyElect>{name1}</WhenTheNewlyElect>
          <Episode1>{episode2}</Episode1>
          <Number1>{number3}</Number1>
          <X56m>{x49M1}</X56m>
        </OverlapGroup1>
        <OverlapGroup1>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle149></Rectangle149>
          <ScreenShot20220519At10132 src={screenShot20220519At10401} />
          <Rectangle150></Rectangle150>
          <Rectangle151></Rectangle151>
          <Rectangle152></Rectangle152>
          <Rectangle153></Rectangle153>
          <Name>{name2}</Name>
          <Episode1>{episode3}</Episode1>
          <Number1>{number4}</Number1>
          <X56m>{x51M1}</X56m>
        </OverlapGroup1>
        <OverlapGroup1>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle149></Rectangle149>
          <ScreenShot20220519At10132 src={screenShot20220519At10411} />
          <Rectangle150></Rectangle150>
          <Rectangle151></Rectangle151>
          <Rectangle152></Rectangle152>
          <Rectangle153></Rectangle153>
          <Name1>{name3}</Name1>
          <Episode1>{episode4}</Episode1>
          <Number1>{number5}</Number1>
          <X56m>{x49M2}</X56m>
        </OverlapGroup1>
        <OverlapGroup1>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle149></Rectangle149>
          <ScreenShot20220519At10132 src={screenShot20220519At10421} />
          <Rectangle150></Rectangle150>
          <Rectangle151></Rectangle151>
          <Rectangle152></Rectangle152>
          <Rectangle153></Rectangle153>
          <FranksFightOverT>{franksFightOverT}</FranksFightOverT>
          <Episode1>{episode5}</Episode1>
          <Number1>{number6}</Number1>
          <X56m>{x52M1}</X56m>
        </OverlapGroup1>
        <OverlapGroup1>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle149></Rectangle149>
          <ScreenShot20220519At10132 src={screenShot20220519At10138} />
          <Rectangle150></Rectangle150>
          <Rectangle151></Rectangle151>
          <Rectangle152></Rectangle152>
          <Rectangle153></Rectangle153>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle149></Rectangle149>
          <ScreenShot20220519At10132 src={screenShot20220519At10422} />
          <Rectangle150></Rectangle150>
          <Rectangle151></Rectangle151>
          <Rectangle152></Rectangle152>
          <Rectangle153></Rectangle153>
          <Name2>{name4}</Name2>
          <Episode1>{episode6}</Episode1>
          <Number1>{number7}</Number1>
          <X56m>{x50M}</X56m>
        </OverlapGroup1>
        <OverlapGroup1>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle149></Rectangle149>
          <ScreenShot20220519At10132 src={screenShot20220519At10423} />
          <Rectangle150></Rectangle150>
          <Rectangle150></Rectangle150>
          <Rectangle151></Rectangle151>
          <Rectangle152></Rectangle152>
          <Rectangle153></Rectangle153>
          <FranksFightOverT>{name5}</FranksFightOverT>
          <Episode1>{episode7}</Episode1>
          <Number1>{number8}</Number1>
          <X56m>{x54M}</X56m>
        </OverlapGroup1>
        <OverlapGroup1>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle149></Rectangle149>
          <ScreenShot20220519At10132 src={screenShot20220519At10431} />
          <Rectangle150></Rectangle150>
          <Rectangle151></Rectangle151>
          <Rectangle152></Rectangle152>
          <Rectangle153></Rectangle153>
          <Name3>{name6}</Name3>
          <Episode1>{episode8}</Episode1>
          <Number1>{number9}</Number1>
          <X56m>{x47M}</X56m>
        </OverlapGroup1>
        <OverlapGroup1>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle149></Rectangle149>
          <ScreenShot20220519At10132 src={screenShot20220519At10432} />
          <Rectangle150></Rectangle150>
          <Rectangle151></Rectangle151>
          <Rectangle152></Rectangle152>
          <Rectangle153></Rectangle153>
          <Name1>{surname1}</Name1>
          <Episode1>{episode9}</Episode1>
          <Number1>{number10}</Number1>
          <X56m>{x51M2}</X56m>
        </OverlapGroup1>
        <OverlapGroup1>
          <Rectangle137></Rectangle137>
          <Rectangle137></Rectangle137>
          <Rectangle149></Rectangle149>
          <ScreenShot20220519At10132 src={screenShot20220519At10433} />
          <Rectangle150></Rectangle150>
          <Rectangle151></Rectangle151>
          <Rectangle152></Rectangle152>
          <Rectangle153></Rectangle153>
          <RebellionOnAllFon>{rebellionOnAllFon}</RebellionOnAllFon>
          <Episode1>{episode10}</Episode1>
          <Number1>{number11}</Number1>
          <X56m>{x52M2}</X56m>
        </OverlapGroup1>
        <OverlapGroupContainer1>
          <OverlapGroup31>
            <Rectangle250></Rectangle250>
            <Rectangle256></Rectangle256>
            <ScreenShot20220519At12081 src={screenShot20220519At12081} />
            <Rectangle274></Rectangle274>
            <Ellipse9></Ellipse9>
            <Number2>{number12}</Number2>
            <PennBadgleyGossi>{pennBadgleyGossi1}</PennBadgleyGossi>
          </OverlapGroup31>
          <OverlapGroup32>
            <Rectangle251></Rectangle251>
            <Rectangle257></Rectangle257>
            <ScreenShot20220519At12091 src={screenShot20220519At12091} />
            <Rectangle278></Rectangle278>
            <Ellipse8></Ellipse8>
            <Number3>{number13}</Number3>
            <PennBadgleyGossi1>{pennBadgleyGossi2}</PennBadgleyGossi1>
          </OverlapGroup32>
          <OverlapGroup27>
            <Rectangle251></Rectangle251>
            <Rectangle257></Rectangle257>
            <ScreenShot20220519At12091 src={screenShot20220519At12101} />
            <Rectangle278></Rectangle278>
            <Ellipse8></Ellipse8>
            <Number3>{number14}</Number3>
            <PennBadgleyGossi1>{pennBadgleyGossi3}</PennBadgleyGossi1>
          </OverlapGroup27>
          <OverlapGroup28>
            <Rectangle253></Rectangle253>
            <Rectangle259></Rectangle259>
            <ScreenShot20220519At12111 src={screenShot20220519At12111} />
            <Rectangle276></Rectangle276>
            <Ellipse6></Ellipse6>
            <Number3>{number15}</Number3>
            <PennBadgleyGossi2>{pennBadgleyGossi4}</PennBadgleyGossi2>
          </OverlapGroup28>
          <OverlapGroup29>
            <Rectangle250></Rectangle250>
            <Rectangle256></Rectangle256>
            <ScreenShot20220519At12112 src={screenShot20220519At12112} />
            <Rectangle275></Rectangle275>
            <Ellipse9></Ellipse9>
            <Number3>{number16}</Number3>
            <PennBadgleyGossi2>{pennBadgleyGossi5}</PennBadgleyGossi2>
          </OverlapGroup29>
          <OverlapGroup27>
            <Rectangle251></Rectangle251>
            <Rectangle257></Rectangle257>
            <ScreenShot20220519At12121 src={screenShot20220519At12121} />
            <Rectangle278></Rectangle278>
            <Ellipse8></Ellipse8>
            <Number3>{number17}</Number3>
            <PennBadgleyGossi3>{pennBadgleyGossi6}</PennBadgleyGossi3>
          </OverlapGroup27>
        </OverlapGroupContainer1>
        <OverlapGroupContainer2>
          <OverlapGroup20>
            <Rectangle262></Rectangle262>
            <ScreenShot20220519At2351 src={screenShot20220519At2351} />
            <Rectangle268></Rectangle268>
            <Surname>{surname2}</Surname>
          </OverlapGroup20>
          <OverlapGroup21>
            <Rectangle262></Rectangle262>
            <ScreenShot20220519At2352 src={screenShot20220519At2352} />
            <Rectangle268></Rectangle268>
            <Surname1>{surname3}</Surname1>
          </OverlapGroup21>
          <OverlapGroup21>
            <Rectangle262></Rectangle262>
            <ScreenShot20220519At2352 src={screenShot20220519At2361} />
            <Rectangle268></Rectangle268>
            <Season6TeaserTheEnd>{season6TeaserTheEnd}</Season6TeaserTheEnd>
          </OverlapGroup21>
          <OverlapGroup21>
            <Rectangle262></Rectangle262>
            <ScreenShot20220519At2352 src={screenShot20220519At2362} />
            <Rectangle268></Rectangle268>
            <Season6TeaserTheEnd>{season6TeaserMyHouse}</Season6TeaserTheEnd>
          </OverlapGroup21>
          <OverlapGroup21>
            <Rectangle262></Rectangle262>
            <ScreenShot20220519At2352 src={screenShot20220519At2363} />
            <Rectangle268></Rectangle268>
            <Surname2>{surname4}</Surname2>
          </OverlapGroup21>
          <OverlapGroup21>
            <Rectangle262></Rectangle262>
            <ScreenShot20220519At2352 src={screenShot20220519At2371} />
            <Rectangle268></Rectangle268>
            <Surname1>{surname5}</Surname1>
          </OverlapGroup21>
        </OverlapGroupContainer2>
        <OverlapGroupContainer3>
          <OverlapGroup23>
            <Rectangle280></Rectangle280>
            <AboutHouseOfCards>{aboutHouseOfCards}</AboutHouseOfCards>
          </OverlapGroup23>
          <OverlapGroup22>
            <Rectangle281></Rectangle281>
            <CastKevinSpacey>{castKevinSpacey}</CastKevinSpacey>
            <GenresPoliticalTV>{genresPoliticalTv}</GenresPoliticalTV>
            <ThisShowIsCerebralDark1>{thisShowIsCerebralDark2}</ThisShowIsCerebralDark1>
            <MaturityRatingLan>{maturityRatingLan}</MaturityRatingLan>
          </OverlapGroup22>
        </OverlapGroupContainer3>
      </div>
    </div>
  );
}

const OverlapGroup7 = styled.div`
  width: 1440px;
  height: 54px;
  position: relative;
  margin-top: -1px;
`;

const Rectangle20 = styled.div`
  position: absolute;
  width: 1440px;
  height: 53px;
  top: 1px;
  left: 0;
  background-color: var(--black);
`;

const NavBar = styled.div`
  position: absolute;
  width: 1429px;
  height: 51px;
  top: 1px;
  left: 11px;
  background-color: var(--black);
`;

const NavBarLogoBox = styled.div`
  position: absolute;
  width: 218px;
  height: 51px;
  top: 1px;
  left: 11px;
  background-color: var(--black);
`;

const NavBarHome = styled.div`
  position: absolute;
  width: 116px;
  height: 51px;
  top: 1px;
  left: 222px;
  background-color: var(--black);
  transition: all 0.2s ease;
  cursor: pointer;
`;

const Place = styled.div`
  ${ValignTextMiddle}
  ${InterNormalGray16px}
            position: absolute;
  width: 116px;
  height: 51px;
  top: 0;
  left: 222px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const KisspngNetflixStreamingMediaTelevis = styled.img`
  position: absolute;
  width: 129px;
  height: 36px;
  top: 9px;
  left: 56px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavBarTVShows = styled.div`
  position: absolute;
  width: 117px;
  height: 51px;
  top: 1px;
  left: 338px;
  background-color: var(--black);
  transition: all 0.2s ease;
  cursor: pointer;
`;

const TVShows = styled.div`
  ${ValignTextMiddle}
  ${InterNormalGray16px}
            position: absolute;
  width: 117px;
  height: 51px;
  top: 0;
  left: 338px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavBarMovies = styled.div`
  position: absolute;
  width: 109px;
  height: 51px;
  top: 1px;
  left: 448px;
  background-color: var(--black);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

const Movies = styled.div`
  ${ValignTextMiddle}
  ${InterNormalGray16px}
            position: absolute;
  width: 109px;
  height: 51px;
  top: 0;
  left: 448px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavBarMyList = styled.div`
  position: absolute;
  width: 109px;
  height: 51px;
  top: 1px;
  left: 666px;
  background-color: var(--black);
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #fff;
  }
`;

const MyList = styled.div`
  ${ValignTextMiddle}
  ${InterNormalGray16px}
            position: absolute;
  width: 109px;
  height: 51px;
  top: 0;
  left: 666px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const NavBarRecentlyAdded = styled.div`
  position: absolute;
  width: 109px;
  height: 51px;
  top: 1px;
  left: 557px;
  background-color: var(--black);
`;

const RecentlyAdded = styled.div`
  ${ValignTextMiddle}
  ${InterNormalGray16px}
            position: absolute;
  width: 120px;
  height: 38px;
  top: 16px;
  left: 552px;
  transition: all 0.2s ease;
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Rectangle49 = styled.div`
  position: absolute;
  width: 220px;
  height: 53px;
  top: 1px;
  left: 0;
  background-color: var(--black);
`;

const Rectangle50 = styled.div`
  position: absolute;
  width: 110px;
  height: 53px;
  top: 1px;
  left: 220px;
  background-color: var(--black);
`;

const KisspngNetflixStreamingMediaTelevis1 = styled.img`
  position: absolute;
  width: 178px;
  height: 44px;
  top: 6px;
  left: 17px;
  object-fit: cover;
  cursor: pointer;
`;

const Rectangle51 = styled.div`
  position: absolute;
  width: 110px;
  height: 53px;
  top: 1px;
  left: 330px;
  background-color: var(--black);
`;

const Rectangle52 = styled.div`
  position: absolute;
  width: 110px;
  height: 53px;
  top: 1px;
  left: 440px;
  background-color: var(--black);
`;

const Rectangle53 = styled.div`
  position: absolute;
  width: 110px;
  height: 53px;
  top: 1px;
  left: 550px;
  background-color: var(--black);
`;

const Rectangle54 = styled.div`
  position: absolute;
  width: 110px;
  height: 53px;
  top: 1px;
  left: 660px;
  background-color: var(--black);
`;

const OverlapGroup15 = styled.div`
  width: 1440px;
  height: 355px;
  position: relative;
`;

const Rectangle15 = styled.div`
  position: absolute;
  width: 1440px;
  height: 336px;
  top: 0;
  left: 0;
  background-color: var(--mist-gray);
`;

const HouseofcardsFoto1 = styled.img`
  position: absolute;
  width: 1440px;
  height: 355px;
  top: 0;
  left: 0;
  display: block;
  opacity: 0;

  &.animate-enter1 {
    display: block;
    animation: animate-enter1-frames 0.6s ease-in-out 0s 1 normal forwards;
    opacity: 0;
  }
`;

const Pngwing1 = styled.img`
  position: absolute;
  width: 333px;
  height: 68px;
  top: 206px;
  left: 83px;
`;

const Rectangle130 = styled.div`
  position: absolute;
  width: 150px;
  height: 34px;
  top: 282px;
  left: 83px;
  background-color: var(--mist-gray);
`;

const Ellipse1 = styled.div`
  position: absolute;
  width: 40px;
  height: 34px;
  top: 282px;
  left: 250px;
  background-color: var(--mist-gray);
  border-radius: 20px/17px;
`;

const Ellipse2 = styled.div`
  position: absolute;
  width: 40px;
  height: 34px;
  top: 282px;
  left: 307px;
  background-color: var(--mist-gray);
  border-radius: 20px/17px;
`;

const Ellipse3 = styled.div`
  position: absolute;
  width: 40px;
  height: 34px;
  top: 282px;
  left: 1330px;
  background-color: var(--mist-gray);
  border-radius: 20px/17px;
`;

const OverlapGroup3 = styled.div`
  height: 200px;
  display: flex;
  padding: 0 28px;
  align-items: flex-end;
  min-width: 1440px;
  background-color: var(--black);
`;

const OverlapGroupContainer = styled.div`
  width: 543px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 176px;
`;

const OverlapGroup26 = styled.div`
  width: 435px;
  height: 26px;
  position: relative;
`;

const Rectangle242 = styled.div`
  position: absolute;
  width: 435px;
  height: 25px;
  top: 1px;
  left: 0;
  background-color: var(--black);
`;

const Rectangle246 = styled.div`
  position: absolute;
  width: 75px;
  height: 25px;
  top: 1px;
  left: 0;
  background-color: var(--black);
`;

const X91Match = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 75px;
  height: 25px;
  top: 0;
  left: 0;
  font-family: var(--font-family-roboto);
  font-weight: 700;
  color: #008000;
  font-size: var(--font-size-m);
  text-align: center;
  letter-spacing: 0.15px;
  line-height: 15px;
`;

const Rectangle247 = styled.div`
  position: absolute;
  width: 75px;
  height: 25px;
  top: 1px;
  left: 75px;
  background-color: var(--black);
`;

const Number = styled.div`
  ${ValignTextMiddle}
  ${RobotoNormalWhite10px}
            position: absolute;
  width: 75px;
  height: 25px;
  top: 0;
  left: 75px;
  text-align: center;
  letter-spacing: 0.15px;
  line-height: 15px;
`;

const Rectangle248 = styled.div`
  position: absolute;
  width: 75px;
  height: 25px;
  top: 1px;
  left: 150px;
  background-color: var(--black);
`;

const Address = styled.div`
  ${ValignTextMiddle}
  ${RobotoNormalWhite10px}
            position: absolute;
  width: 75px;
  height: 25px;
  top: 0;
  left: 150px;
  text-align: center;
  letter-spacing: 0.15px;
  line-height: 15px;
`;

const OverlapGroup24 = styled.div`
  width: 543px;
  height: 125px;
  position: relative;
  margin-top: 25px;
`;

const Rectangle243 = styled.div`
  position: absolute;
  width: 543px;
  height: 100px;
  top: 1px;
  left: 0;
  background-color: var(--black);
`;

const ShesGotThePower = styled.div`
  position: absolute;
  width: 533px;
  top: 0;
  left: 0;
  font-family: var(--font-family-roboto);
  font-weight: 100;
  color: var(--white);
  font-size: 18px;
  letter-spacing: 0.15px;
  line-height: 25px;
`;

const Rectangle249 = styled.div`
  position: absolute;
  width: 242px;
  height: 24px;
  top: 101px;
  left: 25px;
  background-color: var(--black);
`;

const Episodes = styled.div`
  position: absolute;
  width: 242px;
  top: 100px;
  left: 25px;
  font-family: var(--font-family-roboto);
  font-weight: 700;
  color: var(--white);
  font-size: var(--font-size-xxxxl);
  letter-spacing: 0.15px;
  line-height: 25px;
  white-space: nowrap;
`;

const OverlapGroup25 = styled.div`
  ${RobotoNormalGray16px}
  width: 455px;
  height: 157px;
  position: relative;
  margin-left: 324px;
  margin-bottom: 3px;
`;

const Rectangle144 = styled.div`
  position: absolute;
  width: 200px;
  height: 30px;
  top: 127px;
  left: 255px;
  background-color: var(--mist-gray);
`;

const Rectangle244 = styled.div`
  position: absolute;
  width: 455px;
  height: 126px;
  top: 1px;
  left: 0;
  background-color: var(--black);
`;

const CastRobinWright = styled.p`
  position: absolute;
  width: 276px;
  top: 0;
  left: 0;
  letter-spacing: 0.15px;
  line-height: 25px;
`;

const GenerasPoliticalT = styled.p`
  position: absolute;
  width: 276px;
  top: 45px;
  left: 0;
  letter-spacing: 0.15px;
  line-height: 25px;
`;

const ThisShowIsCerebralDark = styled.p`
  ${ValignTextBottom}
  position: absolute;
  width: 257px;
  height: 33px;
  top: 92px;
  left: 0;
  letter-spacing: 0.15px;
  line-height: 25px;
`;

const OverlapGroup1 = styled.div`
  width: 1440px;
  height: 58px;
  position: relative;
  background-color: var(--black);
`;

const Rectangle137 = styled.div`
  position: absolute;
  width: 1440px;
  height: 58px;
  top: 0;
  left: 0;
  background-color: var(--black);
`;

const Rectangle149 = styled.div`
  position: absolute;
  width: 122px;
  height: 44px;
  top: 7px;
  left: 81px;
  background-color: var(--black);
`;

const ScreenShot20220519At10132 = styled.img`
  position: absolute;
  width: 122px;
  height: 44px;
  top: 7px;
  left: 81px;
  object-fit: cover;
`;

const Rectangle150 = styled.div`
  position: absolute;
  width: 35px;
  height: 44px;
  top: 7px;
  left: 33px;
  background-color: var(--black);
`;

const Rectangle151 = styled.div`
  position: absolute;
  width: 75px;
  height: 10px;
  top: 7px;
  left: 216px;
  background-color: var(--black);
`;

const Rectangle152 = styled.div`
  position: absolute;
  width: 1190px;
  height: 30px;
  top: 21px;
  left: 216px;
  background-color: var(--black);
`;

const Rectangle153 = styled.div`
  position: absolute;
  width: 56px;
  height: 18px;
  top: 3px;
  left: 1350px;
  background-color: var(--black);
`;

const WhenTheNewlyElect = styled.p`
  ${RobotoNormalGray10px}
  position: absolute;
  width: 355px;
  top: 20px;
  left: 216px;
  letter-spacing: 0.15px;
  line-height: 15px;
`;

const Episode1 = styled.div`
  ${ValignTextMiddle}
  ${RobotoNormalWhite10px}
            position: absolute;
  width: 75px;
  height: 10px;
  top: 6px;
  left: 216px;
  letter-spacing: 0.15px;
  line-height: 15px;
  white-space: nowrap;
`;

const Number1 = styled.div`
  ${ValignTextMiddle}
  ${RobotoNormalWhite18px}
            position: absolute;
  width: 35px;
  height: 44px;
  top: 6px;
  left: 33px;
  text-align: center;
  letter-spacing: 0.15px;
  line-height: 15px;
`;

const X56m = styled.div`
  ${ValignTextMiddle}
  ${RobotoNormalWhite10px}
            position: absolute;
  width: 56px;
  height: 18px;
  top: 2px;
  left: 1350px;
  text-align: right;
  letter-spacing: 0.15px;
  line-height: 15px;
  white-space: nowrap;
`;

const Name = styled.p`
  ${RobotoNormalGray10px}
  position: absolute;
  width: 361px;
  top: 21px;
  left: 216px;
  letter-spacing: 0.15px;
  line-height: 15px;
`;

const Name1 = styled.p`
  ${RobotoNormalGray10px}
  position: absolute;
  width: 361px;
  top: 20px;
  left: 216px;
  letter-spacing: 0.15px;
  line-height: 15px;
`;

const FranksFightOverT = styled.p`
  ${RobotoNormalGray10px}
  position: absolute;
  width: 358px;
  top: 20px;
  left: 216px;
  letter-spacing: 0.15px;
  line-height: 15px;
`;

const Name2 = styled.p`
  ${RobotoNormalGray10px}
  position: absolute;
  width: 358px;
  top: 21px;
  left: 216px;
  letter-spacing: 0.15px;
  line-height: 15px;
`;

const Name3 = styled.p`
  ${RobotoNormalGray10px}
  position: absolute;
  width: 360px;
  top: 20px;
  left: 216px;
  letter-spacing: 0.15px;
  line-height: 15px;
`;

const RebellionOnAllFon = styled.p`
  ${RobotoNormalGray10px}
  position: absolute;
  width: 349px;
  top: 20px;
  left: 216px;
  letter-spacing: 0.15px;
  line-height: 15px;
`;

const OverlapGroupContainer1 = styled.div`
  height: 268px;
  display: flex;
  padding: 8px 37px;
  align-items: flex-end;
  min-width: 1440px;
  background-color: var(--black);
`;

const OverlapGroup31 = styled.div`
  width: 201px;
  height: 235px;
  position: relative;
`;

const Rectangle250 = styled.div`
  position: absolute;
  width: 200px;
  height: 235px;
  top: 0;
  left: 1px;
  background-color: var(--black);
`;

const Rectangle256 = styled.div`
  position: absolute;
  width: 200px;
  height: 77px;
  top: 0;
  left: 1px;
  background-color: var(--apple-blossom);
`;

const ScreenShot20220519At12081 = styled.img`
  position: absolute;
  width: 200px;
  height: 79px;
  top: 0;
  left: 1px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Rectangle274 = styled.div`
  position: absolute;
  width: 201px;
  height: 54px;
  top: 79px;
  left: 0;
  background-color: var(--black);
`;

const Ellipse9 = styled.div`
  position: absolute;
  width: 40px;
  height: 34px;
  top: 92px;
  left: 154px;
  background-color: var(--scarlet);
  border-radius: 20px/17px;
`;

const Number2 = styled.div`
  ${InterNormalWhite16px}
  position: absolute;
  width: 133px;
  top: 95px;
  left: 2px;
  letter-spacing: 0.15px;
`;

const PennBadgleyGossi = styled.p`
  ${InterNormalGray14px}
  position: absolute;
  width: 200px;
  top: 132px;
  left: 1px;
  letter-spacing: 0.15px;
`;

const OverlapGroup32 = styled.div`
  width: 201px;
  height: 235px;
  position: relative;
  margin-left: 28px;
`;

const Rectangle251 = styled.div`
  position: absolute;
  width: 200px;
  height: 235px;
  top: 0;
  left: 0;
  background-color: var(--black);
`;

const Rectangle257 = styled.div`
  position: absolute;
  width: 200px;
  height: 77px;
  top: 0;
  left: 0;
  background-color: var(--apple-blossom);
`;

const ScreenShot20220519At12091 = styled.img`
  position: absolute;
  width: 200px;
  height: 77px;
  top: 0;
  left: 0;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Rectangle278 = styled.div`
  position: absolute;
  width: 201px;
  height: 54px;
  top: 77px;
  left: 0;
  background-color: var(--black);
`;

const Ellipse8 = styled.div`
  position: absolute;
  width: 40px;
  height: 34px;
  top: 92px;
  left: 153px;
  background-color: var(--scarlet);
  border-radius: 20px/17px;
`;

const Number3 = styled.div`
  ${InterNormalWhite16px}
  position: absolute;
  width: 133px;
  top: 95px;
  left: 0;
  letter-spacing: 0.15px;
`;

const PennBadgleyGossi1 = styled.p`
  ${InterNormalGray14px}
  position: absolute;
  width: 200px;
  top: 130px;
  left: 0;
  letter-spacing: 0.15px;
`;

const OverlapGroup27 = styled.div`
  width: 201px;
  height: 235px;
  position: relative;
  margin-left: 27px;
`;

const OverlapGroup28 = styled.div`
  width: 203px;
  height: 235px;
  position: relative;
  margin-left: 25px;
`;

const Rectangle253 = styled.div`
  position: absolute;
  width: 200px;
  height: 235px;
  top: 0;
  left: 2px;
  background-color: var(--black);
`;

const Rectangle259 = styled.div`
  position: absolute;
  width: 200px;
  height: 77px;
  top: 0;
  left: 2px;
  background-color: var(--apple-blossom);
`;

const ScreenShot20220519At12111 = styled.img`
  position: absolute;
  width: 200px;
  height: 79px;
  top: 0;
  left: 2px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Rectangle276 = styled.div`
  position: absolute;
  width: 201px;
  height: 54px;
  top: 79px;
  left: 2px;
  background-color: var(--black);
`;

const Ellipse6 = styled.div`
  position: absolute;
  width: 40px;
  height: 34px;
  top: 89px;
  left: 155px;
  background-color: var(--scarlet);
  border-radius: 20px/17px;
`;

const PennBadgleyGossi2 = styled.p`
  ${InterNormalGray14px}
  position: absolute;
  width: 199px;
  top: 132px;
  left: 3px;
  letter-spacing: 0.15px;
`;

const OverlapGroup29 = styled.div`
  width: 202px;
  height: 235px;
  position: relative;
  margin-left: 26px;
`;

const ScreenShot20220519At12112 = styled.img`
  position: absolute;
  width: 200px;
  height: 77px;
  top: 0;
  left: 1px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Rectangle275 = styled.div`
  position: absolute;
  width: 201px;
  height: 54px;
  top: 77px;
  left: 1px;
  background-color: var(--black);
`;

const ScreenShot20220519At12121 = styled.img`
  position: absolute;
  width: 200px;
  height: 77px;
  top: 0;
  left: 0;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const PennBadgleyGossi3 = styled.p`
  ${InterNormalGray14px}
  position: absolute;
  width: 199px;
  top: 130px;
  left: 0;
  letter-spacing: 0.15px;
`;

const OverlapGroupContainer2 = styled.div`
  height: 285px;
  display: flex;
  padding: 20px 38px;
  align-items: flex-start;
  min-width: 1440px;
  background-color: var(--black);
`;

const OverlapGroup20 = styled.div`
  width: 200px;
  height: 236px;
  position: relative;
`;

const Rectangle262 = styled.div`
  position: absolute;
  width: 200px;
  height: 235px;
  top: 1px;
  left: 0;
  background-color: var(--mist-gray);
`;

const ScreenShot20220519At2351 = styled.img`
  position: absolute;
  width: 200px;
  height: 158px;
  top: 78px;
  left: 0;
  object-fit: cover;
`;

const Rectangle268 = styled.div`
  position: absolute;
  width: 200px;
  height: 77px;
  top: 1px;
  left: 0;
  background-color: var(--black);
`;

const Surname = styled.p`
  ${ValignTextBottom}
  ${RobotoNormalWhite15px}
            position: absolute;
  width: 199px;
  height: 77px;
  top: 0;
  left: 1px;
  transition: all 0.2s ease;
  letter-spacing: 0.15px;
  line-height: 25px;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const OverlapGroup21 = styled.div`
  width: 200px;
  height: 236px;
  position: relative;
  margin-left: 28px;
`;

const ScreenShot20220519At2352 = styled.img`
  position: absolute;
  width: 200px;
  height: 158px;
  top: 78px;
  left: 0;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const Surname1 = styled.p`
  ${ValignTextBottom}
  ${RobotoNormalWhite15px}
            position: absolute;
  width: 199px;
  height: 77px;
  top: 0;
  left: 0;
  letter-spacing: 0.15px;
  line-height: 25px;
`;

const Season6TeaserTheEnd = styled.p`
  ${ValignTextMiddle}
  ${RobotoNormalWhite15px}
            position: absolute;
  width: 199px;
  height: 77px;
  top: 0;
  left: 1px;
  letter-spacing: 0.15px;
  line-height: 25px;
`;

const Surname2 = styled.p`
  ${ValignTextBottom}
  ${RobotoNormalWhite15px}
            position: absolute;
  width: 199px;
  height: 77px;
  top: 0;
  left: 1px;
  letter-spacing: 0.15px;
  line-height: 25px;
`;

const OverlapGroupContainer3 = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  padding: 30px 45px;
  align-items: flex-start;
  min-height: 307px;
  background-color: var(--black);
`;

const OverlapGroup23 = styled.div`
  width: 501px;
  height: 51px;
  position: relative;
`;

const Rectangle280 = styled.div`
  position: absolute;
  width: 501px;
  height: 50px;
  top: 1px;
  left: 0;
  background-color: var(--black);
`;

const AboutHouseOfCards = styled.div`
  ${ValignTextMiddle}
  position: absolute;
  width: 501px;
  height: 50px;
  top: 0;
  left: 0;
  font-family: var(--font-family-roboto);
  font-weight: 400;
  color: var(--white);
  font-size: 45px;
  letter-spacing: 0.15px;
  line-height: 25px;
`;

const OverlapGroup22 = styled.div`
  ${RobotoNormalGray15px}
  width: 1331px;
  height: 164px;
  position: relative;
  margin-top: 9px;
  margin-left: 2px;
`;

const Rectangle281 = styled.div`
  position: absolute;
  width: 1331px;
  height: 163px;
  top: 1px;
  left: 0;
  background-color: var(--black);
`;

const CastKevinSpacey = styled.p`
  ${ValignTextMiddle}
  position: absolute;
  width: 1035px;
  height: 55px;
  top: 0;
  left: 0;
  letter-spacing: 0.15px;
  line-height: 25px;
`;

const GenresPoliticalTV = styled.p`
  ${ValignTextMiddle}
  position: absolute;
  width: 647px;
  height: 26px;
  top: 55px;
  left: 0;
  letter-spacing: 0.15px;
  line-height: 25px;
  white-space: nowrap;
`;

const ThisShowIsCerebralDark1 = styled.p`
  ${ValignTextMiddle}
  position: absolute;
  width: 666px;
  height: 38px;
  top: 81px;
  left: 0;
  letter-spacing: 0.15px;
  line-height: 25px;
`;

const MaturityRatingLan = styled.p`
  ${ValignTextMiddle}
  position: absolute;
  width: 614px;
  height: 44px;
  top: 119px;
  left: 0;
  letter-spacing: 0.15px;
  line-height: 25px;
`;

export default ContentPage;
