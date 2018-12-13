document.addEventListener('DOMContentLoaded', () => {
  // console.log(POKEMON)
  //YOUR CODE HERE
  const container = document.getElementById('pokemon-container')
  const input = document.getElementById('pokemon-search-input')
  fetch('http://localhost:3000/pokemon')
  .then(response => {
    return response.json()
  })
  .then( pokemons => {
    pokemons.forEach(pokemon => {
      container.innerHTML += `
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
    <h1 class="center-text">${pokemon.name}</h1>
    <div style="width:239px;margin:auto">
      <div style="width:96px;margin:auto">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
    </div>
  </div>
      `
    })

  })

container.addEventListener('click', function(event){

  if (event.target.dataset.action === 'flip'){
    const clickedPokemon = event.target
    fetch('http://localhost:3000/pokemon')
    .then(response => {
      return response.json()
    })
    .then( pokemons => {
      const selectedPokemon = pokemons.filter(pokemon => {
        return (parseInt(clickedPokemon.dataset.id) === pokemon.id)

      })
      if (clickedPokemon.src === selectedPokemon[0].sprites.front){
        clickedPokemon.src = selectedPokemon[0].sprites.back
      } else {
        clickedPokemon.src = selectedPokemon[0].sprites.front
      }

    })

  }
})

  input.addEventListener('input', (event) => {
    console.log(event.target.value);
    const filter = event.target.value
    const filteredPokemon = POKEMON.filter(pokemon => {
      pokemon.name.includes(filter)
    })
    container.innerHTML = " "
    filteredPokemon.forEach(pokemon => {
      container.innerHTML += `
      <div style="width:230px;margin:10px;background:#fecd2f;color:#2d72fc" class="pokemon-frame">
    <h1 class="center-text">${pokemon.name}</h1>
    <div style="width:239px;margin:auto">
      <div style="width:96px;margin:auto">
        <img data-id="${pokemon.id}" data-action="flip" class="toggle-sprite" src="${pokemon.sprites.front}">
      </div>
    </div>
  </div>
      `
    })

  })























})
