import React, { useEffect } from "react";
import * as mdc from "material-components-web";
import styled from "styled-components";
import { RobotoNormalBlack16px } from "../../styledMixins";
import "./FrequentlyAskedQuestionsContainer.css";

function FrequentlyAskedQuestionsContainer(props) {
  const { className } = props;

  useEffect(() => {
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis-1 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis-2 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis-3 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis-4 .mdc-select"));
    new mdc.select.MDCSelect(document.querySelector(".drop-down-filled-dis-5 .mdc-select"));
  }, []);

  return (
    <FrequentlyAskedQuestionsContainer1 className={`frequently-asked-questions-container ${className || ""}`}>
      <OverlapGroup1 className="overlap-group1-4">
        <OverlapGroup className="overlap-group-4">
          <Rectangle98 className="rectangle-98"></Rectangle98>
          <Rectangle99 className="rectangle-99"></Rectangle99>
          <Rectangle101 className="rectangle-101"></Rectangle101>
          <Rectangle103 className="rectangle-103"></Rectangle103>
          <Rectangle102 className="rectangle-102"></Rectangle102>
          <Rectangle104 className="rectangle-104"></Rectangle104>
          <Rectangle105 className="rectangle-105"></Rectangle105>
        </OverlapGroup>
        <div className="drop-down-filled-dis">
          <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
            <div
              className="mdc-select__anchor custom-enhanced-select-width"
              role="button"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span className="mdc-select__ripple"></span>
              <span id="demo-label" className="mdc-floating-label">
                What is Netflix?
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
                <li className="mdc-list-item " data-value="Item" role="option">
                  <span className="mdc-list-item__ripple"></span> <span className="mdc-list-item__text">Item</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drop-down-filled-dis-1">
          <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
            <div
              className="mdc-select__anchor custom-enhanced-select-width"
              role="button"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span className="mdc-select__ripple"></span>
              <span id="demo-label" className="mdc-floating-label">
                How much does Netflix cost?
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
                <li
                  className="mdc-list-item "
                  data-value="Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts."
                  role="option"
                >
                  <span className="mdc-list-item__ripple"></span>
                  <span className="mdc-list-item__text">
                    Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed
                    monthly fee. Plans range from $9.99 to $19.99 a month. No extra costs, no contracts.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drop-down-filled-dis-2">
          <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
            <div
              className="mdc-select__anchor custom-enhanced-select-width"
              role="button"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span className="mdc-select__ripple"></span>
              <span id="demo-label" className="mdc-floating-label">
                Where can I watch?
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
                <li
                  className="mdc-list-item "
                  data-value="Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.  You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you&#39;re on the go and without an internet connection. Take Netflix with you anywhere."
                  role="option"
                >
                  <span className="mdc-list-item__ripple"></span>
                  <span className="mdc-list-item__text">
                    Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at
                    netflix.com from your personal computer or on any internet-connected device that offers the Netflix
                    app, including smart TVs, smartphones, tablets, streaming media players and game consoles. You can
                    also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch
                    while you&#39;re on the go and without an internet connection. Take Netflix with you anywhere.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Object className="object">
          <Input className="input">
            <Label className="label-1">How much does Netflix cost?</Label>
          </Input>
          <Icon className="icon" src="/img/icon-4@2x.svg" />
        </Object>
        <div className="drop-down-filled-dis-3">
          <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
            <div
              className="mdc-select__anchor custom-enhanced-select-width"
              role="button"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span className="mdc-select__ripple"></span>
              <span id="demo-label" className="mdc-floating-label">
                How do i cancel?
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
                <li
                  className="mdc-list-item "
                  data-value="Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
                  role="option"
                >
                  <span className="mdc-list-item__ripple"></span>
                  <span className="mdc-list-item__text">
                    Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your
                    account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drop-down-filled-dis-4">
          <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
            <div
              className="mdc-select__anchor custom-enhanced-select-width"
              role="button"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span className="mdc-select__ripple"></span>
              <span id="demo-label" className="mdc-floating-label">
                What can I watch on Netflix?
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
                <li
                  className="mdc-list-item "
                  data-value="Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
                  role="option"
                >
                  <span className="mdc-list-item__ripple"></span>
                  <span className="mdc-list-item__text">
                    Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning
                    Netflix originals, and more. Watch as much as you want, anytime you want.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="drop-down-filled-dis-5">
          <div className="mdc-select   mdc-select--filled  demo-width-class" data-id="anima-widget">
            <div
              className="mdc-select__anchor custom-enhanced-select-width"
              role="button"
              aria-haspopup="listbox"
              aria-expanded="false"
            >
              <span className="mdc-select__ripple"></span>
              <span id="demo-label" className="mdc-floating-label">
                Is Netflix good for kids?
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
                <li
                  className="mdc-list-item "
                  data-value="The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.  Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see."
                  role="option"
                >
                  <span className="mdc-list-item__ripple"></span>
                  <span className="mdc-list-item__text">
                    The Netflix Kids experience is included in your membership to give parents control while kids enjoy
                    family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected
                    parental controls that let you restrict the maturity rating of content kids can watch and block
                    specific titles you don't want kids to see.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </OverlapGroup1>
    </FrequentlyAskedQuestionsContainer1>
  );
}

