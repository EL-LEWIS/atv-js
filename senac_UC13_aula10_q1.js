/**
 * O codigo em js permite que adcione 3 tasks mas removendo o ultimo
 * 
 * @param {string[]}tasks
 * 
 * @returns {string[]}
 */

const tasks = [];

tasks.push('jobs');
tasks.push('program');
tasks.push('training');

tasks.pop();

console.log(tasks);
