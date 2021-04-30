
var inicio =String
 var flag = null

function ingresar(){

  
   let user = document.getElementById("user").value;

   let pass = document.getElementById("pass").value;



if((user.length == 0) & (pass.length == 0)){
    alert("Llenar ambos campos")
}
   else if(user.length == 0){
    alert("Ingrese un usuario")

   }else if (pass.length == 0){

    alert("Ingrese una contraseña")
   }else{
   
fetch('../json/login.json')

.then(function(respuesta){

return respuesta.json()

})

.then(function(data){


data.forEach(function(val) {
    
if(val.usuario==user){
    if(val.contraseña==pass){
   
        

    swal(val.nombre  +" " + val.apellido,{
        title:"Bienvenido",
        buttons:"Ok",
        icon:"success"
    })
    
    .then((entrar)=>{
        if(entrar){
            window.location='../index.html'
        }
    })

   inicio= (val.nombre) + " "+ (val.apellido)
   flag=true
    localStorage.setItem("Nombre", inicio);


   

    }else{

        swal("Contraseña incorrecta",{
            icon:"error"});
        flag=true
    }
}



})

if(flag==null){

    swal("Usuario incorrecta",{
        icon:"error"});
}


})
   
.catch(function(error){

    alert(error)
})
}
}


function mostrar(){


    var dato= localStorage.getItem('Nombre')


    document.getElementById("datos").innerHTML=dato

    var sesion = document.getElementById('sesion');
    var login = document.getElementById('login');

    if (dato==null){

        sesion.style.display='none';
        login.style.display='';

        console.log("Cerró")
    }else{
        sesion.style.display='';
        login.style.display='none';
        console.log("no entró")
    }
  
}



 function aviso(){


    swal({
        icon:"info",
        buttons:"Cerrar",
        text:"Si te gustó nuestro contenido\n te invitamos a seguirnos en nuestras redes sociales\n Facebook: \nInstagram:"
    })
        .then((cerrar)=>{
            if(cerrar){
                location.reload()
            }else{

            location.reload()
            }
        })

    
    
    }
    
    
    

    function cerrar(){


        swal("Está seguro de cerrar la sesion?",{
            icon:"info",
            buttons:["Si","No"]
        })
        
        .then((confirmar)=>{
            if(confirmar){
                
                
                
            }else{
                
                localStorage.clear()
                document.getElementById('datos').innerHTML= ""
                aviso()
              
                
            }
            
           
        })
    
     

        }

       
        




