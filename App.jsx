
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import HOME from "./components/HOME";
import ContentPage from "./components/ContentPage";
import LOGIN from "./components/LOGIN";
import SignUp from "./components/SignUp";
import SignUp2 from "./components/SignUp2";
import SignUp3 from "./components/SignUp3";
import Content from "./components/Content";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/home">
          <HOME {...hOMEData} />
        </Route>
        <Route path="/content-page">
          <ContentPage {...contentPageData} />
        </Route>
        <Route path="/:path(|login)">
          <LOGIN {...lOGINData} />
        </Route>
        <Route path="/sign-up">
          <SignUp {...signUpData} />
        </Route>
        <Route path="/sign-up-1">
          <SignUp2 {...signUp2Data} />
        </Route>
        <Route path="/sign-up2">
          <SignUp3 {...signUp3Data} />
        </Route>
        <Route path="/content">
          <Content
            kisspngNetflixStreamingMediaTelevis="/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log@2x.png"
            uiuhj6En7Yitwqwktbwjvt3="/img/uiuhj6en7yitwqwktbwjvt-3@1x.png"
          />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const signUpData = {
    signUpPageBackground: "/img/sign-up-page-background@1x.png",
    getStarted1: "Get Started >",
    signIn: "Sign In",
    netflixLogo: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log@2x.png",
    enjoyOnYourTv: "Enjoy on your TV.",
    watchOnSmartTvs: "Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.",
    willSmithAd: "/img/screen-shot-2022-05-17-at-2-18-1@2x.png",
    group2: "/img/screen-shot-2022-05-17-at-2-25-1@2x.png",
    downloadYourShowsToWatchOffline: "Download your shows to watch offline.",
    saveYourFavorites: "Save your favorites easily and always have something to watch.",
    watchEverywhere: "Watch everywhere.",
    streamUnlimitedMov: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV without paying more.",
    group4: "/img/screen-shot-2022-05-17-at-2-38-1@2x.png",
    createProfilesForKids: "Create profiles for kids.",
    kidsvalueprop1: "/img/kidsvalueprop-1@2x.png",
    sendKidsOnAdventu: "Send kids on adventures with their favorite characters in a space made just for them- free with your membership.",
    frequentlyAskedQuestions: "Frequently Asked Questions",
    readyToWatchEnte: "Ready to watch? Enter your email to create or restart your membership.",
    getStarted2: "Get Started >",
    label: "Email address",
};

const frequentlyAskedQuestionsContainer2Data = {
    className: "frequently-asked-questions-container-1",
};

const signUp2Data = {
    signUpPageBackground: "/img/sign-up-page-background@1x.png",
    getStarted1: "Get Started >",
    signIn: "Sign In",
    netflixLogo: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log@2x.png",
    frequentlyAskedQuestions: "Frequently Asked Questions",
    readyToWatchEnte: "Ready to watch? Enter your email to create or restart your membership.",
    getStarted2: "Get Started >",
    label: "Email address",
    frequentlyAskedQuestionsContainerProps: frequentlyAskedQuestionsContainer2Data,
};

const frequentlyAskedQuestionsContainer3Data = {
    className: "frequently-asked-questions-container-2",
};

const signUp3Data = {
    signUpPageBackground: "/img/sign-up-page-background@1x.png",
    getStarted1: "Get Started >",
    signIn: "Sign In",
    netflixLogo: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log@2x.png",
    frequentlyAskedQuestions: "Frequently Asked Questions",
    readyToWatchEnte: "Ready to watch? Enter your email to create or restart your membership.",
    getStarted2: "Get Started >",
    label: "Email address",
    frequentlyAskedQuestionsContainerProps: frequentlyAskedQuestionsContainer3Data,
};

