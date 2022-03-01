'use strict';


/*

aik84.js

Version: 0.0.1

Author: Kalinin Alexandr https://github.com/aik84from

*/


let sigmoid = (x) => {
  return 1 / (1 + Math.exp(-x));
};


let kineticEnergy = (mass, velocity) => {
  return (mass * Math.pow(velocity, 2)) * 0.5;
};


let getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
};


let getRandomElement = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};


let getRandomElements = (items, n) => {
  let result = [];
  for (let i = 0; i < n; i++) {
    result.push(getRandomElement(items));
  }
  return result;
};


let max = (items) => {
  return Math.max(...items);
};


let min = (items) => {
  return Math.min(...items);
};


let sum = (items) => {
  return items.reduce((a, b) => a + b, 0);
};


let avg = (items) => {
  return (sum(items) / items.length);
};


let median = (items) => {
  const sorted = items.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
};


let factorial = (x) => {
  if (x < 0) {
    return -1;
  } else if (x == 0) {
    return 1;
  } else {
    return (x * factorial(x - 1));
  }
};


let euclideanDistance = (a, b) => {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += Math.pow(a[i] - b[i], 2);
  }
  return Math.sqrt(result);
};


let manhattanDistance = (a, b) => {
  let result = 0;
  for (let i = 0; i < a.length; i++) {
    result += Math.abs(a[i] - b[i]);
  }
  return result;
};


let minMaxNormalization = (items) => {
  let minValue = min(items);
  let maxValue = max(items);
  let result = [];
  for (let i = 0; i < items.length; i++) {
    result.push((items[i] - minValue) / (maxValue - minValue));
  }
  return result;
};


let shuffle = (items) => {
  let randomIndex;
  let currentIndex = items.length;
  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [items[currentIndex], items[randomIndex]] = [items[randomIndex], items[currentIndex]];
  }
  return items;
};


module.exports = {
    max: max,
    min: min,
    sum: sum,
    avg: avg,
    median: median,
    factorial: factorial,
    euclideanDistance: euclideanDistance,
    manhattanDistance: manhattanDistance,
    sigmoid: sigmoid,
    kineticEnergy: kineticEnergy,
    minMaxNormalization: minMaxNormalization,
    getRandomInt: getRandomInt,
    getRandomElement: getRandomElement,
    getRandomElements: getRandomElements,
    shuffle: shuffle
};

