export function sort(arr, desc = false) {
  return [...arr].sort((a, b) => (desc ? b.id - a.id : a.id - b.id));
  // array.sort会改变原数组。因为原数组是state，直接修改state不符合react到最佳实践，所以要先用spread复制一下array
}

export function debounce(func, wait = 500) {
  let timeout;
  return function (event) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.call(this, event);
    }, wait);
  };
}

export function listStyleWithRandomColor() {
  let R = Math.floor(Math.random() * 250);
  let G = Math.floor(Math.random() * 250);
  let B = Math.floor(Math.random() * 250);
  let A = 0.5;
  return {
    background: `rgba(${R},${G},${B},${A})`,
    color: `rgb(${G},${B},${R})`,
    border: `2px solid rgb(${B},${G},${R})`,
  };
}

export function filter(arr, value) {
  return arr.filter(
    (item) => item.text.toLowerCase().indexOf(value.toLowerCase()) > -1
  );
}
