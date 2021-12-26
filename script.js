let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let cubeWrapper = document.getElementById('cube-container');

numbers.forEach((item) => {
  cubeWrapper.innerHTML += '<li data-item=' + item + '>' + item + '</li>';
})

shuffleArray = () => {
  let index = 0
  numbers = numbers.sort(() => {
    return 0.5 - Math.random();
  });
  cubeWrapper.innerHTML = '';
  while (index < numbers.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbers[index];
    cubeItem.setAttribute('data-item', numbers[index]);
    cubeWrapper.appendChild(cubeItem);
    ++index;
  }
};

sortArray = () => {
  let index = 0
  numbers = numbers.sort((a, b) => {
    return a - b;
  });
  cubeWrapper.innerHTML = '';
  while (index < numbers.length) {
    let cubeItem = document.createElement("li");
    cubeItem.innerHTML = numbers[index];
    cubeItem.setAttribute('data-item', numbers[index]);
    cubeWrapper.appendChild(cubeItem);
    ++index;
  }
};