function randomFloat(min, max) {
    return Math.random() * (max - min) + min;
  }

  function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  
  module.exports = {
    randomFloat,
    randomInt
  }