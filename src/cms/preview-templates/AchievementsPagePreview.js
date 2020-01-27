import React from "react";
import PropTypes from "prop-types";
import { AchievementsPageTemplate } from "../../templates/achievements-page";

const AchievementsPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <AchievementsPageTemplate
        banner={data.banner || {}}
        achievements={data.achievements || []}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

AchievementsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default AchievementsPagePreview;
