const now  = new Date()
let hours  = now.getHours()
let minuts  = now.getMinutes()
let seconds = now.getSeconds()
let symbol = '/';
let months  = ["January", "February", "March", "April", "May", "june", 'julay','August', 'September','October', 'november', "december"];
let weekDays  = ['Sunday', "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
const meridian  = hours >= 12 ? "PM" : "AM";
hours = hours % 12 || 12;
minuts  = minuts < 10 ? '0' + minuts : minuts;

const localTime1 = hours + ':' + minuts + ' ' + meridian;
const localTime2 = hours + ':' + minuts + ':' + seconds + ' ' + meridian;
console.log(localTime1);
console.log(localTime2);
console.log(`${now.getUTCDay() + 14}${symbol}${now.getMonth() + 1}${symbol}${now.getFullYear()}`); // 14/04/2024;
console.log(`${now.getDay() + 14} ${months[now.getMonth()]}, ${now.getFullYear()}`); // 14 April, 2024;
console.log(`${months[now.getMonth()].slice(0,3)} ${now.getDay() + 14}, ${now.getFullYear()}`); // Apr 14, 2024;
console.log(`${months[now.getMonth()]} ${now.getDay() + 14}, ${now.getFullYear()}, ${localTime1}`);// April 14, 2024, 08:28 AM
console.log(`${months[now.getMonth()].slice(0,3)}, ${now.getFullYear()}, ${localTime1}`);
console.log(`${weekDays[now.getDay()]}, ${months[now.getMonth()]} ${now.getDay() + 14}, ${now.getFullYear()}, ${localTime1}`);
console.log(`${weekDays[now.getDay()].slice(0,3)}, ${months[now.getMonth()].slice(0, 3)} ${now.getDay() + 14}, ${now.getFullYear()}, ${localTime1}`);