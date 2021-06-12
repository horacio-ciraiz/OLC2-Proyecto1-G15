"use strict";
var gramatica = require('./Gramatica/gramatica');
function ejecutarCodigo(entrada) {
    var objetos = gramatica.parse(entrada);
    //console.log(objetos.AST);
    console.log(objetos.codigo);
    return "listo";
    //const ast:AST = new AST(instrucciones);

    //                 //casa  /habitacion  /silla


    //instrucciones.forEach((element:Instruccion) => {
    //    element.ejecutar(entornoGlobal,ast);
    //});

}//Books//
ejecutarCodigo('libro');


/*
                ACEPTADO
bookstore
/bookstore
bookstore/book
//book
bookstore//book
//@lang
/bookstore/book[1]
/bookstore/book[last()]
/bookstore/book[last()-1]
/bookstore/book[position()<3]
//title[@lang]
//title[@lang='en']
/bookstore/book[price>35.00]
/bookstore/book[price>35.00]/title
//title[@*]
//book/title | //book/price
//title | //price
/bookstore/book/title | //price

                RECHAZADO
todo lo que lleve mul 
exepto las multiplicaciones


*/