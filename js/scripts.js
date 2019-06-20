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

function printPokedex(pokeinfo) {
  document.write(pokeinfo.name + '(height: ' + pokeinfo.height + ')' + '<br>' + 'Types: ' + pokeinfo.types + '<br><br>')
}

repository.forEach(printPokedex);
