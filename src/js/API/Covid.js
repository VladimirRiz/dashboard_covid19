class Covid {
  constructor({ error, data }) {
    this.error = error;
    this.data = data;
  }

  getData() {
    return this.data;
  }
}

export default Covid;
