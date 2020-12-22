export const filterCountries = () => {
  const input = document.querySelector('.filter__cases');
  const countries = document.querySelectorAll('.country');

  const updateValue = ({ target }) => {
    const { value } = target;
    countries.forEach((country) => {
      const name = country.querySelector('.name').textContent;
      if (name.toLowerCase().indexOf(value.toLowerCase()) > -1) {
        country.style.display = 'flex';
      } else country.style.display = 'none';
    });
  };
  input.addEventListener('input', updateValue);
};

export default filterCountries;
