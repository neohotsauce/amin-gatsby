import React from "react";
import PropTypes from "prop-types";
import { InvestmentPostTemplate } from "../../templates/investment-post";

const InvestmentPostPreview = ({ entry, widgetFor }) => {
  //   const data = entry.getIn(["data"]).toJS();

  return (
    <InvestmentPostTemplate
      contentEditor={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      title={entry.getIn(["data", "title"])}
      featuredimage={entry.getIn(["data", "featuredimage"])}
    />
  );
};

InvestmentPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default InvestmentPostPreview;
