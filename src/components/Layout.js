import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import useSiteMetadata from "./SiteMetadata";
import { withPrefix } from "gatsby";

import "bootstrap/dist/css/bootstrap.min.css";
import "./scrollbar.css";
import "./animate.css";
import "./styles.css";

const TemplateWrapper = ({ children }) => {
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

    const wowScript = document.createElement("script");
    wowScript.src = `${withPrefix("/")}js/wow.js`;
    wowScript.async = true;
    document.body.appendChild(wowScript);
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
          href={`${withPrefix("/")}img/apple-icon-57x57.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="60x60"
          href={`${withPrefix("/")}img/apple-icon-60x60.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href={`${withPrefix("/")}img/apple-icon-72x72.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="76x76"
          href={`${withPrefix("/")}img/apple-icon-76x76.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href={`${withPrefix("/")}img/apple-icon-114x114.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href={`${withPrefix("/")}img/apple-icon-120x120.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href={`${withPrefix("/")}img/apple-icon-144x144.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href={`${withPrefix("/")}img/apple-icon-152x152.png`}
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-icon-180x180.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href={`${withPrefix("/")}img/android-icon-192x192.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="96x96"
          href={`${withPrefix("/")}img/favicon-96x96.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
        />
        <link rel="manifest" href={`${withPrefix("/")}img/manifest.json`} />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta
          name="msapplication-TileImage"
          content={`${withPrefix("/")}img/ms-icon-144x144.png`}
        />
        <meta name="theme-color" content="#ffffff" />
        />
      </Helmet>
      <Navbar />
      <div>{children}</div>
      <Footer />
      <a href="#top" className="cd-top cd-is-visible cd-fade-out">
        <i className="fa fa-angle-up"></i>
      </a>
    </div>
  );
};

export default TemplateWrapper;
