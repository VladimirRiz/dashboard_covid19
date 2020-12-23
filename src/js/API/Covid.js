class Covid {
  constructor({ error, data }) {
    this.error = error;
    this.data = data;
  }

  set() {
    const death = document.querySelector('.death .info');
    const globalCases = document.querySelector('.global__cases');
    globalCases.innerHTML = `<div>Global Cases</div><h2 class="text-danger">${this.data.Global.TotalConfirmed}</h2>`;

    const container = document.createElement('div');
    container.innerHTML = `
      <div class="global-deaths">
        <div>Global Deaths</div>
        <h2>${this.data.Global.TotalDeaths}</h2>
      </div>
      <div class="countries-deaths">
        ${this.data.Countries.map((node) => `
            <div class="country">
            <p class="name">${node.TotalDeaths} deaths</p>
            <p class="name">${node.Country}</p>
            </div>
          `).join(' ')}
      </div>
    `;
    death.appendChild(container);
  }

  error() {
    const death = document.querySelector('.death');

    const container = document.createElement('div');
    container.innerHTML = `error get data: ${this.error}`;

    death.append(container);
  }
}

export default Covid;
