import { orientImage } from "@ts/func/orientImage";

export const imageLink = (): void => {
  const imageOrientation =
    document.querySelectorAll<HTMLImageElement>(".orientation")!;

  imageOrientation.forEach(element => orientImage(element));
};
