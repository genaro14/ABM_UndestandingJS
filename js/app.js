/* Problema:
*  Crear un programa que almacene información de personas.
*  Debe permitir agregar una persona nueva, mostrar el
*  listado y borrar una persona según su dni.
*  Además se debe poder agregar si la persona está activa o no.
*  Sólo se deben mostrar el listado de personas activas.
*  Datos de la persona: dni, nombre, apellido, email, direccion,
*  telefono, edad, activa.
*/
/**
 * Código para tomar de referencia. No hace falta utilizarlo,
 * lo pueden implementar como quieran.
 */
const personList = [];

function handleId() {
  let doc_input = document.getElementById('doc_input').value;
  delete_id( doc_input );
  console.log(personList);
  showPersonList();
  return false;
}
function handleSubmit() {
    let dni = document.getElementById('dni').value;
    let name = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let mail = document.getElementById('mail').value;
    let tel = document.getElementById('tel').value;
    let active = document.getElementById('active').value;
    console.log('dni', dni);
    console.log('name', name);
    console.log('lastname', lastname);
    console.log('mail', mail);
    console.log('tel', tel);
    console.log('active', active);

    let person = {
        dni,
        name,
        lastname,
        mail,
        tel,
        active,
    };
    personList.push(person);
    showPersonList();
    return false;
}
// Funcion que muestra el listado de personas.
// Cada vez que se ejecuta la función se vuelve a crear toda la lista.
function showPersonList() {
    var table = document.getElementById("table");
    table.innerHTML = '';

    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    var cell6 = row.insertCell(5);
    cell1.innerHTML = '<b>DNI</b>';
    cell2.innerHTML = '<b>Nombre</b>';
    cell3.innerHTML = '<b>Apellido</b>';
    cell4.innerHTML = '<b>Correo</b>';
    cell5.innerHTML = '<b>Teléfono</b>';
    cell6.innerHTML = '<b>Activo</b>';
    personList.forEach(function(person, index) {
        var row = table.insertRow(index + 1);
        row.insertCell(0).innerHTML = person.dni;
        row.insertCell(1).innerHTML = person.name;
        row.insertCell(2).innerHTML = person.lastname;
        row.insertCell(3).innerHTML = person.mail;
        row.insertCell(4).innerHTML = person.tel;
        row.insertCell(5).innerHTML = person.active;
    });
}
  function delete_id( id ) {
      let limit = personList.length;
      console.log(personList);
      for (var i = 0; i < limit; i++) {
         if (personList[i].dni == id) {
           personList.splice(i,1);
           console.log('Documento borrado', id);/// -----
           console.log(personList);
           return;
         }
         console.log(personList);
      }
    }
