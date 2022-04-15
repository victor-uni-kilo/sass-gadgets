import { orientImage } from "@ts/orientImage";

const imageOrientation =
  document.querySelectorAll<HTMLImageElement>(".orientation")!;
alert(imageOrientation);
imageOrientation.forEach(element => orientImage(element));
