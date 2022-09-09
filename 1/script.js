//https://rickandmortyapi.com/
let url = `https://rickandmortyapi.com/api/character`
let error = document.getElementById("error")
let element = document.getElementById("dropdown");

//CONSERTAR
const selectCharacter = async () => {
  await fetch(url)
  .then((response) => {
    if (response.status === 200) {
      response.json()
      .then((responseData) => {
      //   for(let i = 0; i <= responseData.results.length; i++){
      //     populateTable(responseData.results[i].name)
      //  } 
      })
    }
  })
}

const populateTable =  () => {
  let newImage = document.createElement("img");
  newImage.src = "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  let image = document.getElementById("avatar");
  image.appendChild(newData);
}
//CONSERTAR

const onload = async () => {
  
  await fetch(url)
  .then((response) => {
    if (response.status === 200) {
      response.json()
      .then((responseData) => {
        for(let i = 0; i <= responseData.results.length; i++){
          populateOptions(responseData.results[i].name)
        }
      })
    }
  })
}

const populateOptions = (option) => {
  let newData = document.createElement("option");
  let textData = document.createTextNode(option);
  newData.appendChild(textData);
  element.appendChild(newData);
}

element.addEventListener("change", selectCharacter)
onload()
populateTable()