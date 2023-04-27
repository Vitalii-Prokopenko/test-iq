const refs = {
  // Menu
  btnMenuOpen: document.querySelector('.js-open-menu'),
  btnMenuClose: document.querySelector('.js-close-menu'),
  btnContainer: document.querySelector('.js-menu-container'),
  menuMain: document.querySelector('.js-menu-main'),
  menuInfo: document.querySelector('.js-menu-info'),
  menuTest: document.querySelector('.js-menu-test'),

  // Header
  headerWrap: document.querySelector('.js-header-wrap'),

  // Start test
  btnStartTest: document.querySelectorAll('.js-start'),
  app: document.querySelector('body'),
};

const handleClickOnStartBtn = event => {
  const target = event.target;
  console.log(target);

  if (event.target.nodeName !== 'BUTTON') {
    return;
  }
  // Render header for test
  renderHeaderWrap();
};

refs.app.addEventListener('click', handleClickOnStartBtn);

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

const testItem = testItems[0];

export const markupTestQuestion = testItem => {
  let markupAnswers = '';
  const testAnswers = testItem.answers;
  testAnswers.forEach(testAnswer => {
    markupAnswers += `        
        <label class="question__answer">
              <input
                class="question__input visually-hidden"
                type="radio"
                name="${testItem.type}"
                value="${testAnswer}"
              />
              <div class="question__wrap">
                <span class="question__icon"></span>
                <span class="question__text">${testAnswer}</span>
              </div>
            </label>
    `;
  });
  const markupQuestion =
    `<!-- Test question #${testItem.itemNumber} -->
        <form class="test__question question" data-test-number="${testItem.itemNumber}">
          <p class="question__title">${testItem.title}</p><div class="question__wrap">` +
    markupAnswers +
    `</div></form>`;

  //   gallery.insertAdjacentHTML('beforeend', markup);
};

