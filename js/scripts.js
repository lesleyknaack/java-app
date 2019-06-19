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
  document.write(pokemon.name + 'height: ' + pokemon.height)

}
