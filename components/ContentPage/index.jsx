import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as mdc from "material-components-web";
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
        <div className="overlap-group7">
          <div className="rectangle-20"></div>
          <div className="nav-bar"></div>
          <div className="nav-bar-logo-box"></div>
          <div className="nav-bar-home"></div>
          <Link to="/sign-up">
            <div className="place valign-text-middle inter-normal-gray-16px">{place1}</div>
          </Link>
          <Link to="/login">
            <img className="kisspng-netflix-stre" src={kisspngNetflixStreamingMediaTelevis1} />
          </Link>
          <div className="nav-bar-tv-shows"></div>
          <Link to="/sign-up">
            <div className="tv-shows valign-text-middle inter-normal-gray-16px">{tvShows1}</div>
          </Link>
          <div className="nav-bar-movies"></div>
          <Link to="/sign-up">
            <div className="movies valign-text-middle inter-normal-gray-16px">{movies1}</div>
          </Link>
          <div className="nav-bar-my-list"></div>
          <Link to="/login">
            <div className="my-list valign-text-middle inter-normal-gray-16px">{myList1}</div>
          </Link>
          <div className="nav-bar-recently-added"></div>
          <Link to="/login">
            <div className="recently-added valign-text-middle inter-normal-gray-16px">{recentlyAdded1}</div>
          </Link>
          <div className="rectangle-49"></div>
          <div className="rectangle-50"></div>
          <Link to="/login">
            <img className="kisspng-netflix-stre-1" src={kisspngNetflixStreamingMediaTelevis2} />
          </Link>
          <div className="rectangle-51"></div>
          <div className="rectangle-52"></div>
          <div className="rectangle-53"></div>
          <div className="rectangle-54"></div>
          <div className="nav-bar-logo-box"></div>
          <div className="nav-bar-home"></div>
          <Link to="/sign-up">
            <div className="place valign-text-middle inter-normal-gray-16px">{place2}</div>
          </Link>
          <Link to="/login">
            <img className="kisspng-netflix-stre" src={kisspngNetflixStreamingMediaTelevis3} />
          </Link>
          <div className="nav-bar-tv-shows"></div>
          <Link to="/sign-up">
            <div className="tv-shows valign-text-middle inter-normal-gray-16px">{tvShows2}</div>
          </Link>
          <div className="nav-bar-movies"></div>
          <Link to="/sign-up">
            <div className="movies valign-text-middle inter-normal-gray-16px">{movies2}</div>
          </Link>
          <div className="nav-bar-my-list"></div>
          <Link to="/login">
            <div className="my-list valign-text-middle inter-normal-gray-16px">{myList2}</div>
          </Link>
          <div className="nav-bar-recently-added"></div>
          <Link to="/login">
            <div className="recently-added valign-text-middle inter-normal-gray-16px">{recentlyAdded2}</div>
          </Link>
        </div>
        <div className="overlap-group15">
          <div className="rectangle-15"></div>
          <img className="houseofcards-foto-1 animate-enter" src={houseofcardsFoto1} />
          <img className="pngwing-1" src={pngwing1} />
          <div className="rectangle-130"></div>
          <div className="ellipse-1"></div>
          <div className="ellipse-2"></div>
          <div className="ellipse-3"></div>
        </div>
        <div className="overlap-group3">
          <div className="overlap-group-container">
            <div className="overlap-group26">
              <div className="rectangle-242"></div>
              <div className="rectangle-246"></div>
              <div className="x91-match valign-text-middle">{x91Match}</div>
              <div className="rectangle-247"></div>
              <div className="number-2 valign-text-middle roboto-normal-white-10px">{number1}</div>
              <div className="rectangle-248"></div>
              <div className="address valign-text-middle roboto-normal-white-10px">{address}</div>
            </div>
            <div className="overlap-group24">
              <div className="rectangle-243"></div>
              <div className="shes-got-the-power">{shesGotThePower}</div>
              <div className="rectangle-249"></div>
              <div className="episodes">{episodes}</div>
            </div>
          </div>
          <div className="overlap-group25 roboto-normal-gray-16px">
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
            <div className="rectangle-144"></div>
            <div className="rectangle-244"></div>
            <p className="cast-robin-wright">{castRobinWright}</p>
            <p className="generas-political-t">{generasPoliticalT}</p>
            <p className="this-show-is-cerebral-dark valign-text-bottom">{thisShowIsCerebralDark1}</p>
          </div>
        </div>
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle-1"></div>
          <img className="screen-shot-2022-05-19-at-10" src={screenShot20220519At10132} />
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <p className="when-the-newly-elect roboto-normal-gray-10px">{whenTheNewlyElect}</p>
          <div className="episode valign-text-middle roboto-normal-white-10px">{episode1}</div>
          <div className="number valign-text-middle roboto-normal-white-18px">{number2}</div>
          <div className="x56m valign-text-middle roboto-normal-white-10px">{x56M}</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle-1"></div>
          <img className="screen-shot-2022-05-19-at-10" src={screenShot20220519At10133} />
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle-1"></div>
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <img className="screen-shot-2022-05-19-at-10" src={screenShot20220519At10391} />
          <p className="name-1 roboto-normal-gray-10px">{name1}</p>
          <div className="episode valign-text-middle roboto-normal-white-10px">{episode2}</div>
          <div className="number valign-text-middle roboto-normal-white-18px">{number3}</div>
          <div className="x49m valign-text-middle roboto-normal-white-10px">{x49M1}</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle-1"></div>
          <img className="screen-shot-2022-05-19-at-10" src={screenShot20220519At10401} />
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <p className="name-2 roboto-normal-gray-10px">{name2}</p>
          <div className="episode valign-text-middle roboto-normal-white-10px">{episode3}</div>
          <div className="number valign-text-middle roboto-normal-white-18px">{number4}</div>
          <div className="x51m valign-text-middle roboto-normal-white-10px">{x51M1}</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle-1"></div>
          <img className="screen-shot-2022-05-19-at-10" src={screenShot20220519At10411} />
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <p className="name roboto-normal-gray-10px">{name3}</p>
          <div className="episode valign-text-middle roboto-normal-white-10px">{episode4}</div>
          <div className="number valign-text-middle roboto-normal-white-18px">{number5}</div>
          <div className="x49m-1 valign-text-middle roboto-normal-white-10px">{x49M2}</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle-1"></div>
          <img className="screen-shot-2022-05-19-at-10" src={screenShot20220519At10421} />
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <p className="franks-fight-over-t roboto-normal-gray-10px">{franksFightOverT}</p>
          <div className="episode valign-text-middle roboto-normal-white-10px">{episode5}</div>
          <div className="number valign-text-middle roboto-normal-white-18px">{number6}</div>
          <div className="x52m valign-text-middle roboto-normal-white-10px">{x52M1}</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle-1"></div>
          <img className="screen-shot-2022-05-19-at-10" src={screenShot20220519At10138} />
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle-1"></div>
          <img className="screen-shot-2022-05-19-at-10" src={screenShot20220519At10422} />
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <p className="name-3 roboto-normal-gray-10px">{name4}</p>
          <div className="episode valign-text-middle roboto-normal-white-10px">{episode6}</div>
          <div className="number valign-text-middle roboto-normal-white-18px">{number7}</div>
          <div className="x50m valign-text-middle roboto-normal-white-10px">{x50M}</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle-1"></div>
          <img className="screen-shot-2022-05-19-at-10" src={screenShot20220519At10423} />
          <div className="rectangle-2"></div>
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <p className="name-4 roboto-normal-gray-10px">{name5}</p>
          <div className="episode valign-text-middle roboto-normal-white-10px">{episode7}</div>
          <div className="number valign-text-middle roboto-normal-white-18px">{number8}</div>
          <div className="x54m valign-text-middle roboto-normal-white-10px">{x54M}</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle-1"></div>
          <img className="screen-shot-2022-05-19-at-10" src={screenShot20220519At10431} />
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <p className="name-5 roboto-normal-gray-10px">{name6}</p>
          <div className="episode valign-text-middle roboto-normal-white-10px">{episode8}</div>
          <div className="number valign-text-middle roboto-normal-white-18px">{number9}</div>
          <div className="x47m valign-text-middle roboto-normal-white-10px">{x47M}</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle-1"></div>
          <img className="screen-shot-2022-05-19-at-10" src={screenShot20220519At10432} />
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <p className="name roboto-normal-gray-10px">{surname1}</p>
          <div className="episode valign-text-middle roboto-normal-white-10px">{episode9}</div>
          <div className="number valign-text-middle roboto-normal-white-18px">{number10}</div>
          <div className="x51m-1 valign-text-middle roboto-normal-white-10px">{x51M2}</div>
        </div>
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="rectangle"></div>
          <div className="rectangle-1"></div>
          <img className="screen-shot-2022-05-19-at-10" src={screenShot20220519At10433} />
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
          <div className="rectangle-5"></div>
          <p className="rebellion-on-all-fon roboto-normal-gray-10px">{rebellionOnAllFon}</p>
          <div className="episode valign-text-middle roboto-normal-white-10px">{episode10}</div>
          <div className="number valign-text-middle roboto-normal-white-18px">{number11}</div>
          <div className="x52m-1 valign-text-middle roboto-normal-white-10px">{x52M2}</div>
        </div>
        <div className="overlap-group-container-1">
          <div className="overlap-group31">
            <div className="rectangle-25"></div>
            <div className="rectangle-2-1"></div>
            <img className="screen-shot-2022-05-19-at-1208-1" src={screenShot20220519At12081} />
            <div className="rectangle-274"></div>
            <div className="ellipse-9"></div>
            <div className="number-3 inter-normal-white-16px">{number12}</div>
            <p className="penn-badgley-gossi-2 inter-normal-gray-14px">{pennBadgleyGossi1}</p>
          </div>
          <div className="overlap-group32">
            <div className="rectangle-25-1"></div>
            <div className="rectangle-2-2"></div>
            <img className="screen-shot-2022-05-19-at-12" src={screenShot20220519At12091} />
            <div className="rectangle-27"></div>
            <div className="ellipse"></div>
            <div className="number-1 inter-normal-white-16px">{number13}</div>
            <p className="penn-badgley-gossi inter-normal-gray-14px">{pennBadgleyGossi2}</p>
          </div>
          <div className="overlap-group-1">
            <div className="rectangle-25-1"></div>
            <div className="rectangle-2-2"></div>
            <img className="screen-shot-2022-05-19-at-12" src={screenShot20220519At12101} />
            <div className="rectangle-27"></div>
            <div className="ellipse"></div>
            <div className="number-1 inter-normal-white-16px">{number14}</div>
            <p className="penn-badgley-gossi inter-normal-gray-14px">{pennBadgleyGossi3}</p>
          </div>
          <div className="overlap-group28">
            <div className="rectangle-253"></div>
            <div className="rectangle-259"></div>
            <img className="screen-shot-2022-05-19-at-1211-1" src={screenShot20220519At12111} />
            <div className="rectangle-276"></div>
            <div className="ellipse-6"></div>
            <div className="number-1 inter-normal-white-16px">{number15}</div>
            <p className="penn-badgley-gossi-1 inter-normal-gray-14px">{pennBadgleyGossi4}</p>
          </div>
          <div className="overlap-group29">
            <div className="rectangle-25"></div>
            <div className="rectangle-2-1"></div>
            <img className="screen-shot-2022-05-19-at-1211-2" src={screenShot20220519At12112} />
            <div className="rectangle-275"></div>
            <div className="ellipse-4"></div>
            <div className="number-1 inter-normal-white-16px">{number16}</div>
            <p className="penn-badgley-gossi-1 inter-normal-gray-14px">{pennBadgleyGossi5}</p>
          </div>
          <div className="overlap-group-1">
            <div className="rectangle-25-1"></div>
            <div className="rectangle-2-2"></div>
            <img className="screen-shot-2022-05-19-at-1212-1" src={screenShot20220519At12121} />
            <div className="rectangle-27"></div>
            <div className="ellipse"></div>
            <div className="number-1 inter-normal-white-16px">{number17}</div>
            <p className="penn-badgley-gossi-3 inter-normal-gray-14px">{pennBadgleyGossi6}</p>
          </div>
        </div>
        <div className="overlap-group-container-2">
          <div className="overlap-group20">
            <div className="rectangle-26"></div>
            <img className="screen-shot-2022-05-19-at-235-1" src={screenShot20220519At2351} />
            <div className="rectangle-2-3"></div>
            <p className="surname-1 valign-text-bottom roboto-normal-white-15px">{surname2}</p>
          </div>
          <div className="overlap-group-2">
            <div className="rectangle-26"></div>
            <img className="screen-shot-2022-05-19-at-23" src={screenShot20220519At2352} />
            <div className="rectangle-2-3"></div>
            <p className="surname valign-text-bottom roboto-normal-white-15px">{surname3}</p>
          </div>
          <div className="overlap-group-2">
            <div className="rectangle-26"></div>
            <img className="screen-shot-2022-05-19-at-23" src={screenShot20220519At2361} />
            <div className="rectangle-2-3"></div>
            <p className="season-6-teaser-the-end valign-text-middle roboto-normal-white-15px">{season6TeaserTheEnd}</p>
          </div>
          <div className="overlap-group-2">
            <div className="rectangle-26"></div>
            <img className="screen-shot-2022-05-19-at-23" src={screenShot20220519At2362} />
            <div className="rectangle-2-3"></div>
            <p className="season-6-teaser-my-house valign-text-middle roboto-normal-white-15px">
              {season6TeaserMyHouse}
            </p>
          </div>
          <div className="overlap-group-2">
            <div className="rectangle-26"></div>
            <img className="screen-shot-2022-05-19-at-23" src={screenShot20220519At2363} />
            <div className="rectangle-2-3"></div>
            <p className="surname-2 valign-text-bottom roboto-normal-white-15px">{surname4}</p>
          </div>
          <div className="overlap-group-2">
            <div className="rectangle-26"></div>
            <img className="screen-shot-2022-05-19-at-23" src={screenShot20220519At2371} />
            <div className="rectangle-2-3"></div>
            <p className="surname valign-text-bottom roboto-normal-white-15px">{surname5}</p>
          </div>
        </div>
        <div className="overlap-group-container-3">
          <div className="overlap-group23">
            <div className="rectangle-280"></div>
            <div className="about-house-of-cards valign-text-middle">{aboutHouseOfCards}</div>
          </div>
          <div className="overlap-group22 roboto-normal-gray-15px">
            <div className="rectangle-281"></div>
            <p className="cast-kevin-spacey valign-text-middle">{castKevinSpacey}</p>
            <p className="genres-political-tv valign-text-middle">{genresPoliticalTv}</p>
            <p className="this-show-is-cerebral-dark-1 valign-text-middle">{thisShowIsCerebralDark2}</p>
            <p className="maturity-rating-lan valign-text-middle">{maturityRatingLan}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentPage;
