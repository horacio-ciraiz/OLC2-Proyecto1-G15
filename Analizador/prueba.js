"use strict";
var gramatica = require('./XPath/Gramatica/gramatica');
function ejecutarCodigo(entrada) {
    var objetos = gramatica.parse(entrada);
    
}
ejecutarCodigo("//book/rice/price/*\n /book/ried");
