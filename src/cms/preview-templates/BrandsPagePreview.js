import React from "react";
import PropTypes from "prop-types";
import { BrandsPageTemplate } from "../../templates/brands-page";

const BrandsPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <BrandsPageTemplate
        banner={data.banner || {}}
        brands={data.brands || []}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

BrandsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default BrandsPagePreview;
