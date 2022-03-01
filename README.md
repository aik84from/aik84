
# aik84.js

This library provides various functions for common tasks like random number generation, descriptive statistics, normalization, factorial, sigmoid, kinetic energy, Euclidean distance and Manhattan distance.

Version: 0.0.1

Author: Kalinin Alexandr https://github.com/aik84from


### Calculates the sigmoid function

```javascript
console.log(sigmoid(1.8) == 0.8581489350995123);
```

### Factorial

```javascript
console.log(factorial(4) == 24);
```

### Kinetic Energy

```javascript
console.log(kineticEnergy(18, 22) == 4356);
```

### Normalization

```javascript
console.log(minMaxNormalization([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
```

### Descriptive Statistics

```javascript
console.log(max([0, 1, 2, 3, 4]) == 4);
console.log(min([0, 1, 2, 3, 4]) == 0);
console.log(avg([0, 1, 2, 3, 4]) == 2);
console.log(sum([0, 1, 2, 3, 4]) == 10);
console.log(median([0, 1, 2, 3, 4]) == 2);
```

### Distance

```javascript
console.log(euclideanDistance([4, 9, 12], [7, 33, 14]) == 24.269322199023193);
console.log(manhattanDistance([4, 9, 12], [7, 33, 14]) == 29);
```

### Random

```javascript
console.log(getRandomInt(10, 50));
console.log(getRandomElement([0, 1, 2, 3, 4, 5]));
console.log(getRandomElements([0, 1, 2, 3, 4, 5], 3));
console.log(shuffle([0, 1, 2, 3, 4, 5]));
```

