export const fullWidth = () => {
  const openButton = document.querySelectorAll('.open__button');
  const allBlocks = document.querySelectorAll('.block');
  const mainContainer = document.querySelector('.container__info');

  openButton.forEach((button) => {
    button.addEventListener('click', ({ target }) => {
      const parent = target.parentNode.parentNode;
      const parentClass = (parent.className).replace(/block/g, '').replace(/\s/, '');
      allBlocks.forEach((block) => {
        const hasClass = block.classList.contains(parentClass);
        if (!hasClass) block.classList.toggle('none');
      });
      mainContainer.classList.toggle('one-column');
      console.log(parentClass);
    });
  });
};

export default fullWidth;
