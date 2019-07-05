var pokemonRepository = (function () {
  var repository = [
    {
      name: 'Bulbasaur',
      height: 7,
      types: ['grass', ' poison']
    },
    {
      name: 'Charmander',
      height: 6,
      types: ['fire']
    },
    {
      name: 'Squirtle',
      height: 5,
      types: ['water']
    }
  ];
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
  }
  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
}) ();


var $pokeList = document.querySelector('.pokemon-list'); // creates variable to grab onto the list

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon); // calls the function to actually print the list on the page
});
