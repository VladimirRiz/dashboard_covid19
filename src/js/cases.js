// async function getUser(name) {
//   const country = name.toLowerCase().replace(/ /g, '-');
//   const response = await fetch(`https://api.covid19api.com/total/country/${country}/status/confirmed`);
//   const data = await response.json();
//   return data;
// }

export default function cases() {
  const casesInfo = document.querySelector('.cases__info');
  const getCountry = fetch('https://api.covid19api.com/summary');
  getCountry.then((response) => response.json())
    .then(({ Countries }) => {
      const arr = [...Countries];
      arr.sort((a, b) => ((a.TotalConfirmed < b.TotalConfirmed) ? 1 : -1));
      console.log(arr);
      arr.forEach((x) => {
        casesInfo.insertAdjacentHTML('beforeend', `<div class="country"><p class="number">${x.TotalConfirmed}</p><p class="name">${x.Country}</p></div>`);
      });
    });
}

// Call the API
// fetch('https://jsonplaceholder.typicode.com/posts/5').then(function (response) {
// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		return Promise.reject(response);
// 	}
// }).then(function (data) {

// 	// Store the post data to a variable
// 	post = data;

// 	// Fetch another API
// 	return fetch('https://jsonplaceholder.typicode.com/users/' + data.userId);

// }).then(function (response) {
// 	if (response.ok) {
// 		return response.json();
// 	} else {
// 		return Promise.reject(response);
// 	}
// }).then(function (userData) {
// 	console.log(post, userData);
// }).catch(function (error) {
// 	console.warn(error);
// });
