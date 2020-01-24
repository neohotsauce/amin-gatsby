import React from "react";
import PropTypes from "prop-types";
import { DevelopmentPostTemplate } from "../../templates/development-post";

const DevelopmentPostPreview = ({ entry, widgetFor }) => {
  //   const data = entry.getIn(["data"]).toJS();

  return (
    <DevelopmentPostTemplate
      contentEditor={widgetFor("body")}
      title={entry.getIn(["data", "title"])}
      featuredimage={entry.getIn(["data", "featuredimage"])}
    />
  );
};

DevelopmentPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default DevelopmentPostPreview;
