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
 * @see https://learn.javascript.ru/task/random-int-min-max
 * @param {*} min minimum value 
 * @param {*} max maximum value
 */
function randomInt(min, max) {
  return Math.floor(Math.random() * (max + 1 - min)) + min;
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

/**
 * random date
 * @param {Date} start 
 * @param {Date} end 
 */
function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

module.exports = {
  randomFloat,
  randomInt,
  randomLength,
  randomDate
}