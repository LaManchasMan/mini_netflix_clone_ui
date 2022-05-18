import React from "react";
import { Link } from "react-router-dom";
import "./HOME.css";

class HOME extends React.Component {
  render() {
    const {
      uiuhj6En7Yitwqwktbwjvt3,
      place,
      kisspngNetflixStreamingMediaTelevis,
      tvShows,
      movies,
      myList,
      recentlyAdded,
      x02_Nf_Thewitcher_Socialskin_Facebo,
      x63D2751005919991,
      x158445UntitledDesign561,
      arcaneimage,
      dbkqwqouwaa1Rsi1,
      oitnbp1,
      belowZeroNetflixReview1,
      hardKillSocial1,
      sentinelleNetflixReview1,
      thegeekFuriozaNyito664X3351,
      aaaabegzxji0Ftrcqpcnphu8Jfxedkgxcwv,
      aaaabzqddfql0Qmj54Wwkmv3Agjjlowwrr_,
      x17059451,
      aaaabwfruyo332Zb30Lix2JiN_LcOc6Jurc,
      aaaabzzkeu4Cjmccm4Gbvjoqeh1Lwpjqwil,
      download1,
      ecw62Re60Ape0Ak33Zce1,
      p8696131_B_H10_Aa1,
      x4F69D2A6Bde03A53970F6C08F8Dfdea31,
      aaaabx_Kdldfuieejnl3Xorajua8Ardfnn7,
      aaaabzx54UbxbxnvofwHc_7Oybhrb7B_8Yk,
      aaaabdjdfpvxowf0Iqf8Evdyljvgynchnid,
      hunter_X_Hunter_By_XvrcardosoD54Co4,
      isMyHeroAcademiaOnNetflix1,
    } = this.props;

    return (
      <div className="container-center-horizontal">
        <div className="home screen">
          <div className="overlap-group2-1 inter-normal-gray-16px">
            <div className="main-display-img">
              <video
                width="100%"
                height="100%"
                src="https://cdn.animaapp.com/projects/62839e2b0f409b66f1c6f683/files/netflix.mp4"
                loop
                controls
                autoplay="autoplay"
                playsinline
                muted
              ></video>
            </div>
            <Link to="/content">
              <img className="uiuh-j6e-n7-yitw-qw-kt-b-wjv-t-3" src={uiuhj6En7Yitwqwktbwjvt3} />
            </Link>
            <div className="nav-bar"></div>
            <div className="nav-bar-logo-box"></div>
            <div className="nav-bar-home"></div>
            <div className="place valign-text-middle">{place}</div>
            <Link to="/login">
              <img className="kisspng-netflix-stre-1" src={kisspngNetflixStreamingMediaTelevis} />
            </Link>
            <Link to="/content">
              <div className="nav-bar-tv-shows"></div>
            </Link>
            <div className="tv-shows valign-text-middle">{tvShows}</div>
            <Link to="/content">
              <div className="nav-bar-movies"></div>
            </Link>
            <div className="movies valign-text-middle">{movies}</div>
            <div className="nav-bar-my-list"></div>
            <div className="my-list valign-text-middle">{myList}</div>
            <div className="nav-bar-recently-added"></div>
            <div className="recently-added valign-text-middle">{recentlyAdded}</div>
          </div>
          <div className="overlap-group-container">
            <div className="overlap-group9">
              <div className="continue-watching"></div>
              <img className="continue-watching-1" src="/img/continue-watching---1@2x.svg" />
              <div className="continue-watching-1-1"></div>
              <div className="continue-watching-2"></div>
              <div className="continue-watching-3"></div>
              <Link to="/content">
                <img className="x02_nf_-the-witcher_" src={x02_Nf_Thewitcher_Socialskin_Facebo} />
              </Link>
              <Link to="/content">
                <img className="x63d275100591999-1" src={x63D2751005919991} />
              </Link>
              <Link to="/content">
                <img className="x158445-untitled-design-56-1" src={x158445UntitledDesign561} />
              </Link>
            </div>
            <div className="overlap-group14">
              <Link to="/content">
                <img className="arcane-image" src={arcaneimage} />
              </Link>
            </div>
            <div className="overlap-group15">
              <Link to="/content">
                <img className="dbk-qw-qo-uw-aa1r-si-1" src={dbkqwqouwaa1Rsi1} />
              </Link>
            </div>
            <div className="overlap-group4-1">
              <Link to="/content">
                <img className="oitnbp-1" src={oitnbp1} />
              </Link>
            </div>
          </div>
          <div className="overlap-group5-1">
            <img className="action" src="/img/action-1@2x.svg" />
          </div>
          <div className="overlap-group-3">
            <div className="drama-title-box"></div>
            <img className="drama-1" src="/img/drama-1@2x.svg" />
            <Link to="/content">
              <div className="action-1"></div>
            </Link>
            <Link to="/content">
              <div className="action-2"></div>
            </Link>
            <Link to="/content">
              <div className="action-3"></div>
            </Link>
            <img className="below-zero-netflix-review-1" src={belowZeroNetflixReview1} />
            <Link to="/content">
              <div className="action-4"></div>
            </Link>
            <img className="hard-kill-social-1" src={hardKillSocial1} />
            <Link to="/content">
              <div className="action-5"></div>
            </Link>
            <img className="sentinelle-netflix-review-1" src={sentinelleNetflixReview1} />
            <Link to="/content">
              <div className="action-6"></div>
            </Link>
            <img className="the-geek-furioza-nyito-664x335-1" src={thegeekFuriozaNyito664X3351} />
            <img className="aaaa-be-gz-xji0f-trc" src={aaaabegzxji0Ftrcqpcnphu8Jfxedkgxcwv} />
            <img className="aaaabzq-ddfql0-qm-j5" src={aaaabzqddfql0Qmj54Wwkmv3Agjjlowwrr_} />
          </div>
          <div className="overlap-group-container-1">
            <div className="overlap-group-1">
              <Link to="/content">
                <div className="drama"></div>
              </Link>
              <img className="x1705945-1" src={x17059451} />
            </div>
            <div className="overlap-group-2">
              <Link to="/content">
                <div className="link"></div>
              </Link>
              <img className="aaaab-wfruyo332-zb30" src={aaaabwfruyo332Zb30Lix2JiN_LcOc6Jurc} />
            </div>
            <div className="overlap-group-1">
              <Link to="/content">
                <div className="drama"></div>
              </Link>
              <img className="aaaab-zzke-u4cjmc-cm" src={aaaabzzkeu4Cjmccm4Gbvjoqeh1Lwpjqwil} />
            </div>
            <div className="overlap-group6">
              <Link to="/content">
                <div className="drama-4"></div>
              </Link>
              <img className="download-1" src={download1} />
            </div>
            <div className="overlap-group-2">
              <Link to="/content">
                <div className="link-1"></div>
              </Link>
              <img className="ecw62re60ape0ak33zce-1" src={ecw62Re60Ape0Ak33Zce1} />
            </div>
            <div className="overlap-group-1">
              <Link to="/content">
                <div className="link-2"></div>
              </Link>
              <img className="p8696131_b_h10_aa-1" src={p8696131_B_H10_Aa1} />
            </div>
          </div>
          <div className="overlap-group-container-2">
            <div className="overlap-group1">
              <div className="anime-title-box"></div>
              <img className="anime" src="/img/anime-1@2x.svg" />
              <Link to="/content">
                <div className="anime-1"></div>
              </Link>
              <img className="x4f69d2a6bde03a53970f6c08f8dfdea3-1" src={x4F69D2A6Bde03A53970F6C08F8Dfdea31} />
              <Link to="/content">
                <div className="anime-3"></div>
              </Link>
              <img className="aaaabx_kd-ld-f-ui-ee" src={aaaabx_Kdldfuieejnl3Xorajua8Ardfnn7} />
              <Link to="/content">
                <div className="anime-4"></div>
              </Link>
              <img className="aaaabzx54-ubxbxnvof" src={aaaabzx54UbxbxnvofwHc_7Oybhrb7B_8Yk} />
            </div>
            <div className="overlap-group11">
              <Link to="/content">
                <div className="link"></div>
              </Link>
              <img className="aaaa-bdj-d-fpvx-owf0" src={aaaabdjdfpvxowf0Iqf8Evdyljvgynchnid} />
            </div>
            <div className="overlap-group7">
              <Link to="/content">
                <div className="link-1"></div>
              </Link>
              <img className="hunter_x_hunter_by_xvrcardoso-d54co4a-1" src={hunter_X_Hunter_By_XvrcardosoD54Co4} />
            </div>
            <div className="overlap-group13">
              <Link to="/content">
                <div className="link-2"></div>
              </Link>
              <img className="is-my-hero-academia-on-netflix-1" src={isMyHeroAcademiaOnNetflix1} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HOME;
