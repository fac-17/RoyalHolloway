import React from "react";
import { preparationContent } from "./preparationTips.json";

const PreparationTips = () => {
  const [
    currentPreparationTipIndex,
    updatePreparationTipIndex
  ] = React.useState(0);

  const nextTip = () => {
    if (currentPreparationTipIndex < preparationContent.length - 1) {
      updatePreparationTipIndex(currentIndex => currentIndex + 1);
    } else {
      updatePreparationTipIndex(0);
    }
  };

  return (
    <div id="my-appointment__page-one" onClick={nextTip}>
      <p>{preparationContent[currentPreparationTipIndex].tip}</p>
    </div>
  );
};

export default PreparationTips;
