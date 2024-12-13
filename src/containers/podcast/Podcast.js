import React, { useContext } from "react";
import "./Podcast.scss";
// import { podcastSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const { isDark } = useContext(StyleContext);

  // if (!podcastSection)
  //   console.error("podcastSection object for Podcast section is missing");

  // if (!podcastSection.display) {
  //   return null;
  // }

  return null; // Return null since the section is disabled
}
