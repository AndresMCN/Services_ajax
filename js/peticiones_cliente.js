function leerCliente(){

    $.ajax({

    //METODO GET

        url:'https://g607a1273dd5318-vfdu9vx749re12s8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type:'GET',
        dataType:'json',
        success:function(clientes){

            let c = clientes.items;
            $("#listaClientes").empty();

            for(i=0;i < c.length;i++){

                $("#listaClientes").append(c[i].id+"<br>");
                $("#listaClientes").append("<h2>"+c[i].name+"<h2>");
                $("#listaClientes").append(c[i].email+"<br>");
                $("#listaClientes").append(c[i].age+"<br>");
                $("#listaClientes").append("<button onclick='borrarCliente("+c[i].id+")'>borrar</button><br>");
              
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


function guardarCliente(){

    let idCliente = $("#idcliente").val();
    let name = $("#name").val();
    let email = $("#email").val();
    let edad = $("#edad").val();

    let data= {

        id: idCliente,
        name: name,
        email: email,
        age: edad

    };

    let dataToSend = JSON.stringify(data);
    

    $.ajax({

    //METODO POST

        url:' https://g607a1273dd5318-vfdu9vx749re12s8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type:'POST',
        // dataType:'json',
        data:dataToSend,
        contentType: 'application/json',
        success:function(json){

            $("#idcliente").val("");
            $("#name").val("");
            $("#email").val("");
            $("#edad").val("");

        },

        complete:function(){

            leerCliente();

        },
        error:function(xhr, status){

            // alert("a sucedido un problema");

        }

    });



}


function editarCliente(){

    let idCliente = $("#idcliente").val();
    let name = $("#name").val();
    let email = $("#email").val();
    let edad = $("#edad").val();

    let data= {

        id: idCliente,
        name: name,
        email: email,
        age: edad

    };

    let dataToSend = JSON.stringify(data);
    

    $.ajax({

    //METODO PUT

        url:' https://g607a1273dd5318-vfdu9vx749re12s8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type:'PUT',
        // dataType:'json',
        data:dataToSend,
        contentType: 'application/json',
        success:function(json){

            $("#idcliente").val("");
            $("#name").val("");
            $("#email").val("");
            $("#edad").val("");

        },
        complete:function(){

            leerCliente();

        },
        error:function(xhr, status){

            // alert("a sucedido un problema");

        }

    });


}


function borrarCliente(idCliente){

    let data= {
        id: idCliente
    };

    let dataToSend = JSON.stringify(data);
    

    $.ajax({

    //METODO DELETE

        url:' https://g607a1273dd5318-vfdu9vx749re12s8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/client/client',
        type:'DELETE',
        // dataType:'json',
        data:dataToSend,
        contentType: 'application/json',
        success:function(json){

            $("#idcliente").val("");
            $("#name").val("");
            $("#email").val("");
            $("#edad").val("");

        },
        complete:function(){

            leerCliente();

        },
        error:function(xhr, status){

            // alert("a sucedido un problema");

        }

    });


}