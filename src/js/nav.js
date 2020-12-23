export const toggleClassesNavigation = () => {
  const navList = document.querySelector('.navigation__list_wrapper');
  const navButton = document.querySelector('.navigation_button');

  navButton.addEventListener('click', () => {
    navButton.classList.toggle('change');
    navList.classList.toggle('active');
  });
};

export default toggleClassesNavigation;
