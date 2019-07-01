var pokemonRepository = (function () {
  var repository = [
    {
      name: 'Bulbasaur',
      height: 7,
      types: ['grass', 'poison']
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
  return {
    add: add,
    getAll: getAll
  };
}) ();

function printPokedex(pokeinfo) {
  document.write(pokeinfo.name + '(height: ' + pokeinfo.height + ')' + '<br>' + 'Types: ' + pokeinfo.types + '<br><br>')
}

repository.forEach(printPokedex);
