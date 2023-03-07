let array = [];

for (let i = 1; i <= 100; i++) {
  array.push(i);
}
//
const filteredArray = array
  .filter((e) => e % 2 === 0)
  .filter((e) => (e += 2))
  .filter((e) => e < 18)
  .toString();
