
lista = window.localStorage;

tabla = document.getElementById("tabla");

var registrados = lista.getItem("registrados");
registrados = JSON.parse(registrados);

if (registrados == null) {
registrados = [];

notienenada = true;
}

function registro() {
console.log(registrados);
codigo = document.getElementById("codigo").value;
cedula = document.getElementById("cedula").value;
nombre = document.getElementById("nombre").value;
apellido = document.getElementById("apellido").value;
fecha = document.getElementById("fecha").value;
total = document.getElementById("total").value;

if(codigo=="" || cedula=="" || nombre=="" || apellido=="" || fecha=="" || total==""){

  swal("Llenar todos los campos para continuar",{
    icon:"error"
  })

  return false;
}else if(isNaN(cedula)){

  swal("La cedula debe ser numerica",{
    icon:"error"
  })
}else if(!isNaN(nombre)){

  swal("El nombre debe ser alfabetico",{
    icon:"error"
  })
}else if(!isNaN(apellido)){

  swal("El apellido debe ser numerico",{
    icon:"error"
  })
}else if(isNaN(total)){

  swal("El total debe ser numerico",{
    icon:"error"
  })

}
else{





existe = false;
b = false;

console.log("jnds");

for (var i in registrados) {
  let tabla = [];

  dlocal = localStorage.getItem("registrados");

  if (dlocal !== null) {
    tabla = JSON.parse(dlocal);
  }

  tabla.forEach(function (mostrar, i) {
    if (mostrar.codigo == codigo) {
      existe = true;
    }
  });
}

if (existe == true) {
  swal("Codigo Existe",{
    icon: "error"
  });
} else if ((notienenada = true)) {
  
  let objeto_clientes = {
    codigo,
    cedula,
    nombre,
    apellido,
    fecha,
    total
  };

  registrados.push(objeto_clientes);

  lista.setItem("registrados", JSON.stringify(registrados));



  
  
  location.reload();
}


}
cargar_datos()
}
function cargar_datos() {
let tabla = [];

dlocal = localStorage.getItem("registrados");
console.log(dlocal);
taskbody = document.querySelector("#tabla tbody");

if (dlocal !== null) {
  tabla = JSON.parse(dlocal);
}

taskbody.innerHTML = "";

tabla.forEach(function (mostrar, i) {
  var tr = document.createElement("tr"),
    tdcodigo = document.createElement("td"),
    tdcedula = document.createElement("td"),
    tdNombre = document.createElement("td"),
    tdApellido = document.createElement("td");
    tdfecha = document.createElement("td");
    tdtotal = document.createElement("td");
    



  tdcodigo.innerHTML = mostrar.codigo;
  tdcedula.innerHTML = mostrar.cedula;
  tdNombre.innerHTML = mostrar.nombre;
  tdApellido.innerHTML = mostrar.apellido;
  tdfecha.innerHTML = mostrar.fecha;
  tdtotal.innerHTML = mostrar.total;

 

  

  tr.appendChild(tdcodigo);
  tr.appendChild(tdcedula);
  tr.appendChild(tdNombre);
  tr.appendChild(tdApellido);
  tr.appendChild(tdfecha);
  tr.appendChild(tdtotal);



  taskbody.appendChild(tr);
});
}

cargar_datos();

function limpiar(){
  codigo = document.getElementById("codigo").value = "";
  cedula = document.getElementById("cedula").value = "";
  nombre = document.getElementById("nombre").value = "";
  apellido = document.getElementById("apellido").value = "";
  fecha = document.getElementById("fecha").value = "";
  total = document.getElementById("total").value = "";
}


