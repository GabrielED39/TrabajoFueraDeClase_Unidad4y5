function MuestraX() {
    //input Unilinea
    //obtener valor por notación del punto .value
    let valorN = document.getElementById('nombre').value
    //input multilinea
    let valorMul = document.getElementById('multilin').value
    //radio
    let radio = document.getElementsByName("opcR")
    for(let i=0; i<radio.length; i++) {
    alert(" Elemento: " + radio[i].value + "\n Seleccionado: " + radio[i].checked)
    if(radio[i].checked == true)
{
//utilizar var para que ignore el bloque {}
var valRad = radio[i].value
}
    }
}