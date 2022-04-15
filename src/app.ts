import "./views/style.scss";
import { orientImage } from "@ts/orientImage";

window.addEventListener("load", function () {
  // do things after the DOM loads fully
  console.log("Everything is loaded");
});
//orientation
const imageOrientation =
  document.querySelectorAll<HTMLImageElement>(".orientation")!;

imageOrientation.forEach(element => orientImage(element));

//masonry
const masonry = document.querySelectorAll<HTMLDivElement>(".masonry")!;

//make responsive

