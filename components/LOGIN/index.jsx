import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as mdc from "material-components-web";
import "./LOGIN.css";

function LOGIN(props) {
  const {
    overlapGroup4,
    kisspngNetflixStreamingMediaTelevis,
    signIn1,
    signIn2,
    rememberMe,
    needHelp,
    newToNetflix,
    signUpNow,
    thisPageIsProtect,
    questionsCall18445052993,
    faq,
    cookiePreferences,
    helpCenter,
    corporateInformation,
    termsOfUse,
    privacy,
  } = props;

  useEffect(() => {
    new mdc.textField.MDCTextField(document.querySelector(".text-field-filled-di .mdc-text-field"));
    new mdc.textField.MDCTextField(document.querySelector(".password .mdc-text-field"));
  }, []);

  return (
    <div className="container-center-horizontal">
      <form className="login screen" name="form1" action="form1" method="post">
        <div className="overlap-group4-1" style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <Link to="/home">
            <img className="kisspng-netflix-stre-3" src={kisspngNetflixStreamingMediaTelevis} />
          </Link>
          <div className="sign-in-component-complete">
            <div className="sign-in inter-normal-white-30px">{signIn1}</div>
            <div className="email-pw-component">
              <div className="email-box">
                <div className="text-field-filled-di">
                  <label className="mdc-text-field mdc-text-field--filled">
                    <span className="mdc-text-field__ripple"></span>{" "}
                    <span className="mdc-floating-label" id="my-label-id">
                      Email
                    </span>
                    <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                    <span className="mdc-line-ripple"></span>
                  </label>
                </div>
              </div>
              <div className="overlap-group-4">
                <a href="javascript:SubmitForm('form1')">
                  <div className="rectangle-61"></div>
                </a>
                <div className="password">
                  <label className="mdc-text-field mdc-text-field--filled mdc-text-field--with--icon ">
                    <span className="mdc-text-field__ripple"></span>
                    <span className="mdc-floating-label" id="my-label-id">
                      Password
                    </span>
                    <input type="text" className="mdc-text-field__input" aria-labelledby="my-label-id" />
                    <span className="mdc-line-ripple"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="overlap-group2-1">
              <Link to="/home">
                <div className="sign-in-1 valign-text-middle">{signIn2}</div>
              </Link>
            </div>
            <div className="flex-row">
              <div className="check-box"></div>
              <div className="remember-me valign-text-middle">{rememberMe}</div>
              <div className="need-help valign-text-middle inter-normal-white-12px">{needHelp}</div>
            </div>
            <div className="overlap-group3-2">
              <div className="new-to-netflix valign-text-middle inter-normal-white-12px">{newToNetflix}</div>
              <Link to="/sign-up">
                <div className="sign-up-now">
                  <div className="sign-container">
                    <Link to="/sign-up">
                      <div className="sign-up-now-box"></div>
                    </Link>
                    <Link to="/sign-up">
                      <div className="sign-up-now-1 valign-text-middle inter-normal-white-12px">{signUpNow}</div>
                    </Link>
                  </div>
                </div>
              </Link>
            </div>
            <p className="this-page-is-protect">{thisPageIsProtect}</p>
          </div>
          <div className="overlap-group5-1 inter-normal-mist-gray-12px">
            <div className="flex-col">
              <div className="questions-call-1-844-505-2993 valign-text-middle">{questionsCall18445052993}</div>
              <div className="faq valign-text-bottom">{faq}</div>
              <div className="cookie-preferences valign-text-bottom">{cookiePreferences}</div>
            </div>
            <div className="flex-col-1 inter-normal-mist-gray-12px">
              <div className="help-center valign-text-bottom">{helpCenter}</div>
              <div className="corporate-information valign-text-bottom">{corporateInformation}</div>
            </div>
            <div className="overlap-group5-item valign-text-bottom">{termsOfUse}</div>
            <div className="overlap-group5-item valign-text-bottom">{privacy}</div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default LOGIN;
