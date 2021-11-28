const selectElement = document.getElementById('select-element');
const url = 'http://127.0.0.1:3000/cabinet';


selectElement.addEventListener('change', (event) => {
  window.location.replace(`${url}/?q1=${event.target.value}`); 
})

const saveSelectValue = (el) => {
  return localStorage.setItem(el.name, el.value);
}
const loadSelectValue = (el) => {
  return localStorage.getItem(el.name);
}

selectElement.value = loadSelectValue(selectElement);

