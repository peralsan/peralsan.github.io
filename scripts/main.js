let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/luna2.jpg') {
      myImage.setAttribute ('src','images/luna3.jpeg');
    } else {
      myImage.setAttribute ('src','images/luna2.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
function setUserName() {
    let myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'La luna, para ' + myName;
  } 
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'La luna, para ' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }