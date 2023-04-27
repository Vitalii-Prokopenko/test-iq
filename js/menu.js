const refs = {
  btnMenuOpen: document.querySelector('.js-open-menu'),
  btnMenuClose: document.querySelector('.js-close-menu'),
  btnContainer: document.querySelector('.js-menu-container'),
  menuMain: document.querySelector('.js-menu-main'),
  menuInfo: document.querySelector('.js-menu-info'),
  menuTest: document.querySelector('.js-menu-test'),
};

// import { refs } from './refs';

const handleOpenMenuClick = () => {
  refs.btnContainer.classList.add('is-open');
  refs.btnMenuOpen.setAttribute('aria-expanded', true);

  refs.btnMenuOpen.removeEventListener('click', handleOpenMenuClick);
  refs.btnMenuClose.addEventListener('click', handleCloseMenuClick);
  refs.menuMain.addEventListener('click', handleCloseMenuClick);
  refs.menuInfo.addEventListener('click', handleCloseMenuClick);
  refs.menuTest.addEventListener('click', handleCloseMenuClick);
};

const handleCloseMenuClick = () => {
  refs.btnContainer.classList.remove('is-open');
  refs.btnMenuOpen.setAttribute('aria-expanded', false);

  refs.btnMenuClose.removeEventListener('click', handleCloseMenuClick);
  refs.menuMain.removeEventListener('click', handleCloseMenuClick);
  refs.menuInfo.removeEventListener('click', handleCloseMenuClick);
  refs.menuTest.removeEventListener('click', handleCloseMenuClick);
  refs.btnMenuOpen.addEventListener('click', handleOpenMenuClick);
};

refs.btnMenuOpen.addEventListener('click', handleOpenMenuClick);
refs.btnMenuClose.addEventListener('click', handleCloseMenuClick);
refs.menuMain.addEventListener('click', handleCloseMenuClick);
refs.menuInfo.addEventListener('click', handleCloseMenuClick);
refs.menuTest.addEventListener('click', handleCloseMenuClick);
