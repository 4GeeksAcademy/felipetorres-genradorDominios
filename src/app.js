/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let tittles = ["the", "our", "I am", "you"];
  let adjectives = ["great", "big", "amazing", "spectacular"];
  let heroes = ["chimichangas", "Deadpool", "Batman", "Wolverine"];
  let extensions = [".com", ".net", ".us", ".oi"];

  for (let i = 0; i < tittles.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
      for (let k = 0; k < heroes.length; k++) {
        for (let l = 0; l < extensions.length; l++) {
          console.log(tittles[i] + adjectives[j] + heroes[k] + extensions[l]);
        }
      }
    }
  }
};
