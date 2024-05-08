setTimeout(() => {
  const spinner = setInterval (() => {
      process.stdout.write('\r|   ');
    setTimeout(() => {
      process.stdout.write('\r/   ');
    }, 200);
    
    setTimeout(() => {
      process.stdout.write('\r-   ');
    }, 500);
    setTimeout(() => {
      process.stdout.write('\r\\   '); 
  }, 700);
}, 800);


setTimeout(() => {
  clearInterval(spinner)
  process.stdout.write('\n');
}, 3200);
}, 1000);

