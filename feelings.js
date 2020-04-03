const brain = require('brain.js')
const net = new brain.recurrent.LSTM()
const feelData = require('./feelings.json')

const trainingData = feelData.map(item => ({
    input: item.feel,
    output: item.result
  }));
  
  net.train(trainingData, {
    iterations: 2000
  });
  

const output = net.run('good') // 'happy'
console.log(output)