import React from "../../_snowpack/pkg/react.js";
const Header = (props) => {
  return /* @__PURE__ */ React.createElement("header", {
    className: " bg-gray-900 "
  }, /* @__PURE__ */ React.createElement("div", {
    className: " rounded-lg text-center p-10 sm:p-24 md:p-24 lg:p-24 "
  }, /* @__PURE__ */ React.createElement("h1", {
    className: " text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl"
  }, "Anthony Ewell"), /* @__PURE__ */ React.createElement("p", {
    className: " text-center pt-4 text-xs lg:text-sm 2xl:text-xl  font-mono italic"
  }, " ", props.text)));
};
export default Header;
