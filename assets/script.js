
function saveSearchHistory(city) {
  var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  searchHistory.push(city);
  localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
}


function loadSearchHistory() {
  var searchHistory = JSON.parse(localStorage.getItem('searchHistory')) || [];
  var searchHistoryContainer = document.getElementById('search-history');

  searchHistoryContainer.innerHTML = '';
  searchHistory.forEach(function (city) {
    var searchItem = document.createElement('label');
    searchItem.textContent = city;
    searchItem.addEventListener('click', function () {
      getWeather(city);
    });
    searchHistoryContainer.appendChild(searchItem);
  });
}

function getWeather() {

  var url = 'https://openweather43.p.rapidapi.com/weather?q=Jacksonville&appid=da0f9c8d90bde7e619c3ec47766a42f4&appid=%20da0f9c8d90bde7e619c3ec47766a42f4&lang=english&units=standard';
  var options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'f9b4c84174msh8852b12314d057ep131096jsn6e0e230da9c4',
      'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
    }
  };
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    // .then(function (data) {
    //   displayCurrentWeather(data);
    //   saveSearchHistory(city);
    //   loadSearchHistory();
    // })
    .catch(function (error) {
      console.log('Failed to fetch current weather data');
    });

}
