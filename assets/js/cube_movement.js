// select from the menu the right face of the cube

//Nav links
let home = document.querySelector("#home");
let about = document.querySelector("#about");
let projects = document.querySelector("#projects");
let contact = document.querySelector("#contact");
let cube = document.querySelector("#cube3D");

//Faces of the cube
let home_face = document.querySelector("#home-face");
let about_face = document.querySelector("#about-face");
let projects_face = document.querySelector("#projects-face");
let contact_face = document.querySelector("#contact-face");

//content of each face of the cube
let home_info = document.querySelector("#home-info");
let about_info = document.querySelector("#about-info");
let projects_info = document.querySelector("#projects-info");
let contact_info = document.querySelector("#contact-info");

//Variable helps to know from where are we coming from
let currentPage = "home";
let back_ground_white="background:url(assets/img/front1.png),linear-gradient(rgba(255,255,255,0.8),rgba(255,255,255,0.8))";
// let back_groundImage="background-image:url(assets/img/front1.png)"
// let url_image ="assets/img/front1.png"


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
      
      home_info.style="display:none;"
      home_face.style=back_ground_white;
     
      if (nextPage == "contact") {
        cube.animate(homeTo, 2000);
        cube.style =
          "transform: rotateY(0deg) rotateX(90deg) scale3d(.7,.7,.7);";
          contact_face.style =
          "background:linear-gradient(rgba(255, 255, 255, 0.5), rgba(255,255,255,0.5));";

        currentPage = nextPage;
      } else if (nextPage == "about") {
        cube.animate(homeTo, 2000);
        cube.style =
          "transform: rotateY(0deg) rotateX(180deg) scale3d(.7, .7, .7);";
        about_face.style =
          "background:linear-gradient(rgba(255, 255, 255, 0.5), rgba(255,255,255,0.5)), url(../img/front1.png); ";

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
          "transform: rotateY(0deg) rotateX(0deg) scale3d(.7, .7, .7);";
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
          "transform: rotateY(0deg) rotateX(180deg) scale3d(.7, .7, .7);";
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

;