//Artículos que existen en el Documento
console.log(document.querySelectorAll("h3").length)

//Líneas divisorias y número de líneas dentro del documento
console.log(document.querySelectorAll("hr"))
console.log(document.querySelectorAll("hr").length)

//Elementos de lista y número de elementos en total dentro del documento
console.log(document.querySelectorAll("li"))
console.log(document.querySelectorAll("li").length)

//Elementos de la “Lista Elementos”, número de elementos y código del enlace dentro de dicha lista
console.log(document.querySelectorAll("#elem li"))
console.log(document.querySelectorAll("#elem li").length)
console.log(document.querySelectorAll("#elem href").length)

//Elementos de la lista “Menú”, identificar enlaces y número de enlaces en dicha lista.
console.log(document.querySelectorAll("#menu li"))
console.log(document.querySelectorAll("#menu href").length)

//Imágenes dentro del Documento y número de imágenes en total
console.log(document.querySelectorAll("img"))
console.log(document.querySelectorAll("img").length)

//Imágenes del bloque referente al “Artículo 2”, identificar primera imagen y número total de imágenes dentro de este bloque
console.log(document.querySelectorAll(".imgAr2")[1])
console.log(document.getElementsByClassName(".imgAr2").length)

//imágenes del bloque referente al “Artículo 3”, número de imágenes y código referente a la segunda y cuarta imagen del presente bloque.
console.log(document.getElementsByClassName(".imgAr3").length)
console.log(document.querySelectorAll(".imgAr3")[2])
console.log(document.querySelectorAll(".imgAr3")[4])

//Enlaces del Documento y número de enlaces en total.
console.log(document.querySelectorAll("li"))
console.log(document.querySelectorAll("li").length)

//Enlaces distribuidos dentro del párrafo referente al “Artículo 1” y número de enlaces.
console.log(document.querySelectorAll("#text1 href"))
console.log(document.querySelectorAll("#text1 href").length)