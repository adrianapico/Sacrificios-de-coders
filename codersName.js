
let userName = document.querySelector('#userName');

let botonFlecha = document.querySelector('#botonFlecha');

let listNameCoders = document.querySelector('#listNameCoders');


botonFlecha.addEventListener('click', () => {
  listNameCoders.textContent = userName.value
});