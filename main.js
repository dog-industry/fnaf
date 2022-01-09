var matriz_de_animatronicos =[];

function comprar() {
    var nombre1 =document.getElementById("nombre_1").value;
    var nombre2 =document.getElementById("nombre_2").value;
    var nombre3 =document.getElementById("nombre_3").value;
    var nombre4 =document.getElementById("nombre_4").value;

    matriz_de_animatronicos.push(nombre1);
    matriz_de_animatronicos.push(nombre2);
    matriz_de_animatronicos.push(nombre3);
    matriz_de_animatronicos.push(nombre4);

    console.log(matriz_de_animatronicos);

    document.getElementById("ver_nombre").innerHTML=matriz_de_animatronicos;
    //document.getElementById("comprar").style.display="none";
   // document.getElementById("ordenar").style.display="inline-block";
}

function ordenar() { 
    matriz_de_animatronicos.sort();
    console.log(matriz_de_animatronicos);
    document.getElementById("ver_nombre").innerHTML = matriz_de_animatronicos;
}