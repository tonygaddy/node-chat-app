// Unix Epoch: Jan 1st 1970 00:00:00 am
// Unix Timestamp: number = number of milliseconds since the Unix Epoch
// let date = new Date();
// console.log(date.getMonth() + 1);

const moment = require('moment');

// var date = moment();
// console.log(date.format('MMM Do, YYYY '));

// Challenge: 10:35 am or 6:01 pm
let time = moment();
console.log(time.format('h:mm a'));
