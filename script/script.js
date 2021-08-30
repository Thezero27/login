//let usuario = document.getElementById("usuario")
//let pass = document.getElementById("password")
usrot = "thezero"
passt = "teamo123"
const getValueInput = () =>{
    let usuario = document.getElementById("usuario").value;
    let pass = document.getElementById("password").value;
    if(usuario==usrot && pass==passt){
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login1").innerHTML = "Login correcto";
        20200
        open("/index2.html")
    }
    if(usuario!=usrot){
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login2").innerHTML = "Usuario incorrecto";
    }
    if(pass!=passt){
        //var aviso = document.getElementById("error-login")
        document.getElementById("error-login3").innerHTML = "Contraseña incorrecto";
    }
    

}
const getValueReset = () =>{
    document.getElementById("error-login1").innerHTML = "";
    document.getElementById("error-login2").innerHTML = "";
    document.getElementById("error-login3").innerHTML = "";
    //document.getElementById("usuario").innerHTML = "";
    $("#us").html('<input name="usuario" placeholder="Usuario" class="form-control" type="text" id="usuario">');
    //document.getElementById("password").innerHTML = "";
    $("#ps").html('<input class="form-control" id="password" type="password" placeholder="password" name="password" data-minLength="5" data-error="some error" required />');
}