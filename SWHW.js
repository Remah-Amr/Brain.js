const brain = require('brain.js')
const net = new brain.recurrent.LSTM()
const data = require('./data.json')

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
  }));
  
  net.train(trainingData, {
    iterations: 2000
  });
  

const output = net.run('The code has some bugs') // software
console.log(output)