const FrequentlyAskedQuestionsContainer1 = styled.div`
  position: absolute;
  height: 587px;
  top: 0;
  left: 0;
  display: flex;
  padding: 90px 301px;
  justify-content: flex-end;
  align-items: flex-start;
  min-width: 1440px;
  background-color: var(--black);
`;

const OverlapGroup1 = styled.div`
  width: 838px;
  height: 344px;
  position: relative;
`;

const OverlapGroup = styled.div`
  position: absolute;
  width: 838px;
  height: 341px;
  top: 2px;
  left: 0;
`;

const Rectangle98 = styled.div`
  position: absolute;
  width: 836px;
  height: 340px;
  top: 1px;
  left: 1px;
  background-color: var(--black);
`;

const Rectangle99 = styled.div`
  position: absolute;
  width: 837px;
  height: 49px;
  top: 0;
  left: 1px;
  background-color: var(--black);
`;

const Rectangle101 = styled.div`
  position: absolute;
  width: 837px;
  height: 49px;
  top: 58px;
  left: 0;
  background-color: var(--black);
`;

const Rectangle103 = styled.div`
  position: absolute;
  width: 837px;
  height: 49px;
  top: 117px;
  left: 0;
  background-color: var(--black);
`;

const Rectangle102 = styled.div`
  position: absolute;
  width: 837px;
  height: 49px;
  top: 175px;
  left: 0;
  background-color: var(--black);
`;

const Rectangle104 = styled.div`
  position: absolute;
  width: 837px;
  height: 49px;
  top: 234px;
  left: 0;
  background-color: var(--black);
`;

const Rectangle105 = styled.div`
  position: absolute;
  width: 837px;
  height: 49px;
  top: 292px;
  left: 1px;
  background-color: var(--black);
`;

const Object = styled.div`
  display: flex;
  width: 838px;
  height: 51px;
  position: absolute;
  top: 60px;
  left: 0;
  align-items: center;
  gap: 14px;
  padding-top: 8px;
  padding-right: 16px;
  padding-bottom: 8px;
  padding-left: 16px;
  background-color: var(--cultured-pearl);
  border-radius: 4px 4px 0px 0px;
`;

const Input = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  align-self: stretch;
  flex: 1;
`;

const Label = styled.p`
  ${RobotoNormalBlack16px}
  height: 14px;
  width: 212px;
  letter-spacing: 0.15px;
  line-height: 24px;
  white-space: nowrap;
`;

const Icon = styled.img`
  height: 24px;
  width: 24px;
`;

const Rectangle991 = styled.div`
  .frequently-asked-questions-container.frequently-asked-questions-container-1 & {
    background-color: var(--sunglo);
  }
`;

const Rectangle992 = styled.div`
  .frequently-asked-questions-container.frequently-asked-questions-container-2 & {
    background-color: var(--sunglo);
  }
`;

export default FrequentlyAskedQuestionsContainer;
