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
};

export const animationPhases = {
  phaseZero: animationTimeline.pageTransDurationX,
  about: {
    phaseOne: calcAboutPhaseOne(),
    phaseTwo: calcAboutPhaseTwo(),
  },
};
