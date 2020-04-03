const brain = require('brain.js')
const net = new brain.NeuralNetwork()

net.train([
    { input: [1,2], output: [0] }, // Team 1 wins
    { input: [1,3], output: [0] }, // Team 1 wins
    { input: [2,3], output: [1] }, // Tema 3 wins
  ])

// Based on prevoius data , if new team get to play :
const output = net.run([1,4])
const output2 = net.run([2,4])

console.log('1 & 4 : ',output) // 0.006 => Team 1 WIN
console.log('2 & 4',output2) // 0.764 => Tema 4 WIN