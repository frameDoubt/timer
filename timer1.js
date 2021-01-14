const userInput = process.argv.slice(2);

for (let element of userInput) {
  let numberfied = Number(element);
  if (numberfied > 0) {
    setTimeout(() => {
    process.stdout.write('\x07');
    }, (numberfied * 1000));
  };
};
