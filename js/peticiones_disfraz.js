function leerDisfraz(){

    $.ajax({

    //METODO GET

        url:'https://g607a1273dd5318-vfdu9vx749re12s8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        type:'GET',
        dataType:'json',
        success:function(disfraz){

            let d = disfraz.items;
            $("#listaDisfraz").empty();

            for(i=0;i < d.length;i++){

                $("#listaDisfraz").append(d[i].id+"<br>");
                $("#listaDisfraz").append("<h2>"+d[i].brand+"<h2>");
                $("#listaDisfraz").append(d[i].model+"<br>");
                $("#listaDisfraz").append(d[i].category_id+"<br>");
                $("#listaDisfraz").append(d[i].name+"<br>");
                $("#listaDisfraz").append("<button onclick='borrarDisfraz("+d[i].id+")'>borrar</button><br>");
              
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


function guardarDisfraz(){

    let idDisfraz = $("#idDisfraz").val();
    let brand = $("#brand").val();
    let model = $("#model").val();
    let category_id = $("#category_id").val();
    let name = $("#name").val();


    let data= {

        id: idDisfraz,
        brand: brand,
        model: model,
        category_id: category_id,
        name: name

    };

    let dataToSend = JSON.stringify(data);
    

    $.ajax({

    //METODO POST

        url:'https://g607a1273dd5318-vfdu9vx749re12s8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        type:'POST',
        // dataType:'json',
        data:dataToSend,
        contentType: 'application/json',
        success:function(json){

            $("#idDisfraz").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");


        },

        complete:function(){

            leerDisfraz();

        },
        error:function(xhr, status){

            // alert("a sucedido un problema");

        }

    });



}


function editarDisfraz(){

    let idDisfraz = $("#idDisfraz").val();
    let brand = $("#brand").val();
    let model = $("#model").val();
    let category_id = $("#category_id").val();
    let name = $("#name").val();


    let data= {

        id: idDisfraz,
        brand: brand,
        model: model,
        category_id: category_id,
        name: name

    };

    let dataToSend = JSON.stringify(data);
    

    $.ajax({

    //METODO PUT

        url:'https://g607a1273dd5318-vfdu9vx749re12s8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        type:'PUT',
        // dataType:'json',
        data:dataToSend,
        contentType: 'application/json',
        success:function(json){

            $("#idDisfraz").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");

        },
        complete:function(){

            leerDisfraz();

        },
        error:function(xhr, status){

            // alert("a sucedido un problema");

        }

    });


}


function borrarDisfraz(idDisfraz){

    let data= {
        id: idDisfraz
    };

    let dataToSend = JSON.stringify(data);
    

    $.ajax({

    //METODO DELETE

        url:'https://g607a1273dd5318-vfdu9vx749re12s8.adb.sa-saopaulo-1.oraclecloudapps.com/ords/admin/costume/costume',
        type:'DELETE',
        // dataType:'json',
        data:dataToSend,
        contentType: 'application/json',
        success:function(json){

            $("#idDisfraz").val("");
            $("#brand").val("");
            $("#model").val("");
            $("#category_id").val("");
            $("#name").val("");

        },
        complete:function(){

            leerDisfraz();

        },
        error:function(xhr, status){

            // alert("a sucedido un problema");

        }

    });


}