const sleep = (time) => (fn) => {
  setTimeout(() => {
    console.log(time, "timeout");
    fn();
  }, time);
};

const arr = [
  sleep(1000),
  (fn) => {
    fn();
    console.log(3, "normal");
  },
  sleep(2000),
  (fn) => {
    fn();
    console.log(4, "normal");
  },
];

// arr.forEach((v) => {
//   v();
// });

// const p = Promise.resolve();
// arr.forEach((v) => {
//   p.then(v);
// });

async function fn() {
  for (let i = 0; i < arr.length; i++) {
    await new Promise((resolve, reject) => {
      arr[i](resolve);
    });
  }
}

fn();
