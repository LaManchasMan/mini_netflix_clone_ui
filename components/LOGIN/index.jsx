import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import * as mdc from "material-components-web";
import styled from "styled-components";
import {
  InterNormalMistGray12px,
  InterNormalWhite30px,
  ValignTextBottom,
  InterNormalWhite12px,
  ValignTextMiddle,
} from "../../styledMixins";
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
        <OverlapGroup4 style={{ backgroundImage: `url(${overlapGroup4})` }}>
          <Link to="/home">
            <KisspngNetflixStreamingMediaTelevis src={kisspngNetflixStreamingMediaTelevis} />
          </Link>
          <SignInComponentCOMPLETE>
            <SignIn>{signIn1}</SignIn>
            <EmailPWComponent>
              <EmailBox>
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
              </EmailBox>
              <OverlapGroup>
                <a href="javascript:SubmitForm('form1')">
                  <Rectangle61></Rectangle61>
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
              </OverlapGroup>
            </EmailPWComponent>
            <OverlapGroup2>
              <Link to="/home">
                <SignIn1>{signIn2}</SignIn1>
              </Link>
            </OverlapGroup2>
            <FlexRow>
              <CheckBox></CheckBox>
              <RememberMe>{rememberMe}</RememberMe>
              <NeedHelp>{needHelp}</NeedHelp>
            </FlexRow>
            <OverlapGroup3>
              <NewToNetflix>{newToNetflix}</NewToNetflix>
              <Link to="/sign-up">
                <SignUpNow>
                  <SignContainer>
                    <Link to="/sign-up">
                      <SignUpNowBox></SignUpNowBox>
                    </Link>
                    <Link to="/sign-up">
                      <SignUpNow1>{signUpNow}</SignUpNow1>
                    </Link>
                  </SignContainer>
                </SignUpNow>
              </Link>
            </OverlapGroup3>
            <ThisPageIsProtect>{thisPageIsProtect}</ThisPageIsProtect>
          </SignInComponentCOMPLETE>
          <OverlapGroup5>
            <FlexCol>
              <QuestionsCall18445052993>{questionsCall18445052993}</QuestionsCall18445052993>
              <FAQ>{faq}</FAQ>
              <CookiePreferences>{cookiePreferences}</CookiePreferences>
            </FlexCol>
            <FlexCol1>
              <HelpCenter>{helpCenter}</HelpCenter>
              <CorporateInformation>{corporateInformation}</CorporateInformation>
            </FlexCol1>
            <TermsOfUse>{termsOfUse}</TermsOfUse>
            <TermsOfUse>{privacy}</TermsOfUse>
          </OverlapGroup5>
        </OverlapGroup4>
      </form>
    </div>
  );
}

const OverlapGroup4 = styled.div`
  width: 1440px;
  display: flex;
  flex-direction: column;
  padding: 0px 0;
  align-items: flex-start;
  min-height: 1024px;
  background-color: #3633338a;
  background-size: cover;
  background-position: 50% 50%;
`;

const KisspngNetflixStreamingMediaTelevis = styled.img`
  width: 253px;
  height: 80px;
  margin-top: 36px;
  margin-left: 37px;
  transition: all 0.2s ease;
  object-fit: cover;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;

const SignInComponentCOMPLETE = styled.div`
  width: 351px;
  align-self: center;
  margin-top: 145px;
  margin-right: 9px;
  display: flex;
  flex-direction: column;
  padding: 51px 36px;
  align-items: center;
  min-height: 500px;
  background-color: #00000075;
  border-radius: 9px;
`;

const SignIn = styled.div`
  ${InterNormalWhite30px}
  width: 167px;
  min-height: 40px;
  align-self: flex-start;
  margin-left: 15px;
  letter-spacing: 0;
`;

const EmailPWComponent = styled.div`
  width: 271px;
  align-self: flex-end;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  padding: 3px 7px;
  align-items: flex-start;
  min-height: 112px;
`;

const EmailBox = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 250px;
  background-color: var(--dove-gray);
  border-radius: 4px;
`;

const OverlapGroup = styled.div`
  width: 250px;
  height: 42px;
  position: relative;
  margin-top: 12px;
`;

const Rectangle61 = styled.div`
  position: absolute;
  width: 250px;
  height: 42px;
  top: 0;
  left: 0;
  background-color: var(--dove-gray);
  border-radius: 4px;
  cursor: pointer;
`;

