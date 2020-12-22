import { filterCountries } from './filter';

export default function cases() {
  const casesInfo = document.querySelector('.cases__info');
  const getCountry = fetch('https://api.covid19api.com/summary');
  getCountry.then((response) => response.json())
    .then(({ Countries }) => {
      const arr = [...Countries];
      arr.sort((a, b) => ((a.TotalConfirmed < b.TotalConfirmed) ? 1 : -1));
      arr.forEach((x) => {
        casesInfo.insertAdjacentHTML('beforeend', `<div class="country"><p class="number">${x.TotalConfirmed}</p><p class="name">${x.Country}</p></div>`);
      });
    }).then(() => filterCountries());
}
