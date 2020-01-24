import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "./layout/Footer";
import Navbar from "../components/Navbar";

import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scrollbar.css";
import "./animate.css";
import "./style.css";

const TemplateWrapper = ({ children, location, pageContext }) => {
  const { title, description } = useSiteMetadata();

  useEffect(() => {
    const jqueryScript = document.createElement("script");
    jqueryScript.src = `https://code.jquery.com/jquery-3.4.1.min.js`;
    jqueryScript.integrity =
      "sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=";
    jqueryScript.crossOrigin = "anonymous";
    jqueryScript.async = true;
    document.body.appendChild(jqueryScript);

    const popperScript = document.createElement("script");
    popperScript.src = `https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js`;
    popperScript.integrity =
      "sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1";
    popperScript.crossOrigin = "anonymous";
    popperScript.async = true;
    document.body.appendChild(popperScript);

    const bootstrap = document.createElement("script");
    bootstrap.src = `https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js`;
    bootstrap.integrity =
      "sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM";
    bootstrap.crossOrigin = "anonymous";
    bootstrap.async = true;
    document.body.appendChild(bootstrap);

    const customScript = document.createElement("script");
    customScript.src = `${withPrefix("/")}js/custom.js`;
    customScript.async = true;
    document.body.appendChild(customScript);

    const menuScript = document.createElement("script");
    menuScript.src = `${withPrefix("/")}js/menu.js`;
    menuScript.async = true;
    document.body.appendChild(menuScript);

    const ssScript = document.createElement("script");
    ssScript.src = `${withPrefix("/")}js/smoothscroll.js`;
    ssScript.async = true;
    document.body.appendChild(ssScript);
  }, []);

  return (
    <div id="top">
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <link
          rel="apple-touch-icon"
          sizes="57x57"
          href={`${withPrefix("/")}img/fav/apple-icon-57x57.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={`${withPrefix("/")}img/fav/apple-icon-60x60.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${withPrefix("/")}img/fav/apple-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${withPrefix("/")}img/fav/apple-icon-76x76.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${withPrefix("/")}img/fav/apple-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${withPrefix("/")}img/fav/apple-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${withPrefix("/")}img/fav/apple-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${withPrefix("/")}img/fav/apple-icon-152x152.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/fav/apple-icon-180x180.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${withPrefix("/")}img/fav/android-icon-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${withPrefix("/")}img/fav/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${withPrefix("/")}img/fav/favicon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${withPrefix("/")}img/fav/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${withPrefix("/")}img/fav/manifest.json`} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content={`${withPrefix("/")}img/fav/ms-icon-144x144.png`}
        />
        <meta name="theme-color" content="#ffffff" />
        <link
          href="https://fonts.googleapis.com/css?family=Muli&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Playfair+Display+SC&display=swap"
          rel="stylesheet"
        />
        />
      </Helmet>
      <Navbar location={location} pageContext={pageContext} />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
