export const filterCountries = () => {
  const input = document.querySelector('.filter__cases');
  const countries = document.querySelectorAll('.country');

  const updateValue = ({ target }) => {
    const { value } = target;
    countries.forEach((country) => {
      const name = country.querySelector('.name').textContent.toLowerCase();
      const hasLetters = (name.indexOf(value.toLowerCase()) > -1);
      country.style.display = hasLetters ? 'flex' : 'none';
    });
  };
  input.addEventListener('input', updateValue);
};

export default filterCountries;
