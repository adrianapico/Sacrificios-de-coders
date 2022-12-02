function insertarNombre(event){

  let userName = document.querySelector('#userName').value;

  let opcion = '<li>' + userName + '</li>';

  let listName = document.querySelector('#listName');

  listName.innerHTML += opcion;
  // alert('Se ha insertado el nombre')

}





// let userName = document.querySelector('#userName');

// let botonFlecha = document.querySelector('#botonFlecha');

// let doneListNameCoders = document.querySelector('#doneListNameCoders');



// botonFlecha.addEventListener('click', () => {
//   doneListNameCoders.textContent = userName.value


 
// });