const hOMEData = {
    uiuhj6En7Yitwqwktbwjvt3: "/img/uiuhj6en7yitwqwktbwjvt-3-1@1x.png",
    place: "Home",
    kisspngNetflixStreamingMediaTelevis: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log-2@2x.png",
    tvShows: "TV Shows",
    movies: "Movies",
    myList: "My List",
    recentlyAdded: "Recently Added",
    x02_Nf_Thewitcher_Socialskin_Facebo: "/img/02-nf-thewitcher-socialskin-facebook-1@2x.png",
    x63D2751005919991: "/img/63d275100591999-1@2x.png",
    x158445UntitledDesign561: "/img/158445-untitled-design-56-1@2x.png",
    arcaneimage: "/img/arcaneimage@2x.png",
    dbkqwqouwaa1Rsi1: "/img/dbkqwqouwaa1rsi-1@2x.png",
    oitnbp1: "/img/oitnbp-1@2x.png",
    belowZeroNetflixReview1: "/img/below-zero-netflix-review-1@2x.png",
    hardKillSocial1: "/img/hard-kill-social-1@2x.png",
    sentinelleNetflixReview1: "/img/sentinelle-netflix-review-1@2x.png",
    thegeekFuriozaNyito664X3351: "/img/thegeek-furioza-nyito-664x335-1@2x.png",
    aaaabegzxji0Ftrcqpcnphu8Jfxedkgxcwv: "/img/aaaabegzxji0ftrcqpcnphu8jfxedkgxcwvfpodhpr8wmkembdp8sljj-mly6bbt@2x.png",
    aaaabzqddfql0Qmj54Wwkmv3Agjjlowwrr_: "/img/aaaabzqddfql0qmj54wwkmv3agjjlowwrr-ecyl4ghn2ohjgrrkcq6g1sqscx7ue@2x.png",
    x17059451: "/img/1705945-1@2x.png",
    aaaabwfruyo332Zb30Lix2JiN_LcOc6Jurc: "/img/aaaabwfruyo332zb30lix2ji-n-lc-oc6jurcfsccc4jxbmqga0lwltqn8lvhn7r@2x.png",
    aaaabzzkeu4Cjmccm4Gbvjoqeh1Lwpjqwil: "/img/aaaabzzkeu4cjmccm4gbvjoqeh1lwpjqwilkj1ssy3qgh2bx9k3jxzwvku4lahfh@2x.png",
    download1: "/img/download-1@2x.png",
    ecw62Re60Ape0Ak33Zce1: "/img/ecw62re60ape0ak33zce-1@2x.png",
    p8696131_B_H10_Aa1: "/img/p8696131-b-h10-aa-1@2x.png",
    x4F69D2A6Bde03A53970F6C08F8Dfdea31: "/img/4f69d2a6bde03a53970f6c08f8dfdea3-1@2x.png",
    aaaabx_Kdldfuieejnl3Xorajua8Ardfnn7: "/img/aaaabx-kdldfuieejnl3xorajua8ardfnn7hy5athxoz5eyrbuvfrm30cylz--v3@2x.png",
    aaaabzx54UbxbxnvofwHc_7Oybhrb7B_8Yk: "/img/aaaabzx54ubxbxnvofw-hc-7oybhrb7b-8ykp1qmzyvk-un2m8tkh4prpqce8pjg@2x.png",
    aaaabdjdfpvxowf0Iqf8Evdyljvgynchnid: "/img/aaaabdjdfpvxowf0iqf8evdyljvgynchnidy6qqfxsltnyhzkkpjyrvge4wcuuyk@2x.png",
    hunter_X_Hunter_By_XvrcardosoD54Co4: "/img/hunter-x-hunter-by-xvrcardoso-d54co4a-1@2x.png",
    isMyHeroAcademiaOnNetflix1: "/img/is-my-hero-academia-on-netflix-1@2x.png",
};

