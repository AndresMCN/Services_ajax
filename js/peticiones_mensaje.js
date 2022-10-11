function leerMensaje(){

    $.ajax({

    //METODO GET

        url:'https://g607a1273dd5318-vfdu9vx749re12s8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type:'GET',
        dataType:'json',
        success:function(mensajes){

            let m = mensajes.items;
            $("#listaMensajes").empty();

            for(i=0;i < m.length;i++){

                $("#listaMensajes").append(m[i].id+"<br>");
                $("#listaMensajes").append("<h2>"+m[i].messagetext+"<h2>");
                $("#listaMensajes").append("<button onclick='borrarMensaje("+m[i].id+")'>borrar</button><br>");
              
            }
        },

        error:function(xhr, status){

            alert("a sucedido un problema");

        },

        complete:function(xhr, status){

            alert("Peticion realizada");

        }

    });


}


function guardarMensaje(){

    let idMensaje = $("#idMensaje").val();
    let messagetext = $("#messagetext").val();
   

    let data= {

        id: idMensaje,
        messagetext: messagetext
        
    };

    let dataToSend = JSON.stringify(data);
    

    $.ajax({

    //METODO POST

        url:'https://g607a1273dd5318-vfdu9vx749re12s8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type:'POST',
        // dataType:'json',
        data:dataToSend,
        contentType: 'application/json',
        success:function(json){

            $("#idMensaje").val("");
            $("#messagetext").val("");
           

        },

        complete:function(){

            leerMensaje();

        },
        error:function(xhr, status){

            // alert("a sucedido un problema");

        }

    });



}


function editarMensaje(){

    let idMensaje = $("#idMensaje").val();
    let messagetext = $("#messagetext").val();
   

    let data= {

        id: idMensaje,
        messagetext: messagetext
        
    };

    let dataToSend = JSON.stringify(data);
    

    $.ajax({

    //METODO PUT

        url:'https://g607a1273dd5318-vfdu9vx749re12s8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type:'PUT',
        // dataType:'json',
        data:dataToSend,
        contentType: 'application/json',
        success:function(json){

            $("#idMensaje").val("");
            $("#messagetext").val("");
           

        },
        complete:function(){

            leerMensaje();

        },
        error:function(xhr, status){

            // alert("a sucedido un problema");

        }

    });


}


function borrarMensaje(idMensaje){

    let data= {
        id: idMensaje
    };

    let dataToSend = JSON.stringify(data);
    

    $.ajax({

    //METODO DELETE

        url:'https://g607a1273dd5318-vfdu9vx749re12s8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/message/message',
        type:'DELETE',
        // dataType:'json',
        data:dataToSend,
        contentType: 'application/json',
        success:function(json){

            $("#idMensaje").val("");
            $("#messagetext").val("");
           

        },
        complete:function(){

            leerMensaje();

        },
        error:function(xhr, status){

            // alert("a sucedido un problema");

        }

    });


}