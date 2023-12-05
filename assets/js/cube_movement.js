// select from the menu the right face of the cube

let home = document.querySelector("#home");
let about = document.querySelector("#about");
let projects = document.querySelector("#projects");
let contact = document.querySelector("#contact");
let cube = document.querySelector("#cube3D");
let currentPage = "home";

//Adding listener to the menu links
home.addEventListener("click", animar);
about.addEventListener("click", animar);
projects.addEventListener("click", animar);
contact.addEventListener("click", animar);

//creating animation for each posible movement in the menu
let homeTo = [
  { transform: "rotateY(0deg) rotateX( 0deg) scale3d(.8,.8,.8)", offset: 0 },
  {
    transform: "rotateY(275deg) rotateX(185deg) scale3d(.2,.2,.2)",
    offset: 0.4,
  },
  {
    transform: "rotateY(150deg) rotateX(275deg) scale3d(.2,.2,.2)",
    offset: 0.8,
  },
];
let aboutTo = [
  { transform: "rotateY(0deg) rotateX(180deg) scale3d(.7,.7,.7)", offset: 0 },
  {
    transform: "rotateY(275deg) rotateX(185deg) scale3d(.2,.2,.2)",
    offset: 0.4,
  },
  {
    transform: "rotateY(150deg) rotateX(275deg) scale3d(.2,.2,.2)",
    offset: 0.6,
  },
];
let projectsTo = [
  {
    transform: " rotateY(0deg) rotateX(270deg)   scale3d(.7,.7,.7)",
    offset: 0,
  },
  {
    transform: "rotateY(275deg) rotateX(185deg) scale3d(.2,.2,.2)",
    offset: 0.4,
  },
  {
    transform: "rotateY(150deg) rotateX(275deg) scale3d(.2,.2,.2)",
    offset: 0.8,
  },
];
let contactTo = [
  { transform: "rotateY(0deg) rotateX(90deg)   scale3d(.7,.7,.7)", offset: 0 },
  {
    transform: "rotateY(275deg) rotateX(185deg) scale3d(.2,.2,.2)",
    offset: 0.4,
  },
  {
    transform: "rotateY(150deg) rotateX(275deg) scale3d(.2,.2,.2)",
    offset: 0.8,
  },
];

// Funtion to call the respetive animation for echa section of the page
//depending on the page to go to and the previous one performs an animation or another
function animar(e) {
  console.log(e.target.id);
  let nextPage = e.target.id;

  switch (currentPage) {
    case "home":
      if (nextPage == "contact") {
        cube.animate(homeTo, 2000);
        cube.style =
          "transform: rotateY(0deg) rotateX(90deg) scale3d(.7,.7,.7);";
        currentPage = nextPage;
      } else if (nextPage == "about") {
        cube.animate(homeTo, 2000);
        cube.style =
          "transform: rotateY(0deg) rotateX(180deg) scale3d(.7, .7, .7)";
        currentPage = nextPage;
      } else if (nextPage == "projects") {
        cube.animate(homeTo, 2000);
        cube.style =
          "transform: rotateY(0deg) rotateX(270deg) scale3d(.7,.7,.7);";
        currentPage = nextPage;
      }
      break;
    case "about":
        if (nextPage == "contact") {
            cube.animate(aboutTo, 2000);
            cube.style =
              "transform: rotateY(0deg) rotateX(90deg) scale3d(.7,.7,.7);";
            currentPage = nextPage;
          } else if (nextPage == "home") {
            cube.animate(aboutTo, 2000);
            cube.style =
              "transform: rotateY(0deg) rotateX(0deg) scale3d(.7, .7, .7)";
            currentPage = nextPage;
          } else if (nextPage == "projects") {
            cube.animate(aboutTo, 2000);
            cube.style =
              "transform: rotateY(0deg) rotateX(270deg) scale3d(.7,.7,.7);";
            currentPage = nextPage;
          }
          break;
    case "projects":
        if (nextPage == "contact") {
            cube.animate(projectsTo, 2000);
            cube.style =
              "transform: rotateY(0deg) rotateX(90deg) scale3d(.7,.7,.7);";
            currentPage = nextPage;
          } else if (nextPage == "about") {
            cube.animate(projectsTo, 2000);
            cube.style =
              "transform: rotateY(0deg) rotateX(180deg) scale3d(.7, .7, .7)";
            currentPage = nextPage;
          } else if (nextPage == "home") {
            cube.animate(projectsTo, 2000);
            cube.style =
              "transform: rotateY(0deg) rotateX(0deg) scale3d(.7,.7,.7);";
            currentPage = nextPage;
          }
          break;
    case "contact":
        if (nextPage == "home") {
            cube.animate(contactTo, 2000);
            cube.style =
              "transform: rotateY(0deg) rotateX(0deg) scale3d(.7,.7,.7);";
            currentPage = nextPage;
          } else if (nextPage == "about") {
            cube.animate(contactTo, 2000);
            cube.style =
              "transform: rotateY(0deg) rotateX(180deg) scale3d(.7, .7, .7)";
            currentPage = nextPage;
          } else if (nextPage == "projects") {
            cube.animate(contactTo, 2000);
            cube.style =
              "transform: rotateY(0deg) rotateX(270deg) scale3d(.7,.7,.7);";
            currentPage = nextPage;
          }
          break;

    default:
      break;
  }
}


