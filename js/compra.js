
var tb = document.getElementById('tabla');




(function(){
    var btn_editar = document.getElementById('editar');
    var btn_enviar = document.getElementById('enviar');

    btn_editar.disabled=true;
    btn_enviar.disabled=false;
})();


vector = []
mistorage= window.localStorage;


function enviar(){
    totalperro=0

var cantidad1= document.getElementById('cantidad1').value;
cantidad1=parseInt(cantidad1)
var perros = document.getElementById('opcionesperros').value;



if(perros=="Mexicano"){


  totalperro= cantidad1*7000
 
 

}else if(perros=="Suizo")
{

    
    totalperro=cantidad1*5000
}else if(perros=="Doble")
{

    totalperro=cantidad1*6000
}else if(perros=="Sencillo")
{
totalperro=cantidad1*3000

}

totalhamburguesas=0
var cantidad2= document.getElementById('cantidad2').value;
cantidad2=parseInt(cantidad2)
var hamburguesas = document.getElementById('opcioneshamburguesas').value;

 

if(hamburguesas=="Mexicana"){

    totalhamburguesas = cantidad2*8000
    
}
else if(hamburguesas=="Beacon")
{
    totalhamburguesas= cantidad2*9000
}
else if(hamburguesas=="Lafina")
{
    totalhamburguesas= cantidad2*10000
}
else if(hamburguesas=="Mcdomal")
{

    totalhamburguesas=cantidad2*11000
}
else if(hamburguesas=="Mixta")
{

    totalhamburguesas=cantidad2*12000
}
else if(hamburguesas=="Queso")
{
    totalhamburguesas=cantidad2*13000
}
else if(hamburguesas=="Laparea")
{
    totalhamburguesas=cantidad2*14000
}
else if(hamburguesas=="Elmedio")
{
    totalhamburguesas=cantidad2*15000
}

totalpizza=0
var cantidad3= document.getElementById('cantidad3').value;
cantidad3=parseInt(cantidad3)
var pizza = document.getElementById('opcionespizza').value;



if(pizza=="Currambera"){

    totalpizza=cantidad3*20000
}
else if(pizza=="4sabores")
{
    totalpizza=cantidad3*25000
}
else if(pizza=="Caprichosa")
{
    totalpizza=cantidad3*30000
}
else if(pizza=="Jamon"){

    totalpizza= cantidad3*15000
}


totalsalchipapa=0
var cantidad4= document.getElementById('cantidad4').value;
cantidad3=parseInt(cantidad3)
var salchipapa = document.getElementById('opcionessalchi').value;


if(salchipapa=="Salchipollo"){

    totalsalchipapa=cantidad4*12000
}
else if(salchipapa=="Combinada")
{
    totalsalchipapa=cantidad4*20000
}
else if(salchipapa=="Hawaiana")
{
    totalsalchipapa=cantidad4*15000
}
else if(salchipapa=="Sencilla"){

    totalpizza= cantidad4*7000
}



var p=document.getElementById('opcionesperros');
var h = document.getElementById('opcioneshamburguesas');
var pi=document.getElementById('opcionespizza');
var s = document.getElementById('opcionessalchi');

total=0
total=totalsalchipapa+totalperro+totalpizza+totalhamburguesas



if(p.value==0 &&  h.value==0 && pi.value==0 && s.value==0 )
{
    alert("Escoja algún producto");

} else


{

    
    productos={
    

    producto1:perros,
    cantidadp:cantidad1,
    pago: totalperro,

    producto2:hamburguesas,
    cantidadh:cantidad2,
    pago2:totalhamburguesas,

    producto3:pizza,
    cantidadpi:cantidad3,
    pago3:totalpizza,

    producto4:salchipapa,
    cantidadsa:cantidad4,
    pago4:totalsalchipapa,

    total:total

};





vector.push(productos)


mistorage.setItem("Productos",JSON.stringify(vector))



dt=
`

<table class="table">

<tr>
<th>Perros</th>
<th>Cantidad</th>
<th>Total</th>

<th>Hamburguesas</th>
<th>Cantidad</th>
<th>Total</th>

<th>Pizza</th>
<th>Cantidad</th>
<th>Total</th>

<th>Salchipapa</th>
<th>Cantidad</th>
<th>Total</th>

<th>Total a pagar</th>
<th>Eliminar</th>
<th>Editar</th>

</tr>

</table>`
for(var i=0; i<vector.length;i++){

    dt += `

    <table class="table">
    <tr class="text-center" id="fila">
   
       <td>${vector[i].producto1}</td>
       <td>${vector[i].cantidadp}</td>
       <td>${vector[i].pago}</td>

       <td>${vector[i].producto2}</td>
       <td>${vector[i].cantidadh}</td>
       <td>${vector[i].pago2}</td>

       <td>${vector[i].producto3}</td>
       <td>${vector[i].cantidadpi}</td>
       <td>${vector[i].pago3}</td>

        <td>${vector[i].producto4}</td>
       <td>${vector[i].cantidadsa}</td>
       <td>${vector[i].pago4}</td>

       <td>${vector[i].total}</td>

       <td><button class="form-control btn btn-outline-danger "onclick="eliminar(this)"><b>ELIMINAR</b></button></td>
       <td><button class="btn btn-outline-warning form-control" onclick="editar(this)"><b>EDITAR</b></button></td>
       
    </tr>
    
    </table>`
   
}

document.getElementById('tabla').innerHTML= dt


}
}


