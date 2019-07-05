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
  return {
    add: add,
    getAll: getAll
  };
}) ();

function printPokedex(pokeinfo) {
  document.write(pokeinfo.name + '(height: ' + pokeinfo.height + ')' + '<br>' + 'Types: ' + pokeinfo.types + '<br><br>')
}

let allPoke = pokemonRepository.getAll();
allPoke.forEach(printPokedex)













/* wow that's big */
for (var i = 0; i < repository.length; i++) {
  let pokemon = pokemonRepository.repository[i]
  let bigPoke = pokemon.height > 6 && "- Wow, that's big!" || "";
  document.write(`${pokemon.name} height: ${pokemon.height} ${bigPoke}` + "<br/>" );
}
