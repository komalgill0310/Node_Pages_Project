var xmlHttp = new XMLHttpRequest();
xmlHttp.onreadystatechange = function (req, res) {
  if (xmlHttp.readyState === 4) {
    console.log(xmlHttp.responseText);
  }
}

hiButton.onclick = function () {
  xmlHttp.open('POST', '/sayHi', true);
  xmlHttp.setRequestHeader('Content-type', 'text');
  xmlHttp.send('hi');
}

helloButton.onclick = function () {
  xmlHttp.open('POST', '/greeting', true);
  xmlHttp.setRequestHeader('Content-type', 'text');
  xmlHttp.send('hello');
}

whatsUpButton.onclick = function () {
  xmlHttp.open('POST', '/greeting', true);
  xmlHttp.setRequestHeader('Content-type', 'text');
  xmlHttp.send('what\'s up');
}

updateButton.onclick = function () {
  xmlHttp.open('PUT', '/updated', true);
  xmlHttp.setRequestHeader('Content-type', 'text');
  xmlHttp.send('updated message');
}

deleteButton.onclick = function () {
  xmlHttp.open('DELETE', '/delete', true);
  xmlHttp.setRequestHeader('Content-type', 'text');
  xmlHttp.send()
}

pokemonButton.onclick = function () {
  fetch('/pokemon').then(response => response.json()).then(abilities => {
    const pokemonAbilities = abilities.map(pokemon => pokemon.ability.name).join(', ')
    console.log(pokemonAbilities)
    document.getElementById('abilities').textContent = pokemonAbilities
  })
}

