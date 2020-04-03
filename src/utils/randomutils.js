/**
 * random float value 
 * @param {*} min minimum value 
 * @param {*} max  maximum value
 */
function randomFloat(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * random int value
 * @param {*} min minimum value 
 * @param {*} max maximum value
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * random value of specified length 
 * @param {*} length 
 */
function randomLength(length) {
  const min = Math.pow(10, length - 1);
  const max = Math.pow(10, length) - 1;
  return randomInt(min, max);
}

module.exports = {
  randomFloat,
  randomInt,
  randomLength
}