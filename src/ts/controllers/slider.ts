import elements from "../base/slider";
import { renderSlides } from "../view/slider";

enum Direction {
  RIGHT,
  LEFT,
}
export const controlSlider = () => {
  renderSlides();
  setTimeout(() => createSlider(), 500);
};

const createSlider = () => {
  let posInitial = 0;
  let posX1 = 0;
  let posX2 = 0;
  let index = 0;
  let allowedShift = true;

  const prev = document.querySelector(".slider__btn--left");
  const next = document.querySelector(".sldier__btn--right");
  const slider = document.getElementsByClassName("slider")[0];
  const sliderWrapper = elements.sliderWrapper as HTMLDivElement;
  const slidesLength = sliderWrapper.children.length;
  const slideWidth = slider.getBoundingClientRect().width;
  //   console.log(slidesLength);
  //   console.log(slideWidth);

  sliderWrapper.style.left = `-${slideWidth}px`;

  const first = sliderWrapper.firstElementChild?.cloneNode(
    true
  ) as HTMLDivElement;

  const last = sliderWrapper.lastElementChild?.cloneNode(
    true
  ) as HTMLDivElement;

  sliderWrapper.insertAdjacentElement("afterbegin", first);
  sliderWrapper.insertAdjacentElement("beforeend", last);

  const dragStart = (e: Event) => {
    // console.log(sliderWrapper);
    // console.log(sliderWrapper.getBoundingClientRect());
    // console.log((<HTMLDivElement>sliderWrapper).offsetLeft);

    const event = <MouseEvent>e;

    posInitial = sliderWrapper.offsetLeft;
    posX1 = event.clientX;

    document.onmousemove = dragAction;
    document.onmouseup = dragEnd;
  };

  const dragAction = (e: MouseEvent) => {
    posX2 = e.clientX - posX1;
    posX1 = e.clientX;

    sliderWrapper.style.left = `${sliderWrapper.offsetLeft + posX2}px`;
  };

  const dragEnd = () => {
    // console.log(posInitial);
    // console.log(sliderWrapper.offsetLeft);
    const distance = sliderWrapper.offsetLeft - posInitial;
    //console.log("Dis " + distance);

    if (distance > 100) {
      shiftSlide(Direction.RIGHT, "drag");
    } else if (distance < -100) {
      shiftSlide(Direction.LEFT, "drag");
    } else {
      sliderWrapper.style.left = `${posInitial}px`;
    }

    document.onmousemove = null;
    document.onmouseup = null;
  };

  const shiftSlide = (dir: Direction, action: string) => {
    sliderWrapper.classList.add("shift");

    if (!allowedShift) {
      return;
    }

    allowedShift = false;

    if (!action) {
      posInitial = sliderWrapper.offsetLeft;
    }

    if (dir === Direction.RIGHT) {
      sliderWrapper.style.left = `${posInitial + slideWidth}px`;
      index--;
    } else {
      sliderWrapper.style.left = `${posInitial - slideWidth}px`;
      index++;
      console.log(index);
    }
  };

  const checkIndex = () => {
    console.log("check");

    sliderWrapper.classList.remove("shift");

    if (index === -1) {
      sliderWrapper.style.left = `-${slidesLength * slideWidth}px`;
      index = slidesLength - 1;
    }

    if (index === slidesLength) {
      sliderWrapper.style.left = `-${slideWidth}px`;
      index = 0;

      console.log(index);
    }

    allowedShift = true;
  };

  sliderWrapper.addEventListener("mousedown", dragStart);
  sliderWrapper.addEventListener("transitionend", checkIndex);
  prev?.addEventListener("click", () => shiftSlide(Direction.RIGHT, ""));
  next?.addEventListener("click", () => shiftSlide(Direction.LEFT, ""));
};
