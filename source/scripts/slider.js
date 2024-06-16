const toggleBefore = document.querySelector('.hero__page-button--before');
const toggleAfter = document.querySelector('.hero__page-button--after');
const slideItems = document.querySelectorAll('.hero__item');
const pageList = document.querySelectorAll('.hero__pagination-item');

const getActivePageIndex = (pages) => {
  const index = Array.from(pages).findIndex((page) => page.classList.contains('hero__item--active'));
  return index;
};

const setPageActive = (oldIndex, newIndex) => {
  slideItems[oldIndex].classList.remove('hero__item--active');
  pageList[oldIndex].classList.remove('hero__pagination-item--active');

  slideItems[newIndex].classList.add('hero__item--active');
  pageList[newIndex].classList.add('hero__pagination-item--active');

  toggleBefore.disabled = newIndex === 0;
  toggleAfter.disabled = newIndex === (Array.from(slideItems).length - 1);
};

const onToggleBeforeClick = () => {
  const currentIndex = getActivePageIndex(slideItems);
  if (currentIndex > 0) {
    setPageActive(currentIndex, currentIndex - 1);
  }
};

const onToggleAfterClick = () => {
  const currentIndex = getActivePageIndex(slideItems);
  if (currentIndex >= 0 && currentIndex < slideItems.length - 1) {
    setPageActive(currentIndex, currentIndex + 1);
  }
};

const onPaginationButtonElementClick = ({ target }) => {
  const currentIndex = getActivePageIndex(slideItems);
  const newIndex = Array.from(pageList).indexOf(target);
  if (newIndex !== -1 && newIndex !== currentIndex) {
    setPageActive(currentIndex, newIndex);
  }
};

const initializeSlider = () => {
  toggleBefore.addEventListener('click', onToggleBeforeClick);
  toggleAfter.addEventListener('click', onToggleAfterClick);
  pageList.forEach((button) =>
    button.addEventListener('click', onPaginationButtonElementClick)
  );
};

export { initializeSlider };
