var pokemonRepository = (function () {
  var repository = [
    {
      name: 'Bulbasaur',
      height: 7,
      types: ['grass', 'poison']
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

function printPokedex(pokeinfo) {
  document.write(pokeinfo.name + '(height: ' + pokeinfo.height + ')' + '<br>' + 'Types: ' + pokeinfo.types + '<br><br>')
}

let allPoke = pokemonRepository.getAll();
allPoke.forEach(printPokedex)
var $pokeList = document.querySelector('.pokemon-list'); // creates variable to grab onto the list













/* wow that's big */
for (var i = 0; i < repository.length; i++) {
  let pokemon = pokemonRepository.repository[i]
  let bigPoke = pokemon.height > 6 && "- Wow, that's big!" || "";
  document.write(`${pokemon.name} height: ${pokemon.height} ${bigPoke}` + "<br/>" );
}
