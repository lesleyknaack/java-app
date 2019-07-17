var pokemonRepository = (function () {
  var repository = [];
  var apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150'; // url for the list of original pokemon

  function loadList(item) {
    return fetch(apiUrl).then(function (response) { //fetches the data from api
      return response.json();
    }).then(function (json) {
      json.results.forEach(function (item) {
        var pokemon = {
          name: item.name,
          detailsUrl: item.url
        };
        add(pokemon); //adds data to the repository
      });
    }).catch(function (e) {
      console.error(e);
    })
  }

  function addListItem(item) {
    var $listItem = document.createElement('li'); // creates List
    var $newButton = document.createElement('button'); //creates a button
    $newButton.innerText = item.name; // makes the button text the pokemon name
    $newButton.classList.add('detailsButton'); // adds class to button for categorizing
    $listItem.appendChild($newButton); // appends the button to the list
    $pokeList.appendChild($listItem); // appends list to the DOM
    $newButton.addEventListener('click', function(event) { //executes showDetails if button is clicked
      showDetails(item);
    });
  }

  function showDetails(item) {
    pokemonRepository.loadDetails(item).then(function () {
      showModal(item); //displays details in a modal
    });
  }

  function add(item) {
    if (typeof item === 'object') {
      repository.push(item);
    } else {
      console.log('new item is not an object');
    }
  }

//allows access to the repository from the outside
  function getAll() {
    return repository;
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

  function showModal(item) {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.innerHTML = '';

    var modal = document.createElement('div');
    modal.classList.add('modal');

    var closeButton = document.createElement('button');
    closeButton.classList.add('modal-close');
    closeButton.innerText = 'Close';

    var nameElement = document.createElement('h1'); //name element
    nameElement.innerText = pokemon.name;

    var imageElement = document.createElement('img'); //image element
    imageElement.classList.add('modal-img');
    imageElement.setAttribute('src', imageUrl);

    var heightElement = document.createElement('p'); // height element
    heightElement.innerText = 'height: ' + item.height;

    var typesElement = document.createElement('p'); //types element
    typesElement.innerText = 'types: ' + item.types;

    modal.appendChild(closeButton);
    modal.appendChild(nameElement);
    modal.appendChild(imageElement);
    modal.appendChild(heightElement);
    modal.appendChild(typesElement);

    $modalContainer.appendChild(modal);
    $modalContainer.classList.add('is-visible');
  }

  function hideModal() {
    var $modalContainer = document.querySelector('#modal-container');
    $modalContainer.classList.remove('is-visible');

// hides modal if escape key is pressed
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && $modalContainer.classList.contains('is-visible')) {
        hideModal();
      }
    });

// hides modal if user clicks outside modal window
    $modalContainer.addEventListener('click', (e) => {
      var target = e.target;
      if (target === $modalContainer) {
        hideModal();
      }
    });

  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails,
    loadList: loadList,
    loadDetails: loadDetails,
    showModal: showModal,
    hideModal: hideModal
  };
}) ();


var $pokeList = document.querySelector('.pokemon-list'); // creates variable to grab onto the list

pokemonRepository.loadList().then(function () { //loads the data
  pokemonRepository.getAll().forEach(function (pokemon) { //calling for the data to be loaded
    pokemonRepository.addListItem(pokemon); // calls the function to actually print the list on the page
  });
});
