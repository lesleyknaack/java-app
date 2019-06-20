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

for (var i = 0; i < repository.length; i++) {
  var pokemon = repository[i]
  document.write(pokemon.name  + '(height:  ' + pokemon.height + ')' + '<br><br>');
  if (pokemon.height > 6) {
    document.write('Wow, that\'s big!')
  }
  let pokemon = repository[i]
  let bigPoke = pokemon.height > 6 && "- Wow, that's big!" || "";
  document.write(`${pokemon.name} height: ${pokemon.height} ${bigPoke}` + "<br/>" );

function printPokedex(pokeinfo) {
  document.write(pokeinfo.name + '(height: ' + pokeinfo.height + ')' + '<br>' + 'Types: ' + pokeinfo.types + '<br><br>')
}
