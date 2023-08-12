import React from "../_snowpack/pkg/react.js";
import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
const App = (props) => {
  if (props.page == "index") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "bg-gray-900 m-8"
    }, /* @__PURE__ */ React.createElement(Header, {
      text: "A programmer"
    }), /* @__PURE__ */ React.createElement(Main, {
      heading: "Here are some of my certificates",
      subtext: "from Sololearn and freeCodeCamp",
      subsubtext: "They'll lead you to relevant projects!"
    }), /* @__PURE__ */ React.createElement(Footer, null));
  }
  if (props.page == "web") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "bg-gray-900 m-8"
    }, /* @__PURE__ */ React.createElement(Header, {
      text: "As a Web Developer"
    }), /* @__PURE__ */ React.createElement(Main, {
      heritage: "web",
      heading: "Here are some of my Web projects",
      subtext: "",
      subsubtext: ""
    }), /* @__PURE__ */ React.createElement(Footer, null));
  }
  if (props.page == "sql") {
    return /* @__PURE__ */ React.createElement("div", {
      className: "bg-gray-900 m-8"
    }, /* @__PURE__ */ React.createElement(Header, {
      text: "As a Data Analyst"
    }), /* @__PURE__ */ React.createElement(Main, {
      heritage: "sql",
      heading: "Here are some of my Python and SQL certificates",
      subtext: "And below are projects!",
      subsubtext: ""
    }), /* @__PURE__ */ React.createElement(Footer, null));
  }
};
export default App;
