import React from "react";
import PropTypes from "prop-types";
import { NewsPostTemplate } from "../../templates/news-post";

const NewsPostPreview = ({ entry, widgetFor }) => {
  //   const data = entry.getIn(["data"]).toJS();

  return (
    <NewsPostTemplate
      contentEditor={widgetFor("body")}
      title={entry.getIn(["data", "title"])}
      description={entry.getIn(["data", "description"])}
      featuredimage={entry.getIn(["data", "featuredimage"]) || {}}
      date={entry.getIn(["data", "date"])}
    />
  );
};

NewsPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default NewsPostPreview;
