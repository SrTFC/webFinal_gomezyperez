facturas = window.localStorage;

var facturados = facturas.getItem("Facturas");
facturados = JSON.parse(facturados);

if (facturados == null) {
facturados = [];

notienenada = true;
}

 function facturar(){


  var dni = document.getElementById('dni').value;
  dni = parseInt(dni)
 
existe = false;
b = false;

for (var i in facturados) {
    let tabla = [];

    
  
    dlocals = localStorage.getItem("Facturas");
  
    if (dlocals !== null) {
      tabla = JSON.parse(dlocals);
    }
  
    tabla.forEach(function (iterador, i) {
      if (iterador.DNI == dni) {
        existe = true;

        console.log("Entró")
      }
    });
  }
  
  if (existe == true) {
    swal("DNI Existe",{
      icon: "error"
    });
  } else if ((notienenada = true)) {


    let objeto_facturas = {
      Nombre:n,
     DNI:dni,
      Telefono:t,
      Email:emaill,
    };
  
    facturados.push(objeto_facturas);
  
    facturas.setItem("Facturas", JSON.stringify(facturados));

    swal("Facturacion realizada",{
      icon:"success"
    })
}
resultado();

}

var intervalo = setInterval(resultado,1000)


function resultado(){
  total1=0
  cantidad1=0
  cantidad2=0
  cantidad3=0
  cantidad4=0
  cantidad5=0
  cantidad6=0
  cantidad7=0
  cantidad8=0
  cantidad9=0

  precio1=0
  precio2=0
  precio3=0
  precio4=0
  precio5=0
  precio6=0
  precio7=0
  precio8=0
  precio9=0
  
cantidad1=document.getElementById('cantidad1').value;
precio1=document.getElementById('precio1').value;

cantidad2=document.getElementById('cantidad2').value;
precio2=document.getElementById('precio2').value;

cantidad3=document.getElementById('cantidad3').value;
precio3=document.getElementById('precio3').value;

cantidad4=document.getElementById('cantidad4').value;
precio4=document.getElementById('precio4').value;

cantidad5=document.getElementById('cantidad5').value;
precio5=document.getElementById('precio5').value;

cantidad6=document.getElementById('cantidad6').value;
precio6=document.getElementById('precio6').value;

cantidad7=document.getElementById('cantidad7').value;
precio7=document.getElementById('precio7').value;

cantidad8=document.getElementById('cantidad8').value;
precio8=document.getElementById('precio8').value;

cantidad9=document.getElementById('cantidad9').value;
precio9=document.getElementById('precio9').value;


total1= parseFloat(cantidad1)*parseFloat(precio1)

total2= parseFloat(cantidad2)*parseFloat(precio2)

total3= parseFloat(cantidad3)*parseFloat(precio3)

total4= parseFloat(cantidad4)*parseFloat(precio4)

total5= parseFloat(cantidad5)*parseFloat(precio5)

total6= parseFloat(cantidad6)*parseFloat(precio6)

total7= parseFloat(cantidad7)*parseFloat(precio7)

total8= parseFloat(cantidad8)*parseFloat(precio8)

total9= parseFloat(cantidad9)*parseFloat(precio9)


document.getElementById('total1').value="$"+total1
document.getElementById('total2').value="$"+total2
document.getElementById('total3').value="$"+total3
document.getElementById('total4').value="$"+total4
document.getElementById('total5').value="$"+total5
document.getElementById('total6').value="$"+total6
document.getElementById('total7').value="$"+total7
document.getElementById('total8').value="$"+total8
document.getElementById('total9').value="$"+total9




total=total1+total2+total3+total4+total5+total6+total7+total8+total9
iva=parseFloat(total*0.19)
pagar=parseFloat(total)+parseFloat(iva)

document.getElementById('subtotal').value="$"+total
document.getElementById('iva').value=19+"%"
document.getElementById('tiva').value="$"+iva
document.getElementById('pagar').value="$"+pagar



}



function limpiar(){

    
cantidad1=document.getElementById('cantidad1').value=0
precio1=document.getElementById('precio1').value=0

cantidad2=document.getElementById('cantidad2').value=0
precio2=document.getElementById('precio2').value=0

cantidad3=document.getElementById('cantidad3').value=0
precio3=document.getElementById('precio3').value=0

cantidad4=document.getElementById('cantidad4').value=0
precio4=document.getElementById('precio4').value=0

cantidad5=document.getElementById('cantidad5').value=0
precio5=document.getElementById('precio5').value=0

cantidad6=document.getElementById('cantidad6').value=0
precio6=document.getElementById('precio6').value=0

cantidad7=document.getElementById('cantidad7').value=0
precio7=document.getElementById('precio7').value=0

cantidad8=document.getElementById('cantidad8').value=0
precio8=document.getElementById('precio8').value=0

cantidad9=document.getElementById('cantidad9').value=0
precio9=document.getElementById('precio9').value=0


document.getElementById('total1').value="$"+0
document.getElementById('total2').value="$"+0
document.getElementById('total3').value="$"+0
document.getElementById('total4').value="$"+0
document.getElementById('total5').value="$"+0
document.getElementById('total6').value="$"+0
document.getElementById('total7').value="$"+0
document.getElementById('total8').value="$"+0
document.getElementById('total9').value="$"+0
document.getElementById('subtotal').value="$"+0
document.getElementById('tiva').value="$"+0
document.getElementById('pagar').value="$"+0

document.getElementById('n').value=""
document.getElementById('dni').value=""
document.getElementById('t').value=""
document.getElementById('emaill').value=""
document.getElementById('fecha').value=""
document.getElementById('fechav').value=""


}


