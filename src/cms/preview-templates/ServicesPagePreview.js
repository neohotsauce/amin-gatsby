import React from "react";
import PropTypes from "prop-types";
import { ServicesPageTemplate } from "../../templates/services-page";

const ServicesPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <ServicesPageTemplate
        banner={data.banner || {}}
        services={data.services || []}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

ServicesPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ServicesPagePreview;