const OverlapGroup2 = styled.div`
  margin-top: 17px;
  display: flex;
  align-items: flex-start;
  min-width: 249px;
  background-color: var(--tamarillo);
  border-radius: 4px;
`;

const SignIn1 = styled.div`
  ${ValignTextMiddle}
  width: 249px;
  height: 42px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: var(--white);
  font-size: var(--font-size-xxxl);
  text-align: center;
  letter-spacing: 0;
  cursor: pointer;
`;

const FlexRow = styled.div`
  margin-top: 12px;
  margin-left: 4px;
  display: flex;
  align-items: flex-start;
  min-width: 245px;
`;

const CheckBox = styled.div`
  width: 17px;
  height: 12px;
  background-image: url(/img/object@2x.svg);
  background-size: 100% 100%;
`;

const RememberMe = styled.div`
  ${ValignTextMiddle}
  width: 83px;
  height: 12px;
  margin-left: 6px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: var(--gray);
  font-size: 12px;
  letter-spacing: 0;
`;

const NeedHelp = styled.div`
  ${ValignTextMiddle}
  ${InterNormalWhite12px}
            width: 69px;
  height: 12px;
  margin-left: 70px;
  text-align: center;
  letter-spacing: 0;
`;

const OverlapGroup3 = styled.div`
  width: 169px;
  height: 12px;
  position: relative;
  margin-top: 85px;
  margin-right: 72px;
`;

const NewToNetflix = styled.div`
  ${ValignTextMiddle}
  ${InterNormalWhite12px}
            position: absolute;
  width: 91px;
  height: 12px;
  top: 0;
  left: 0;
  letter-spacing: 0;
`;

const SignUpNow = styled.div`
  position: absolute;
  height: 12px;
  top: 0;
  left: 88px;
  display: flex;
  align-items: flex-start;
  min-width: 81px;
  cursor: pointer;
`;

const SignContainer = styled.div`
  width: 79px;
  height: 12px;
  position: relative;
`;

const SignUpNowBox = styled.div`
  position: absolute;
  width: 71px;
  height: 12px;
  top: 0;
  left: 0;
  border-radius: 1px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: #ff0000;
  }
`;

const SignUpNow1 = styled.div`
  ${ValignTextMiddle}
  ${InterNormalWhite12px}
            position: absolute;
  width: 73px;
  height: 1px;
  top: 5px;
  left: 6px;
  transition: all 0.2s ease;
  letter-spacing: 0;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`;

const ThisPageIsProtect = styled.p`
  width: 249px;
  min-height: 23px;
  margin-top: 6px;
  margin-left: 12px;
  font-family: var(--font-family-inter);
  font-weight: 400;
  color: var(--mist-gray);
  font-size: var(--font-size-m);
  letter-spacing: 0;
`;

const OverlapGroup5 = styled.div`
  ${InterNormalMistGray12px}
  height: 219px;
  margin-top: 44px;
  display: flex;
  padding: 57.6px 290px;
  align-items: center;
  min-width: 1440px;
  background-color: #0000009e;
`;

const FlexCol = styled.div`
  width: 213px;
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 97px;
`;

const QuestionsCall18445052993 = styled.div`
  ${ValignTextMiddle}
  width: 213px;
  height: 27px;
  letter-spacing: 0;
`;

const HelpCenter = styled.div`
  ${ValignTextBottom}
  width: 213px;
  height: 27px;
  letter-spacing: 0;
`;

const FAQ = styled.div`
  ${ValignTextBottom}
  width: 213px;
  height: 27px;
  margin-top: 16px;
  letter-spacing: 0;
`;

const CookiePreferences = styled.div`
  ${ValignTextBottom}
  width: 212px;
  height: 27px;
  letter-spacing: 0;
`;

const FlexCol1 = styled.div`
  ${InterNormalMistGray12px}
  width: 213px;
  align-self: flex-end;
  margin-bottom: 5.38px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-height: 55px;
`;

const CorporateInformation = styled.div`
  ${ValignTextBottom}
  width: 212px;
  height: 28px;
  letter-spacing: 0;
`;

const TermsOfUse = styled.div`
  ${ValignTextBottom}
  width: 213px;
  height: 27px;
  margin-top: 9.62px;
  letter-spacing: 0;
`;

export default LOGIN;
