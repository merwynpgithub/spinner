setTimeout(() => {
  process.stdout.write('\r|   ');
}, 500);

setTimeout(() => {
  process.stdout.write('\r/   ');
}, 1000);

setTimeout(() => {
  process.stdout.write('\r-   ');
}, 1500);

setTimeout(() => {
  // Need to escape the backslash since it's a special character.
  process.stdout.write('\r\\   '); 
}, 2000);

setTimeout(() => {
  process.stdout.write('\r|   ');
}, 2500);