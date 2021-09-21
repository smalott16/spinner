const timeoutFunc = function(interval, char) {setTimeout(() => {
  return process.stdout.write(`\r${char}    `)
}, interval)
};

const characters = ['|','/', '-', '\\'];

let delay = 0
for (let i = 0; i < characters.length * 2 + 1; i++) {
  timeoutFunc(delay, characters[i % characters.length]);
  delay +=200;
}

setTimeout(() => {
  process.stdout.write('\n')
}, delay + 200);