function eliminar(td){

    swal({

        text:"Está segur@  de eliminar la informacion?",
        buttons:["SÍ","NO"]

    })
    .then((confirmacion)=>{

if(confirmacion){

   
       
        
}else{

    borrar = td.parentNode.parentNode;
    borrar.parentNode.removeChild(borrar);
  
    
    var cont = document.getElementById('tabla').rows.length;

    swal("",{
        icon:"success",
        text:"Eliminacion existosa"
    })
}

if(cont==1){
    tb.style.display='none';

    location.reload()
}


    })
  




}


function limpiar(){
    document.getElementById('cantidad1').value=0

document.getElementById('cantidad2').value=0

document.getElementById('cantidad3').value=0

document.getElementById('cantidad4').value=0
}

function editar(td){
    
    selectedRow = td.parentElement.parentElement;
    document.getElementById("opcionesperros").value = selectedRow.cells[0].innerHTML;
    document.getElementById("cantidad1").value = selectedRow.cells[1].innerHTML;
    document.getElementById("opcioneshamburguesas").value = selectedRow.cells[3].innerHTML;
    document.getElementById("cantidad2").value = selectedRow.cells[4].innerHTML;
    document.getElementById("opcionespizza").value = selectedRow.cells[6].innerHTML;
    document.getElementById("cantidad3").value = selectedRow.cells[7].innerHTML;
    document.getElementById("opcionessalchi").value = selectedRow.cells[9].innerHTML;
    document.getElementById("cantidad4").value = selectedRow.cells[10].innerHTML;
    var btn_editar = document.getElementById('editar');
    var btn_enviar = document.getElementById('enviar');

    btn_editar.disabled=false;
    btn_enviar.disabled=true;

  
    
    

}


