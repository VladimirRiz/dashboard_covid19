import Covid from './Covid';

async function covidSummary() {
  const url = 'https://api.covid19api.com/summary';
  try {
    const response = await fetch(url);
    const content = await response.json();
    const summary = new Covid({
      error: null,
      data: content,
    });
    summary.set();
  } catch (error) {
    const summary = new Covid({
      error,
      data: null,
    });
    summary.error();
  }
}

export default covidSummary;
