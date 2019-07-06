var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; // url for the list of original pokemon

  function add(pokemon) {
    repository.push(pokemon);
  }

  function getAll() {
    return repository;
  }

  function addListItem(pokemon) {
    var $listItem = document.createElement('li'); // creates List
    var $newButton = document.createElement('button'); //creates a button
    $newButton.innerText = pokemon.name; // makes the button text the pokemon name
    $newButton.classList.add('detailsButton'); // adds class to button for categorizing
    $listItem.appendChild($newButton); // appends the button to the list
    $pokeList.appendChild($listItem); // appends list to the DOM
    $newButton.addEventListener('click', function(event) {
      showDetails(pokemon);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      console.log(item)
    });
  }

  function loadList() {
    return fetch(apiUrl).then(function (response) {
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon);
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function loadDetails(item) {
    var url = item.detailsUrl;
    return fetch(url).then(function (response) {
      return response.json();
    }).then(function (details) { // adds details to the item
      item.imageUrl = details.sprites.front_default;
      item.height = details.height;
      item.types = Object.keys(details.types);
    }).catch(function (e) {
      console.error(e)
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails
  };
}) ();


var $pokeList = document.querySelector('.pokemon-list'); // creates variable to grab onto the list

pokemonRepository.loadList().then(function () { //loads the data
  pokemonRepository.getAll().forEach(function (pokemon) { //calling for the data to be loaded
    pokemonRepository.addListItem(pokemon); // calls the function to actually print the list on the page
  });
});
