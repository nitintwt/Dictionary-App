const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const input = document.getElementById("input");
const search = document.getElementById("search");

search.addEventListener("click",function dictionary(){
  const inputWord = input.value;
  fetch(url +`${inputWord}`)
  .then(response => {
    return response.json();
  })
  .then(data =>{
    console.log(data)
    document.getElementById("word").innerHTML=`${inputWord}`
    document.getElementById("grammar").innerHTML=data[0].meanings[0].partOfSpeech;
    document.getElementById("meaning").innerHTML=data[0].meanings[0].definitions[0].definition;
    //document.getElementById("example").innerHTML=data[0].meanings[0].definitions[0].example;
  })
  .catch(error =>{
    console.error("Not found")
  })
})
