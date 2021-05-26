import elements from "../base/slider";

import slide1 from "../../images/fruit1.jpg";
import slide2 from "../../images/vegetable1.jpg";
import slide3 from "../../images/herbs1.jpg";
import slide4 from "../../images/tea1.jpg";
import Slide from "../model/Slide";
import element from "../base/slider";

const sliderJSON: Slide[] = [
  {
    imageUrl: slide1,
    title: "Fruit",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque velit doloremque iusto, deserunt minus quia iste deleniti cum fugit necessitatibus temporibus? Rem est aspernatur eum eveniet quaerat eius atque.",
  },
  {
    imageUrl: slide2,
    title: "Vegetable",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque velit doloremque iusto, deserunt minus quia iste deleniti cum fugit necessitatibus temporibus? Rem est aspernatur eum eveniet quaerat eius atque.",
  },
  {
    imageUrl: slide3,
    title: "Herb",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque velit doloremque iusto, deserunt minus quia iste deleniti cum fugit necessitatibus temporibus? Rem est aspernatur eum eveniet quaerat eius atque.",
  },
  {
    imageUrl: slide4,
    title: "Tea",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro itaque velit doloremque iusto, deserunt minus quia iste deleniti cum fugit necessitatibus temporibus? Rem est aspernatur eum eveniet quaerat eius atque.",
  },
];

const renderSlide = (slide: Slide) => {
  const markup = `
    <div class="row slider__slide">
        <div class="col-1-of-2 slider__about">
            <div class="slider__header">
                <h2 class="slider__title">${slide.title}</h2>
            </div>
            <div class="slider__text-box">
                <p>
                    ${slide.text}
                </p>
            </div>
            <a class="slider__link" href="#">Read More</a>
        </div>
        <div class="col-1-of-2">
            <div class="slider__img-wrapper">
                <img class="slider__img" alt="slide" src=${slide.imageUrl} />
            </div>
        </div>
    </div>`;

  elements.sliderWrapper?.insertAdjacentHTML("beforeend", markup);
};

export const renderSlides = () => {
  sliderJSON.forEach(renderSlide);
};