const contentPageData = {
    place1: "Home",
    kisspngNetflixStreamingMediaTelevis1: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log-2@2x.png",
    tvShows1: "TV Shows",
    movies1: "Movies",
    myList1: "My List",
    recentlyAdded1: "Recently Added",
    kisspngNetflixStreamingMediaTelevis2: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log@2x.png",
    place2: "Home",
    kisspngNetflixStreamingMediaTelevis3: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log-2@2x.png",
    tvShows2: "TV Shows",
    movies2: "Movies",
    myList2: "My List",
    recentlyAdded2: "Recently Added",
    houseofcardsFoto1: "/img/houseofcards-foto-1@1x.png",
    pngwing1: "/img/pngwing-1@2x.png",
    x91Match: "91% Match",
    number1: "2018",
    address: "6 Seasons",
    shesGotThePower: "She’s got the power, and the’s forging her own path. But ruthless enemies will stop at nothing to sabotage her reign",
    episodes: "Episodes",
    castRobinWright: "Cast: Robin Wright, Michael Kelly, Diane Lane, more",
    generasPoliticalT: "Generas: Political TV Shows, TV Thrillers, TV Dramas",
    thisShowIsCerebralDark1: "This show is: Cerebral, Dark",
    screenShot20220519At10132: "/img/screen-shot-2022-05-19-at-10-13-2@2x.png",
    whenTheNewlyElect: "When the newly elected PResident reneges on a promise, Frank and Claire decide to sever all allegiances and toss the rules out the window.",
    episode1: "Episode 1",
    number2: "1",
    x56M: "56m",
    screenShot20220519At10133: "/img/screen-shot-2022-05-19-at-10-13-3@2x.png",
    screenShot20220519At10391: "/img/screen-shot-2022-05-19-at-10-39-1@2x.png",
    name1: "Frank uses a young reporter, Zoe Barnes, to spin a story that puts the White House on its heels. Claire makes a cold-blooded move at work",
    episode2: "Episode 2",
    number3: "2",
    x49M1: "49m",
    screenShot20220519At10401: "/img/screen-shot-2022-05-19-at-10-40-1@2x.png",
    name2: "Frank must leave union negotaiations to deal with a crisis in his home district. Zoe negotiates the politics of being a journalist on the rise.",
    episode3: "Episode 3",
    number4: "3",
    x51M1: "51m",
    screenShot20220519At10411: "/img/screen-shot-2022-05-19-at-10-41-1@2x.png",
    name3: "Frank shakes down the Congressional leadership. Peter Russo must choose between politics and his family.",
    episode4: "Episode 4",
    number5: "4",
    x49M2: "49m",
    screenShot20220519At10421: "/img/screen-shot-2022-05-19-at-10-42-1@2x.png",
    franksFightOverT: "Frank’s fight over the Education Bill threatens Claire’s own ambitions. Zoe mixes work and play.",
    episode5: "Episode 5",
    number6: "5",
    x52M1: "52m",
    screenShot20220519At10138: "/img/screen-shot-2022-05-19-at-10-13-3@2x.png",
    screenShot20220519At10422: "/img/screen-shot-2022-05-19-at-10-42-2@2x.png",
    name4: "Frank strikes back at the striking teachers. Claire is caught off guard by a deathbed confession.",
    episode6: "Episode 6",
    number7: "6",
    x50M: "50m",
    screenShot20220519At10423: "/img/screen-shot-2022-05-19-at-10-42-3@2x.png",
    name5: "Frank wins a major battle, but doesn’t pause to rest on his laurels. Peter must face his past. Stamper hushes a secret.",
    episode7: "Episode 7",
    number8: "7",
    x54M: "54m",
    screenShot20220519At10431: "/img/screen-shot-2022-05-19-at-10-43-1@2x.png",
    name6: "Frank is honored at his ala mater, while Peter returns to Philly. Both men tackle unfinished business.",
    episode8: "Episode 8",
    number9: "8",
    x47M: "47m",
    screenShot20220519At10432: "/img/screen-shot-2022-05-19-at-10-43-2@2x.png",
    surname1: "Russo hits the road with V.P Matthews Frank and Stamper try to whip up support in Congress. Claire looks out for herself.",
    episode9: "Episode 9",
    number10: "9",
    x51M2: "51m",
    screenShot20220519At10433: "/img/screen-shot-2022-05-19-at-10-43-3@2x.png",
    rebellionOnAllFon: "Rebellion on all fonts. Claire defies Frank, Zoe finds comfort in someone new, and peter makes an ultimatum.",
    episode10: "Episode 10",
    number11: "10",
    x52M2: "52m",
    screenShot20220519At12081: "/img/screen-shot-2022-05-19-at-12-08-1@2x.png",
    number12: "2021",
    pennBadgleyGossi1: "Penn Badgley (“Gossip Girl”) takes a dark turn in this series that also features Victoria Pedretti (“The Haunting of Hill House and John Stamos”)",
    screenShot20220519At12091: "/img/screen-shot-2022-05-19-at-12-09-1@2x.png",
    number13: "2022",
    pennBadgleyGossi2: "Penn Badgley (“Gossip Girl”) takes a dark turn in this series that also features Victoria Pedretti (“The Haunting of Hill House and John Stamos”)",
    screenShot20220519At12101: "/img/screen-shot-2022-05-19-at-12-10-1@2x.png",
    number14: "2019",
    pennBadgleyGossi3: "Penn Badgley (“Gossip Girl”) takes a dark turn in this series that also features Victoria Pedretti (“The Haunting of Hill House and John Stamos”)",
    screenShot20220519At12111: "/img/screen-shot-2022-05-19-at-12-11-1@2x.png",
    number15: "2020",
    pennBadgleyGossi4: "Penn Badgley (“Gossip Girl”) takes a dark turn in this series that also features Victoria Pedretti (“The Haunting of Hill House and John Stamos”)",
    screenShot20220519At12112: "/img/screen-shot-2022-05-19-at-12-11-2@2x.png",
    number16: "2018",
    pennBadgleyGossi5: "Penn Badgley (“Gossip Girl”) takes a dark turn in this series that also features Victoria Pedretti (“The Haunting of Hill House and John Stamos”)",
    screenShot20220519At12121: "/img/screen-shot-2022-05-19-at-12-12-1@2x.png",
    number17: "2022",
    pennBadgleyGossi6: "Penn Badgley (“Gossip Girl”) takes a dark turn in this series that also features Victoria Pedretti (“The Haunting of Hill House and John Stamos”)",
    screenShot20220519At2351: "/img/screen-shot-2022-05-19-at-2-35-1@2x.png",
    surname2: <React.Fragment>House of Cards Season 6<br />Date Announcement</React.Fragment>,
    screenShot20220519At2352: "/img/screen-shot-2022-05-19-at-2-35-2@2x.png",
    surname3: <React.Fragment>House of Cards Season 6<br />(Trailer)</React.Fragment>,
    screenShot20220519At2361: "/img/screen-shot-2022-05-19-at-2-36-1@2x.png",
    season6TeaserTheEnd: "Season 6 Teaser:  The End",
    screenShot20220519At2362: "/img/screen-shot-2022-05-19-at-2-36-2@2x.png",
    season6TeaserMyHouse: "Season 6 Teaser: My House",
    screenShot20220519At2363: "/img/screen-shot-2022-05-19-at-2-36-3@2x.png",
    surname4: "House of Cards: Season 5 (Trailer)",
    screenShot20220519At2371: "/img/screen-shot-2022-05-19-at-2-37-1@2x.png",
    surname5: "House of Cards: Season 5 (Recap)",
    aboutHouseOfCards: "About House of Cards",
    castKevinSpacey: "Cast: Kevin Spacey, Francis Underwood, Robin Wright, Claire Underwood, Kate Mara, Zoe Barnes, Rachel Brosnahan, Rachel Posner, Molly Parker, Jackie Sharp, Michael Kelly, Doug Stamper, Corey Stoll, Rep. Peter Russo, Kristen Connolly, Christina Gallagher...",
    genresPoliticalTv: "Genres: Political TV Shows, TV Thrillers, TV Dramas",
    thisShowIsCerebralDark2: "This show is: Cerebral, Dark",
    maturityRatingLan: <React.Fragment>Maturity Rating: Language sex, nudity, smoking<br />                             For Mature Audiences. May not be sutiable for ages 17 and under.</React.Fragment>,
};

const lOGINData = {
    overlapGroup4: "/img/f75774ea-9a7c-44ea-a7c7-91d1e9df10e6-1@1x.png",
    kisspngNetflixStreamingMediaTelevis: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log-1@2x.png",
    signIn1: "Sign In",
    signIn2: "Sign In",
    rememberMe: "Remember me",
    needHelp: "Need help?",
    newToNetflix: "New to Netflix?",
    signUpNow: "Sign up now.",
    thisPageIsProtect: <React.Fragment>This page is protected by <br />Google reCHAPATCHA to ensure you’re not a bot. Learn more.</React.Fragment>,
    questionsCall18445052993: "Questions? Call 1-844-505-2993",
    faq: "FAQ",
    cookiePreferences: "Cookie Preferences",
    helpCenter: "Help Center",
    corporateInformation: "Corporate Information",
    termsOfUse: "Terms of Use",
    privacy: "Privacy",
};

