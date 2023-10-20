/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";
let pronounsArray = [];
let adjectivesArray = [];
let nounsArray = [];

function addInput() {
  const pronounsInput = document.querySelector("#pronouns").value;
  const adjectivesInput = document.querySelector("#adjectives").value;
  const nounsInput = document.querySelector("#nouns").value;

  pronounsArray.push(
    ...pronounsInput.split(",").map(pronoun => pronoun.trim())
  );
  adjectivesArray.push(
    ...adjectivesInput.split(",").map(adjective => adjective.trim())
  );
  nounsArray.push(...nounsInput.split(",").map(noun => noun.trim()));

  displayWords("added-words-pronoun", pronounsArray);
  displayWords("added-words-adjective", adjectivesArray);
  displayWords("added-words-noun", nounsArray);

  document.querySelector("#pronouns").value = "";
  document.querySelector("#adjectives").value = "";
  document.querySelector("#nouns").value = "";
}

function displayWords(listId, wordsArray) {
  const addedWordsList = document.querySelector(`#${listId}`);
  addedWordsList.innerHTML = "";
  wordsArray.forEach(word => {
    addedWordsList.innerHTML += `<li>${word}</li>`;
  });
}

function generateDomainCombinations() {
  const domainCombinations = [];

  pronounsArray.forEach(pronoun => {
    adjectivesArray.forEach(adjective => {
      nounsArray.forEach(noun => {
        const domainName = `${pronoun}${adjective}${noun}.com`;
        domainCombinations.push(domainName);
      });
    });
  });

  document.querySelector(
    "#domain-combinations"
  ).innerHTML = domainCombinations.join("<br>");
}

document.querySelector("#addInput").addEventListener("click", addInput);
document
  .querySelector("#generateDomains")
  .addEventListener("click", generateDomainCombinations);
