// select from the menu the right face of the cube

let home = document.querySelector("#home");
let about = document.querySelector("#about");
let projects = document.querySelector("#projects");
let contact = document.querySelector("#contact");
let cube = document.querySelector("#cube3D");

home.addEventListener("click", animar);
about.addEventListener("click", animar);
projects.addEventListener("click", animar);
contact.addEventListener("click", animar);

function animar(e) {
  console.log(e.target.id);
  switch (e.target.id) {
    case "home":
      cube.style =
        " animation: home 4s ease; transform: rotateY(0deg) rotateX(0deg) scale3d(.7,.7,.7);";
      break;
    case "about":
      cube.style =
        " animation: about 4s ease; transform: rotateY(0deg) rotateX(180deg) scale3d(.7,.7,.7);";
      break;
    case "projects":
      cube.style =
        " animation: projects 4s ease; transform: rotateY(0deg) rotateX(270deg) scale3d(.7,.7,.7);";
      break;
    case "contact":
      cube.style =
        " animation: contact 4s ease; transform: rotateY(0deg) rotateX(90deg) scale3d(.7,.7,.7);";
      break;

    default:
      break;
  }
}
