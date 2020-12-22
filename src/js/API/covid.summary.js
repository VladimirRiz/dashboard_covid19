import Covid from './Covid';

async function getCovidSummary() {
  const url = 'https://api.covid19api.com/summary';
  try {
    const response = await fetch(url);
    const content = await response.json();
    return new Covid({
      error: null,
      data: content,
    });
  } catch (error) {
    return new Covid({
      error,
      data: null,
    });
  }
}

export default getCovidSummary;
