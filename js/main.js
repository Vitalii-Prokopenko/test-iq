import { refs } from './refs';
import { renderHeaderWrap } from './render-header-wrap';

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
