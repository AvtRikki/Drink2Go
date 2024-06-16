const mainNavigation = document.querySelector('.main-nav');
const mainNavigationToggle = document.querySelector('.main-nav__toggle');

const setDropdownState = () => {
  mainNavigation.classList.toggle('main-nav--closed');
  mainNavigation.classList.toggle('main-nav--opened');
};

const initializeDropdown = () => {
  mainNavigationToggle.addEventListener('click', setDropdownState);
};

export { initializeDropdown };
