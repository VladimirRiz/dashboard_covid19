import Covid from './Covid';

async function getCovidSummary() {
  const url = 'https://api.covid19api.com/summary';
  try {
    const response = await fetch(url);
    const content = await response.json();
    return new Covid(content);

  } catch (error) {
    return new Covid({
      error,
      ok: false,
      status: 500,
    })
  }
}

export {
  getCovidSummary,
};
