export function sort(arr, desc = false){
  return arr.sort(
    (a, b) => (desc ? b.id - a.id : a.id - b.id)
  )
}

export function debounce(func, wait = 500){
  let timeout;
  return function(event){
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.call(this, event);
    }, wait);
  }
}

export function listStyle() {
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

export function filter(arr, value){
  return arr.filter(
    item => item.text.toLowerCase().indexOf(value.toLowerCase()) > -1
  );
}