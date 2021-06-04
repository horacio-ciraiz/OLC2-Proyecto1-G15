"use strict";
var gramatica = require('./XPath/Gramatica/gramatica');
function ejecutarCodigo(entrada) {
    var objetos = gramatica.parse(entrada);
    console.log("Entre");
    //const ast:AST = new AST(instrucciones);
    //instrucciones.forEach((element:Instruccion) => {
    //    element.ejecutar(entornoGlobal,ast);
    //});
}
ejecutarCodigo("\n    print(1);\n    print(true);\n    print(\"hola mundo\");\n");
