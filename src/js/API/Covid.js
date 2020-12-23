class Covid {
  constructor({ error, data }) {
    this.error = error;
    this.data = data;
  }

  set() {
    const death = document.querySelector('.death .info');

    const container = document.createElement('div');
    container.innerHTML = `
      <div class="global-deaths">
        <h4>Global Deaths</h4>
        <h1>${this.data.Global.TotalDeaths}</h1>
      </div>
      <div class="countries-deaths">
        ${this.data.Countries.map((node) => `
            <div class="country">
              <h3>${node.TotalDeaths} deaths</h3>
              <h4>${node.Country}</h4>
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
