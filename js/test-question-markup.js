// Function to markup test question
import { testItems } from './test-items';

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
