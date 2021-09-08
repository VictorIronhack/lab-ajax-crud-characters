const charactersAPI = new APIHandler('http://localhost:8000');

window.addEventListener('load', () => {
  document.getElementById('fetch-all').addEventListener('click', function (event) {
    charactersAPI
      .getFullList()
      .then(response => {
        let text = ''
        response.data.reverse().forEach(elm => text += 
          `<div class="character-info">
          <div class="name">${elm.name}</div>
          <div class="occupation">${elm.occupation}</div>
          <div class="cartoon">${elm.debt}</div>
          <div class="weapon">${elm.weapon}</div>
          <div class="weapon">${elm.id}</div>
          </div>`
          )
        document.querySelector('.characters-container').innerHTML = text
      })
  });

  document.getElementById('fetch-one').addEventListener('click', function (event) {
     
    const id = document.querySelector('#one').value

    charactersAPI
    .getOneRegister(id)
    .then(response =>{

      const{id, name, weapon, occupation, cartoon} = response.data

      let text =
         `<div class="character-info">
          <div class="name">${name}</div>
          <div class="occupation">${occupation}</div>
          <div class="cartoon">${cartoon}</div>
          <div class="id">${id}</div>
          <div class="weapon">${weapon}</div>
          </div>`
          document.querySelector('.characters-container').innerHTML = text
    })
  });

  document.getElementById('delete-one').addEventListener('click', function (event) {
    
    const id = parseInt(document.querySelector('#two').value)

    charactersAPI
    .deleteOneRegister(id)
    .then()
    console.log(charactersAPI.deleteOneRegister())
  });


  
  document.getElementById('edit-character-form').addEventListener('submit', function (event) {

    event.preventDefault()

    const inputs = document.querySelectorAll('#edit-character-form input')
    const characterId = inputs[0].value

    const character = {
      name: inputs[1].value,
      occupation: inputs[2].value,
      weapon: inputs[3].value
  }

    charactersAPI
      .updateOneRegister(characterId, character)
      .then((response) => {
        console.log(response)
          document.querySelector('#edit-character-form').reset()
      })

      })
    
  });
  
  document.getElementById('new-character-form').addEventListener('submit', function (event) {
    
    event.preventDefault()
    const inputs = document.querySelectorAll('#new-character-form input')

    const character = {
      name: inputs[0].value,
      occupation: inputs[1].value,
      weapon: inputs[2].value
  }
  charactersAPI
        .createOneRegister(character)
        .then((response) => {
          console.log(response)
            document.querySelector('#new-character-form').reset()
        })
    
  });
