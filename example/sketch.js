/*
   Description: Lesson 13 - Strings example
   Author: Mr. Kowalczewski
   Date of last edit: October 28, 2026
*/

let wordInput;

function setup() {
  createCanvas(600, 600);
  textSize(18);

  wordInput = createInput("stressed");
  wordInput.position(20, 20);
}

function draw() {
  background(220);
  fill(0);

  let word = wordInput.value();

  // ----- Length and index -----
  text(`Length: ${word.length}`, 20, 80);
  if (word.length > 0) {
    text(`First character: ${word[0]}`, 20, 110);
    text(`Last character: ${word[word.length - 1]}`, 20, 140);
  }

  // ----- Iterating: counting characters -----
  let vowelCount = 0;
  for (let i = 0; i < word.length; i += 1) {
    // "aeiou".includes() checks if this character is a vowel
    if ("aeiou".includes(word[i].toLowerCase())) {
      vowelCount += 1;
    }
  }
  text(`Vowels: ${vowelCount}`, 20, 190);

  // ----- Iterating: building a new string -----
  let reversed = "";
  for (let i = word.length - 1; i >= 0; i -= 1) {
    reversed += word[i];
  }
  text(`Reversed: ${reversed}`, 20, 220);

  // ----- String methods -----
  text(`Upper case: ${word.toUpperCase()}`, 20, 270);
  text(`Lower case: ${word.toLowerCase()}`, 20, 300);
  text(`First 3 characters: ${word.slice(0, 3)}`, 20, 330);
  text(`Index of first "s": ${word.indexOf("s")}`, 20, 360);
  text(`Contains "cs": ${word.includes("cs")}`, 20, 390);
  text(`Words: ${word.split(" ").length}`, 20, 420);

  // ----- Comparing strings -----
  // ignore case and extra spaces when comparing
  if (word.trim().toLowerCase() == reversed.trim().toLowerCase() && word.length > 0) {
    fill(0, 150, 0);
    text("This is a palindrome!", 20, 470);
  }
}