function Actualizar() {
    cantidad1=document.getElementById("cantidad1").value ;
    perros=document.getElementById("opcionesperros").value ;
    cantidad2=document.getElementById("cantidad2").value ;
    hamburguesas=document.getElementById("opcioneshamburguesas").value ;
    cantidad3=document.getElementById("cantidad3").value ;
    pizza=document.getElementById("opcionespizza").value ;
    cantidad4=document.getElementById("cantidad4").value ;
    salchipapa=document.getElementById("opcionessalchi").value ;
    var btn_editar = document.getElementById('editar');
    var btn_enviar = document.getElementById('enviar');

    cantidad1=parseInt(cantidad1)
    cantidad2=parseInt(cantidad2)
    cantidad3=parseInt(cantidad3)
    cantidad4=parseInt(cantidad4)

/*enviar();*/
    



    
     
totalperro=0
        if(perros=="Mexicano"){


            totalperro= cantidad1*7000
           
           
          
          }else if(perros=="Suizo")
          {
          
              
              totalperro=cantidad1*5000
          }else if(perros=="Doble")
          {
          
              totalperro=cantidad1*6000
          }else if(perros=="Sencillo")
          {
          totalperro=cantidad1*3000
          
          }
          
          totalhamburguesas=0
    
          if(hamburguesas=="Mexicana"){
          
              totalhamburguesas = cantidad2*8000
              
          }
          else if(hamburguesas=="Beacon")
          {
              totalhamburguesas= cantidad2*9000
          }
          else if(hamburguesas=="Lafina")
          {
              totalhamburguesas= cantidad2*10000
          }
          else if(hamburguesas=="Mcdomal")
          {
          
              totalhamburguesas=cantidad2*11000
          }
          else if(hamburguesas=="Mixta")
          {
          
              totalhamburguesas=cantidad2*12000
          }
          else if(hamburguesas=="Queso")
          {
              totalhamburguesas=cantidad2*13000
          }
          else if(hamburguesas=="Laparea")
          {
              totalhamburguesas=cantidad2*14000
          }
          else if(hamburguesas=="Elmedio")
          {
              totalhamburguesas=cantidad2*15000
          }
          
          totalpizza=0
          
          
          if(pizza=="Currambera"){
          
              totalpizza=cantidad3*20000
          }
          else if(pizza=="4sabores")
          {
              totalpizza=cantidad3*25000
          }
          else if(pizza=="Caprichosa")
          {
              totalpizza=cantidad3*30000
          }
          else if(pizza=="Jamon"){
          
              totalpizza= cantidad3*15000
          }
          
          
          totalsalchipapa=0
  
          if(salchipapa=="Salchipollo"){
          
              totalsalchipapa=cantidad4*12000
          }
          else if(salchipapa=="Combinada")
          {
              totalsalchipapa=cantidad4*20000
          }
          else if(salchipapa=="Hawaiana")
          {
              totalsalchipapa=cantidad4*15000
          }
          else if(salchipapa=="Sencilla"){
          
              totalpizza= cantidad4*7000
          }
          total=0
          total=totalsalchipapa+totalperro+totalpizza+totalhamburguesas;

          productos={

            producto1:perros,
            cantidadp:cantidad1,
            pago: totalperro,
        
            producto2:hamburguesas,
            cantidadh:cantidad2,
            pago2:totalhamburguesas,
        
            producto3:pizza,
            cantidadpi:cantidad3,
            pago3:totalpizza,
        
            producto4:salchipapa,
            cantidadsa:cantidad4,
            pago4:totalsalchipapa,
        
            Total:total
        
        };

       
        
         
        selectedRow.cells[0].innerHTML = productos.producto1;
        selectedRow.cells[1].innerHTML = productos.cantidadp;
        selectedRow.cells[2].innerHTML = productos.pago;
        selectedRow.cells[3].innerHTML = productos.producto2;
        selectedRow.cells[4].innerHTML = productos.cantidadh;
        selectedRow.cells[5].innerHTML = productos.pago2;
        selectedRow.cells[6].innerHTML = productos.producto3;
        selectedRow.cells[7].innerHTML = productos.cantidadpi;
        selectedRow.cells[8].innerHTML = productos.pago3;
        selectedRow.cells[9].innerHTML = productos.producto4;
        selectedRow.cells[10].innerHTML = productos.cantidadsa;
        selectedRow.cells[11].innerHTML = productos.pago4;
        selectedRow.cells[12].innerHTML = productos.Total;
        

        btn_editar.disabled=true;
        btn_enviar.disabled=false;

    
        localStorage.setItem("Productos", JSON.stringify(productos))

        console.log(localStorage)
       
      swal({
          text:"Edicion, exitosa",
          icon:"success"
      })
        
      
    
    
}

