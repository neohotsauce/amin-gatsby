import React from "react";
import PropTypes from "prop-types";
import { ContactPageTemplate } from "../../templates/contact-page";

const ContactPagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(["data"]).toJS();

  if (data) {
    return (
      <ContactPageTemplate
        banner={data.banner || {}}
        headoffice={data.headoffice || {}}
        companies={data.companies || []}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

ContactPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  getAsset: PropTypes.func
};

export default ContactPagePreview;
