export const orientImage = (image: HTMLImageElement): void => {
  let realWidth = image.naturalWidth;
  let realHeight = image.naturalHeight;

  if (realHeight > realWidth) {
    image.classList.add("portrait");
  } else {
    image.classList.add("landscape");
  }
};
