// Function to markup test question
import { refs } from './refs';

export const renderHeaderWrap = () => {
  const markupHeaderWrap = `
    <picture class="header__brain-picture">
            <source
              srcset="./images/webp/brain.webp 1x, ./images/webp/brain-@2x.webp 2x"
              type="image/webp"
            />
            <source
              srcset="./images/png/brain.png 1x, ./images/png/brain-@2x.png 2x"
              type="image/png"
            />
            <img
              class="header__brain-img"
              src="./images/png/brain.png"
              alt="brain"
              width="46"
              height="46"
            />
          </picture>
          <p class="header__text">тест на определение IQ</p>
          `;

  refs.headerWrap.insertAdjacentHTML(beforeend, markupHeaderWrap);
};
