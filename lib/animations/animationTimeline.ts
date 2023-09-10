const calcAboutPhaseOne = () => {
  return (
    animationTimeline.pageTransDurationX +
    animationTimeline.about.highlightDuration +
    animationTimeline.about.highlightDelay *
      animationTimeline.about.highlightsCount
  );
};
const calcAboutPhaseTwo = () => {
  return (
    calcAboutPhaseOne() +
    animationTimeline.about.timelineItemsDuration +
    animationTimeline.about.timelineItemsDelay *
      animationTimeline.about.timelineItemsCount
  );
};

const calcContactPhaseOne = () => {
  return (
    animationTimeline.pageTransDurationX +
    animationTimeline.contact.highlightDuration +
    animationTimeline.contact.highlightDelay *
      animationTimeline.contact.highlightsCount
  );
};

const calcMobileNavPhaseOne = () => {
  return animationTimeline.mobileNav.fadeInDuration;
};

const calcMobileNavPhaseTwo = () => {
  return (
    calcMobileNavPhaseOne() +
    animationTimeline.mobileNav.linkDuration +
    animationTimeline.mobileNav.linkDelay *
      animationTimeline.mobileNav.linkCount
  );
};

/**
 * Animations go in phases, which have certain duration
 * Phase zero is universal for every page and is page transition
 */
export const animationTimeline = {
  // Universal phase zero for all page animations
  pageTransDurationX: 0.25,
  pageTransDurationOpacity: 0.25,
  about: {
    highlightDelay: 0.25,
    highlightsCount: 3, //This needs to be updated manualy sucks
    highlightDuration: 0.3,
    timelineItemsDelay: 0.1,
    timelineItemsDuration: 0.2,
    timelineItemsCount: 2, //Manualy
  },
  projects: {
    projectCardDelay: 0.1,
    projectCardDuration: 0.2,
    projectCardCount: 2, //Manualy
  },
  contact: {
    highlightDelay: 0.25,
    highlightsCount: 3, //This needs to be updated manualy sucks
    highlightDuration: 0.3,
    socialLinkDelay: 0.1,
    socialLinkDuration: 0.2,
    socialLinkCount: 3, //Manualy
  },
  mobileNav: {
    fadeInDuration: 0.5,
    linkDuration: 0.15,
    linkDelay: 0.1,
    activeLinkDuration: 0.5,
    linkCount: 3, //Manual
  },
};

export const animationPhases = {
  phaseZero: animationTimeline.pageTransDurationX,
  about: {
    phaseOne: calcAboutPhaseOne(),
    phaseTwo: calcAboutPhaseTwo(),
  },
  contact: {
    phaseOne: calcContactPhaseOne(),
  },
  mobileNav: {
    phaseOne: calcMobileNavPhaseOne(),
    phaseTwo: calcMobileNavPhaseTwo(),
  },
};
