const colors = ['#CD5C5C', '#B22222', '#FF69B4', '#20B2AA', '#00FF00', '#FFFF00'];

const body = document.querySelector('body');
const element = body.querySelectorAll('*');

const backlight = (RandomNumber) => {
    
    let number = Math.floor(Math.random()*element.length);
    let randomColor = Math.floor(Math.random()* colors.length);

    element[number].style.backgroundColor = ('background color?',colors[randomColor]);
};

const clearLight = (RandomNumber)=> {
    let number = Math.floor(Math.random()*element.length);

    element[number].style.removeProperty('background-color');
}

const randomNum = () => {
    let numRandom = Math.floor(Math.random()*element.length);
}


const timerAdd = setInterval(()=> {
    backlight(randomNum);
  }, 500);

  const timerClear = setInterval(()=> {
    clearLight(randomNum);
  }, 100);