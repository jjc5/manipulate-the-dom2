let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function(event) {
  // Random quote of the day generator
  const randomQuote = function() {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();


  // Do all of your work inside the document.addEventListener

  // Part 1
const shorterTitle = function() {
  document.querySelector('#main-title').textContent = 'Welcome to the Dom';
}
shorterTitle();
  // Part 2
const bodyBackground = function() {
  let body = document.querySelector('body');
  body.style.backgroundColor = '#bf897e';
}
bodyBackground();
  // Part 3

const listChange = function() {
  let list = document.getElementById('favorite-things');
  list.removeChild(list.lastElementChild);
}
listChange();
  // Part 4
const specialFontChange = function () {
  let specialFont = document.querySelectorAll('.special-title');
  specialFont.forEach(function(i) {
    i.style.fontSize = '2rem';
  });
}
specialFontChange();
  // Part 5
const removeChicago = function(){
  let removeRace = document.getElementById('past-races');
  removeRace.removeChild(removeRace.childNodes[7]);
  console.log(document.getElementById('past-races').childNodes);
}
removeChicago();
  // Part 6
const addPastRace = function() {
  let ul = document.getElementById('past-races');
  let li = document.createElement('li');
  li.appendChild(document.createTextNode('Burlington'));
  ul.appendChild(li);
}
addPastRace();
  // Part 7
// const addBlogPost = function(){
//   let newDiv = document.createElement('div.blog-post');
//   div.appendChild('newDiv');
//   let newH1 = document.createElement('h1');
//   h1.appendChild(document.createTextNode('hello'));
// }
// addBlogPost();//really hard time with this one
  // Part 8
document.querySelector('#quote-of-the-day').addEventListener('click', randomQuote);

  // Part 9




 });
