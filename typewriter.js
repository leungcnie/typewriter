const sentence = "hello there from lighthouse labs";
let index = 0;

// const callback = () => {
//   if (index === sentence.length) {
//     return clearInterval(timer);
//   }
//   process.stdout.write(sentence[index]);
//   index++;
// }

const timer = setInterval(() => {
  if (index === sentence.length) {
    console.log();
    return clearInterval(timer);
  }
  process.stdout.write(sentence[index]);
  index++;
}, 50);
