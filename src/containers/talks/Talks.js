import React, {useContext} from "react";
import "./Talks.scss";
import TalkCard from "../../components/talkCard/TalkCard";
// import {talkSection} from "../../portfolio"; // Commented out because talkSection is removed
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const {isDark} = useContext(StyleContext);

  // Commented out the check for talkSection.display since talkSection is removed
  // if (!talkSection.display) {
  //   return null;
  // }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <div className="talk-header">
          {/* Commented out because talkSection.title is not defined */}
          {/* <h1 className="talk-header-title">{talkSection.title}</h1> */}
          {/* 
          <p
            className={
              isDark
                ? "dark-mode talk-header-subtitle"
                : "subTitle talk-header-subtitle"
            }
          >
            {talkSection.subtitle}
          </p>
          */}
          {/* Commented out because talkSection.talks.map is not defined */}
          {/* {talkSection.talks.map((talk, i) => {
            return (
              <TalkCard
                key={i}
                talkDetails={{
                  title: talk.title,
                  subtitle: talk.subtitle,
                  slides_url: talk.slides_url,
                  event_url: talk.event_url,
                  image: talk.image,
                  isDark
                }}
              />
            );
          })} */}
        </div>
      </div>
    </Fade>
  );
}
