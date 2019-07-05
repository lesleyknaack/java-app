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


pokemonRepository.getAll().forEach(function (pokemon) {
  document.write(pokemon.name + '(height:  '+ pokemon.height + ')' + '<br>' + 'Types: ' + pokemon.types + '<br><br>')
})
