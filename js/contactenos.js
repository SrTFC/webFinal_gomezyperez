

var tb = document.getElementById('tabla');

(function(){


    btn_editar = document.getElementById('edi');
    btn_enviar = document.getElementById('env');
   
   btn_editar.disabled=true;
   btn_enviar.disabled=false;
})();

vector = []
contactenos= window.localStorage;

function procesar(){
   
    
    
     var nom = document.getElementById('nom').value;
   
    var apel = document.getElementById('apel').value;
    
    var doc = document.getElementById('doc').value;
    
    var ale = document.getElementById('ale').value;
    
    var fec = document.getElementById('fec').value;

    var gen = document.getElementById('gen').value

    var ed = document.getElementById('ed').value;
    
    var tele= document.getElementById('tele').value;
    
    var cel= document.getElementById('cel').value;
    
    var cor= document.getElementById('cor').value;

    var pag = document.getElementById('pag').value
    

   email= /\w+@\w+\.+[a-z]/;



if (nom==""|| apel==""||  doc==""|| ale==""|| fec==""|| gen==""|| ed=="" || tele==""|| cel==""|| cor=="" || pag==""){

    swal("Obligatorio llenar todos los campos",{
        icon:"error"
    });

    return false;


}else if (isNaN(cel) & isNaN(tele) & isNaN(ed) & isNaN(doc)){


    alert("Celular\nTelefono\nEdad\nDocumento\nDeben ser valores numericos");



}

else if (isNaN(cel )){

    swal("El valor del celular debe ser numero",{
        icon:"error"
    });

    return false;
}

else if(isNaN(ed)){


   
    swal("La edad debe ser numerica",{
        icon:"error"
    });



}else if(isNaN(tele)){



swal("El telefono debe ser numerico",{
    icon:"error"
});

}else if (isNaN(doc)){

 

 swal("El documento debe ser numero",{
    icon:"error"
 });

    return false;


}else if (!email.test(cor)){


swal("Correo mal escrito",{
    icon:"error"
});

return false;



} else if(!isNaN(nom)){

    swal("El nombre debe ser alfabetico",{
        icon:"error"
    })
}


else  if(!isNaN(apel)){

    swal("El apellido debe ser alfabetico",{
        icon:"error"
    })
}
else if(!isNaN(nom) && !isNaN(apel)){

    swal("El nombre y apellido debe ser alfabetico",{
        icon:"error"
    })
}
else {


    var variables={


        Nnombre:nom,
        Aapellidos:apel,
        
      
        
        Ddocumentos:doc,
        
        Aalergias:ale,
        
        Ffecha:fec,
    
        Ggenero:gen,
    
        Eedad:ed, 
    
        Ttelefono:tele,
    
        Ccelular:cel,
    
        Ccorreo:cor,
        Ppagos:pag
    
        };
    
    

    
        
       vector.push(variables)

       contactenos.setItem("Usuario", JSON.stringify(vector))
    
        dt=
        `<tr>
       <th>Nombre</th>
       <th>Apellidos</th>
       <th>Documento</th>
       <th>Alergias</th>
       <th>Fecha</th>
       <th>Edad</th>
       <th>Celular</th>
       <th>Telefono</th>
       <th>Genero</th>
       <th>Correo</th>
       <th>Pago</th>
       <th>Eliminar</th>
       <th>Editar</th>
       
      
       </tr>`


for( var i = 0;i<vector.length;i++){



    
      dt += `
  <tr>
     <td>${vector[i].Nnombre}</td>
     <td>${vector[i].Aapellidos}</td>
     <td>${vector[i].Ddocumentos}</td>
     <td>${vector[i].Aalergias}</td>
     <td>${vector[i].Ffecha}</td>
     <td>${vector[i].Eedad}</td>
     <td>${vector[i].Ccelular}</td>
     <td>${vector[i].Ttelefono}</td>
     <td>${vector[i].Ggenero}</td>
     <td>${vector[i].Ccorreo}</td>
     <td>${vector[i].Ppagos}</td>
     <td><button class="form-control btn btn-outline-danger "onclick="eliminar(this)">ELIMINAR</button></td>
     <td><button class="btn btn-outline-warning" onclick="editar(this)"><b>EDITAR</b></button></td>
     
     
  
     </tr> `



    }

    document.getElementById('tabla').innerHTML= dt
 


 

  }
   
}


  function vaciar(){

    document.getElementById("nom").value="";
    document.getElementById("apel").value="";
    document.getElementById("doc").value="";
    document.getElementById("fec").value="";
    document.getElementById("ed").value="";
    document.getElementById("tele").value="";
    document.getElementById("cel").value="";
    document.getElementById("cor").value="";
  }




  function eliminar(td){

    var cont = document.getElementById('tabla').rows.length;

    swal({

        text:"Está segur@  de eliminar el registro?",
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

  





function editar(td){

    selectedRow = td.parentElement.parentElement;

document.getElementById('nom').value=selectedRow.cells[0].innerHTML;
document.getElementById('apel').value=selectedRow.cells[1].innerHTML;
document.getElementById('doc').value=selectedRow.cells[2].innerHTML;
document.getElementById('ale').value=selectedRow.cells[3].innerHTML;
document.getElementById('fec').value=selectedRow.cells[4].innerHTML;
document.getElementById('gen').value=selectedRow.cells[8].innerHTML;
document.getElementById('ed').value=selectedRow.cells[5].innerHTML;
document.getElementById('tele').value=selectedRow.cells[7].innerHTML;
document.getElementById('cel').value=selectedRow.cells[6].innerHTML;
document.getElementById('cor').value=selectedRow.cells[9].innerHTML;
document.getElementById('pag').value=selectedRow.cells[10].innerHTML;

btn_editar.disabled=false;
btn_enviar.disabled=true;

}

function Actualizar(){

    var nom = document.getElementById('nom').value;
   
    var apel = document.getElementById('apel').value;
    
    var doc = document.getElementById('doc').value;
    
    var ale = document.getElementById('ale').value;
    
    var fec = document.getElementById('fec').value;

    var gen = document.getElementById('gen').value

    var ed = document.getElementById('ed').value;
    
    var tele= document.getElementById('tele').value;
    
    var cel= document.getElementById('cel').value;
    
    var cor= document.getElementById('cor').value;

    var pag = document.getElementById('pag').value;
   

    email= /\w+@\w+\.+[a-z]/;



    if (nom==""|| apel==""||  doc==""|| ale==""|| fec==""|| gen==""|| ed=="" || tele==""|| cel==""|| cor=="" || pag==""){
    
        alert("Obligatorio llenar todos los campos");
    
        return false;
    
    
    }else if (isNaN(cel) & isNaN(tele) & isNaN(ed) & isNaN(doc)){
    
    
        alert("Celular\nTelefono\nEdad\nDocumento\nDeben ser valores numericos");
    
    
    
    }
    
    else if (isNaN(cel )){
    
        alert("El valor del celular debe ser numero");
    
        return false;
    }
    
    else if(isNaN(ed)){
    
    
       
        alert("La edad debe ser numerica");
    
    
    
    }else if(isNaN(tele)){
    
    
    
    alert("El telefono debe ser numerico");
    
    }else if (isNaN(doc)){
    
     
    
     alert("El documento debe ser numero");
    
        return false;
    
    
    }else if (!email.test(cor)){
    
    
    alert("Correo mal escrito");
    
    return false;
    
    
    
    } else if(!isNaN(nom)){
    
        alert("El nombre debe ser alfabetico")
    }
    
    
    else  if(!isNaN(apel)){
    
        alert("El apellido debe ser alfabetico")
    }
    else if(!isNaN(nom) && !isNaN(apel)){
    
        alert("El nombre y apellido debe ser alfabetico")
    }
    else {
    
    
         variables={
    
    
            Nnombre:nom,
            Aapellidos:apel,
            
          
            
            Ddocumentos:doc,
            
            Aalergias:ale,
            
            Ffecha:fec,
        
            Ggenero:gen,
        
            Eedad:ed, 
        
            Ttelefono:tele,
        
            Ccelular:cel,
        
            Ccorreo:cor,
            Ppagos:pag
        
            };
           
    
         
            selectedRow.cells[0].innerHTML=variables.Nnombre;
            selectedRow.cells[1].innerHTML=variables.Aapellidos;
            selectedRow.cells[2].innerHTML=variables.Ddocumentos;
            selectedRow.cells[3].innerHTML=variables.Aalergias;
            selectedRow.cells[8].innerHTML=variables.Ggenero;
            selectedRow.cells[5].innerHTML=variables.Eedad;
            selectedRow.cells[7].innerHTML=variables.Ttelefono;
            selectedRow.cells[6].innerHTML=variables.Ccelular;
            selectedRow.cells[9].innerHTML=variables.Ccorreo;
            selectedRow.cells[10].innerHTML=variables.Ppagos;
           


            btn_editar.disabled=true;
            btn_enviar.disabled=false;
            contactenos.setItem("Usuario", JSON.stringify(variables));

           swal({
            text:"Edicion, exitosa",
            icon:"success"
        })
          
        
}
}