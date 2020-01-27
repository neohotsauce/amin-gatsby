import React from "react";
import PropTypes from "prop-types";
import { IndexPageTemplate } from "../../templates/index-page";

const IndexPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <IndexPageTemplate
        banners={data.banners || []}
        mainpitch={data.mainpitch || {}}
        stats={data.stats || []}
        servicesIntro={data.servicesIntro || {}}
        projectsIntro={data.projectsIntro || {}}
        badges={data.brands || []}
        achievements={data.achievements || []}
        companies={data.companies || []}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

IndexPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default IndexPagePreview;
