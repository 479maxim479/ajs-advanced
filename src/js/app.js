export default function sortingByProps(object, array) {
  const resultArr = [];

  for (const prop in object) {
    if (Object.prototype.hasOwnProperty.call(object, prop) && !array.includes(prop)) {
      resultArr.push({ key: prop, value: object[prop] });
    }
  }

  resultArr.sort((a, b) => ((a.key > b.key) ? 1 : -1));

  for (const el in array.reverse()) {
    if (Object.prototype.hasOwnProperty.call(object, array[el])) {
      resultArr.unshift({
        key: array[el],
        value: object[array[el]],
      });
    }
  }

  return resultArr;
}
