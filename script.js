let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let imgD = document.getElementById("img");

const getData = async (searchValue) => {
  let data = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`
  );
  let jsonData = await data.json();

  document.querySelector(".text").innerHTML = "";
  document.getElementById("img").innerHTML = "";

  let div = document.createElement("div");
  div.classList.add("detail");
  div.innerHTML = `
            <h2> word: <span>${jsonData[0].word}</span></h2>
            <p>${jsonData[0].meanings[0].partOfSpeech}</p>
            <p>Meaning : <span>${
              jsonData[0].meanings[0].definitions[0].definition
            }</span></p>
            <p>Example : <span>${
              jsonData[0].meanings[0].definitions[0].example == undefined
                ? "Not Found"
                : jsonData[0].meanings[0].definitions[0].example
            }</span></p>
            <p>Synonyms :  <span>${jsonData[0].meanings[0].synonyms}</span></p>
            <a href=${jsonData[0].sourceUrls[0]} target="_blank">Read more</a>
    `;
  document.querySelector(".text").appendChild(div);
  console.log(jsonData);
  console.log(jsonData[0].word);
  console.log(jsonData[0].meanings[0].definitions[0].definition);

  var img = document.createElement("img");
  img.src =
    "https://images.clipartof.com/small/1094759-Clipart-Happy-Open-Dictionary-Book-Holding-A-Thumb-Up-Royalty-Free-Vector-Illustration.jpg";

  imgD.appendChild(img);
};


searchBtn.addEventListener("click", function () {
  let searchValue = searchInput.value;
  if (searchValue == "") {
    alert("First Enter Word");
  } else {
    getData(searchValue);
  }
});
