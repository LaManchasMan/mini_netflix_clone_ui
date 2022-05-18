import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import LOGIN from "./components/LOGIN";
import HOME from "./components/HOME";
import Content from "./components/Content";
import SignUp from "./components/SignUp";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/:path(|login)">
            <LOGIN {...lOGINData} />
          </Route>
          <Route path="/home">
            <HOME {...hOMEData} />
          </Route>
          <Route path="/content">
            <Content
              kisspngNetflixStreamingMediaTelevis="/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log@2x.png"
              uiuhj6En7Yitwqwktbwjvt3="/img/uiuhj6en7yitwqwktbwjvt-3@1x.png"
            />
          </Route>
          <Route path="/sign-up">
            <SignUp {...signUpData} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const lOGINData = {
    overlapGroup4: "/img/f75774ea-9a7c-44ea-a7c7-91d1e9df10e6-1@1x.png",
    kisspngNetflixStreamingMediaTelevis: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log-1@2x.png",
    signIn1: "Sign In",
    label: "Email or phone nunber",
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

const signUpData = {
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
    signUpPageBackground: "/img/sign-up-page-background@1x.png",
    title: "Unlimited movies, TV shows, and more.",
    watchAnywhereCancelAnytime: "Watch anywhere. Cancel anytime.",
    readyToWatchEnte1: "Ready to watch? Enter your email to create or restart your memebership.",
    getStarted1: "Get Started >",
    signIn: "Sign In",
    netflixLogo: "/img/kisspng-netflix-streaming-media-television-show-logo-netflix-log@2x.png",
    label1: "How much does Netflix cost?",
    frequentlyAskedQuestions: "Frequently Asked Questions",
    readyToWatchEnte2: "Ready to watch? Enter your email to create or restart your membership.",
    getStarted2: "Get Started >",
    label2: "Email address",
    questionsCall18445052993: "Questions? Call 1-844-505-2993",
    faq: "FAQ",
    investorRelations: "Investor Relations",
    waysToWatch: "Ways to Watch",
    corporateInformation: "Corporate Information",
    onlyOnNetflix: "Only on Netflix",
    helpCenter: "Help Center",
    jobs: "Jobs",
    termsOfUse: "Terms of Use",
    contactUs: "Contact Us",
    account: "Account",
    redeemGiftcards: "Redeem Giftcards",
    privacy: "Privacy",
    speedTest: "Speed Test",
    mediaCenter: "Media Center",
    buyGiftCards: "Buy Gift Cards",
    cookiePreferences: "Cookie Preferences",
    legalNotices: "Legal Notices",
};

