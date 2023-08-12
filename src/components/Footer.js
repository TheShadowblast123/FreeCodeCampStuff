import React from "../../_snowpack/pkg/react.js";
function Icon(props) {
  return /* @__PURE__ */ React.createElement("div", {
    className: " container items-center"
  }, /* @__PURE__ */ React.createElement("a", {
    href: props.link
  }, /* @__PURE__ */ React.createElement("img", {
    src: props.image,
    alt: props.desc,
    width: "20%",
    className: props.style
  })));
}
const Footer = () => {
  return /* @__PURE__ */ React.createElement("footer", {
    className: " bg-black"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "rounded-lg text-center p-10 sm:p-24 md:p-24 lg:p-24 "
  }, /* @__PURE__ */ React.createElement("h2", {
    className: " text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
  }, "Impressed? Get in contact!"), /* @__PURE__ */ React.createElement("p", {
    className: " text-center pt-4 text-sm lg:text-md 2xl:text-xl text-white font-bold"
  }, "Here's the best ways!")), /* @__PURE__ */ React.createElement("div", {
    className: "container rounded-lg bg-gray-900 grid grid-flow-col mx-auto p-8"
  }, /* @__PURE__ */ React.createElement(Icon, {
    image: "https://cdn1.iconfinder.com/data/icons/smallicons-logotypes/32/yahoo-512.png",
    link: "mailto:theshadowblast123@yahoo.com?subject = Work&body = message",
    desc: "Email",
    style: "invert-0 mx-auto"
  }), /* @__PURE__ */ React.createElement(Icon, {
    image: "https://static-00.iconduck.com/assets.00/github-icon-2048x1988-jzvzcf2t.png",
    link: "https://github.com/theshadowblast123",
    desc: "GitHub",
    style: "invert-0 mx-auto"
  }), /* @__PURE__ */ React.createElement(Icon, {
    image: "https://cdn.cms-twdigitalassets.com/content/dam/about-twitter/x/brand-toolkit/logo-black.png.twimg.2560.png",
    link: "https://twitter.com/TheShadowblast",
    desc: "Twitter",
    style: "invert mx-auto"
  }), /* @__PURE__ */ React.createElement(Icon, {
    image: "https://www.svgrepo.com/show/144030/linkedin-square-logo.svg",
    link: "https://www.linkedin.com/in/anthony-ewell-329aaa132",
    desc: "Linkedin",
    style: "invert mx-auto"
  })));
};
export default Footer;
