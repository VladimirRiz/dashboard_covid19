class Covid {
  constructor({ error, ok, status, data }) {
    this.error = error,
    this.ok = ok,
    this.status = status,
    this.data = data,
  }

  getData() {
    return this.data;
  }
}

export default Covid;
