import React from "../../_snowpack/pkg/react.js";
function Tile(props) {
  return /* @__PURE__ */ React.createElement("div", {
    className: " p-2"
  }, /* @__PURE__ */ React.createElement("a", {
    href: props.link
  }, /* @__PURE__ */ React.createElement("img", {
    src: props.image,
    width: "100%",
    alt: props.desc,
    className: " rounded-lg sm:rounded-xl  border-black hover:border-red-500 border-2 certificate mx-auto"
  })));
}
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "  rounded-lg bg-gray-900 grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-2 grid p-8"
  }, /* @__PURE__ */ React.createElement(Tile, {
    image: "https://api2.sololearn.com/v2/certificates/CC-5FHRBPC5/image/png",
    desc: "Sololearn Javascript Intermediate Certificate",
    link: "./web.html#web"
  }), /* @__PURE__ */ React.createElement(Tile, {
    image: "https://api2.sololearn.com/v2/certificates/CC-XZ5VYIRP/image/png",
    desc: "Sololearn SQL Introduction Certificate",
    link: "./sql.html"
  }), /* @__PURE__ */ React.createElement(Tile, {
    image: "https://api2.sololearn.com/v2/certificates/CC-4ULTJ16U/image/png",
    desc: "Sololearn Javascript Introduction Certificate",
    link: "./web.html#web"
  }), /* @__PURE__ */ React.createElement(Tile, {
    image: "https://api2.sololearn.com/v2/certificates/CC-QAYLSDMT/image/png",
    desc: "Sololearn CSS Introduction Certificate",
    link: "./web.html#web"
  }), /* @__PURE__ */ React.createElement(Tile, {
    image: "https://api2.sololearn.com/v2/certificates/CC-IP6MDCTZ/image/png",
    desc: "Sololearn HTML Introduction Certificate",
    link: "./web.html#web"
  }), /* @__PURE__ */ React.createElement(Tile, {
    image: "./media/js_cert.jpg",
    desc: "freeCodeCamp Javascript Certificate",
    link: "./web.html#web"
  }), /* @__PURE__ */ React.createElement(Tile, {
    image: "./media/python_cert.jpg",
    desc: "freeCodeCamp python Certificate",
    link: "./sql.html"
  }), /* @__PURE__ */ React.createElement(Tile, {
    image: "./media/web_cert.jpg",
    desc: "freeCodeCamp Web Development Certificate",
    link: "./web.html#web"
  }));
}
const projectGray = "rounded-lg bg-gray-900 grid grid-cols-2 p-8";
const projectBlack = "rounded-lg bg-black grid grid-cols-2 p-8";
function Project(props) {
  if (props.image != "")
    return /* @__PURE__ */ React.createElement("div", {
      className: props.style
    }, /* @__PURE__ */ React.createElement("div", {
      className: " m-4"
    }, /* @__PURE__ */ React.createElement("a", {
      href: props.link
    }, /* @__PURE__ */ React.createElement("img", {
      src: props.image,
      className: " mx-auto"
    }))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, " ", props.heading), /* @__PURE__ */ React.createElement("p", null, props.desc)));
  return /* @__PURE__ */ React.createElement("div", {
    className: props.style
  }, /* @__PURE__ */ React.createElement("div", {
    className: " m-4"
  }, /* @__PURE__ */ React.createElement("a", {
    href: props.link
  }, /* @__PURE__ */ React.createElement("video", {
    autoPlay: true,
    loop: true,
    preload: "auto",
    className: " mx-auto"
  }, /* @__PURE__ */ React.createElement("source", {
    src: props.video,
    type: "video/mp4"
  })))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h2", null, " ", props.heading), /* @__PURE__ */ React.createElement("p", null, props.desc)));
}
function Web() {
  return /* @__PURE__ */ React.createElement("div", {
    id: "web"
  }, /* @__PURE__ */ React.createElement(Project, {
    style: projectGray,
    link: "forms\\poems.html",
    image: "",
    video: "media\\video.mp4",
    heading: "Poem Forms",
    desc: "This project is my darling. Having taken a course on poetry, I was amazed at how few resources poets have and decided to take matters into my own hands. I wrote out my own code for counting syllables and found it to be accurate about 90% of the time. Auto form filling, pop-ups, syllable counting, rhyme database, synonym database, all in an effort to create a website that could help you write a poem even if you were disconnected from the internet during the writing process. Click here to view it."
  }), /* @__PURE__ */ React.createElement(Project, {
    style: projectBlack,
    link: "projects\\documentation.html",
    image: "media/documentation.jpg",
    heading: "Technical Documentation Project",
    desc: 'Every developer will at one point write documentation. Every good developer will eventually read documentation. This project focuses on creating some form of documentation for something. At the time, I was learning python and I decided to make a "Pantoum Generator" to get some practice in. The project was very instructive on the basic syntax of python and it really helped me understand how it works. Click the image to see the techincal documentation.'
  }), /* @__PURE__ */ React.createElement(Project, {
    style: projectGray,
    link: "projects\\survey.html",
    image: "media\\survey.jpg",
    heading: "Survey Form Project",
    desc: "During this particular project, I wanted to try out as much css options I knew at the time. The example project had one effect in particular that I really wanted to replicate, and I managed to do it. I haven't updated it so it's a bit... dated let's say. Click the image to see the project "
  }), /* @__PURE__ */ React.createElement(Project, {
    style: projectBlack,
    link: "projects\\landing_page.html",
    image: "media\\landing.jpg",
    heading: "Landing Page Project",
    desc: "Everyone is a salesman eventually. I decided to make my project for freeCodeCamp, that way it would be easy to access any necessary materials online and download the project. This was my first time making a nav bar so the styling is a bit odd, but I believe it communicates my understanding of the fundamentals. Click the image to see the project."
  }), /* @__PURE__ */ React.createElement(Project, {
    style: projectGray,
    link: "projects\\blog.html",
    image: "https://cdn.freecodecamp.org/testable-projects-fcc/images/tribute-page-main-image.jpg",
    heading: "Dr. Norman Borlaug Blog Project",
    desc: "This project is a very basic blog style website. It taught me the fundamentals of website structure and styliing. From here, the birth of a web developer began! A humble begining to be sure. Clicking the image will lead to an updated version of the project."
  }));
}
function Sql() {
  return /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement(Project, {
    style: projectGray,
    link: "projects\\documentation.html",
    image: "media/documentation.jpg",
    heading: "Technical Documentation Project",
    desc: 'Every developer will at one point write documentation. Every good developer will eventually read documentation. This project focuses on creating some form of documentation for something. At the time, I was learning python and I decided to make a "Pantoum Generator" to get some practice in. The project was very instructive on the basic syntax of python and it really helped me understand how it works. Click the image to see the techincal documentation.'
  }));
}
const Main = (props) => {
  console.log(props.heritage);
  if (props.heritage == "web")
    return /* @__PURE__ */ React.createElement("main", {
      className: " bg-black"
    }, /* @__PURE__ */ React.createElement("div", {
      className: " p-4 mb-4"
    }, /* @__PURE__ */ React.createElement("h2", {
      className: " text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
    }, props.heading), /* @__PURE__ */ React.createElement("p", {
      className: " text-center pt-4 text-sm lg:text-md 2xl:text-xl"
    }, props.subtext), /* @__PURE__ */ React.createElement("p", {
      className: " text-center pt-4 text-sm lg:text-md 2xl:text-xl text-white font-bold"
    }, props.subsubtext)), /* @__PURE__ */ React.createElement(Web, null));
  if (props.heritage == "sql")
    return /* @__PURE__ */ React.createElement("main", {
      className: " bg-black"
    }, /* @__PURE__ */ React.createElement("div", {
      className: " p-4 mb-4"
    }, /* @__PURE__ */ React.createElement("h2", {
      className: " text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
    }, props.heading), /* @__PURE__ */ React.createElement("p", {
      className: " text-center pt-4 text-sm lg:text-md 2xl:text-xl"
    }, props.subtext), /* @__PURE__ */ React.createElement("p", {
      className: " text-center pt-4 text-sm lg:text-md 2xl:text-xl text-white font-bold"
    }, props.subsubtext)), /* @__PURE__ */ React.createElement(Sql, null));
  return /* @__PURE__ */ React.createElement("main", {
    className: " bg-black"
  }, /* @__PURE__ */ React.createElement("div", {
    className: " p-4 mb-4"
  }, /* @__PURE__ */ React.createElement("h2", {
    className: " text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl"
  }, props.heading), /* @__PURE__ */ React.createElement("p", {
    className: " text-center pt-4 text-sm lg:text-md 2xl:text-xl"
  }, props.subtext), /* @__PURE__ */ React.createElement("p", {
    className: " text-center pt-4 text-sm lg:text-md 2xl:text-xl text-white font-bold"
  }, props.subsubtext)), /* @__PURE__ */ React.createElement(Index, null));
};
export default Main;
