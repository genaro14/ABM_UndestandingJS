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
  let value = personList.some(elem => elem.dni === doc_input);
  if (!value){
    console.log('Elemento inexistente');
    alert("Elemento inexistente");
    return false;
  }
  else{
    delete_id( doc_input );
     console.log(personList);
     showPersonList();
     return false;
  }
}
function handleSubmit() {
    let dni = document.getElementById('dni').value;
    let name = document.getElementById('firstname').value;
    let lastname = document.getElementById('lastname').value;
    let mail = document.getElementById('mail').value;
    let tel = document.getElementById('tel').value;
    let active = document.getElementById('active').checked;
    // console.log('dni', dni);
    // console.log('name', name);
    // console.log('lastname', lastname);
    // console.log('mail', mail);
    // console.log('tel', tel);
    // console.log('active', active);
    let value = personList.find(elem => elem.dni === dni);
    if (value){
      console.log('Elemento ya ingresado');
      alert("Elemento ya ingresado");
      return false;
    }
    else{
    let person = {
        dni,
        name,
        lastname,
        mail,
        tel,
        active
    };
    personList.push(person);
    showPersonList();
    return false;
    }
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
        if(person.active) {
        var row = table.insertRow(index + 1);
        row.insertCell(0).innerHTML = person.dni;
        row.insertCell(1).innerHTML = person.name;
        row.insertCell(2).innerHTML = person.lastname;
        row.insertCell(3).innerHTML = person.mail;
        row.insertCell(4).innerHTML = person.tel;
        row.insertCell(5).innerHTML = checkbox(person.active, person.dni);
        }
    });
}
  function delete_id( id ) {
      let limit = personList.length;
      console.log(personList);
      for (var i = 0; i < limit; i++) {
         if (personList[i].dni == id) {
           personList.splice(i,1);
           console.log('Documento borrado', id);
           console.log(personList);
           return;
         }
         console.log(personList);
      }
    }
    function downloadObjectAsJson(){
    exportObj = personList;
    exportName = 'archivo';
    console.log(personList);
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href",     dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  }

  function loadFile() {
    var input, file, fr;

    if (typeof window.FileReader !== 'function') {
      alert("The file API isn't supported on this browser yet.");
      return;
    }

    input = document.getElementById('fileinput');
    if (!input) {
      alert("Um, couldn't find the fileinput element.");
    }
    else if (!input.files) {
      alert("This browser doesn't seem to support the `files` property of file inputs.");
    }
    else if (!input.files[0]) {
      alert("Please select a file before clicking 'Load'");
    }
    else {
      file = input.files[0];
      fr = new FileReader();
      fr.onload = receivedText;
      fr.readAsText(file);
    }

    function receivedText(e) {
      let lines = e.target.result;
      const jsonList = JSON.parse(lines);
      console.log(jsonList);
      personList.push(jsonList);
      console.log(personList);
      showPersonList();
      alert("Info cargada")
    }
  }
  function checkbox(estado, dni){
    if (estado){
        let boton =  '<input type="checkbox" checked="checked" id='+dni+' onclick = changeState('+dni+')>'
        return boton
    }
    else {
        let boton = '<input type="checkbox" id='+dni+' onclick = changeState('+dni+')>'
        return boton

    }
}
function changeState (name){
    let checkBox = document.getElementById(name);
    if (checkBox.checked == true){
        console.log("Active TRUE", name);
        personList.map(function(dato){
            if(dato.dni == name){
              dato.active = true;
            }

            return dato;
        });
    }
    else {
        console.log("Active FALSE", name);
        personList.map(function(dato){
            if(dato.dni == name){
              dato.active = false;
            }
            return dato;
        });
    }
}
