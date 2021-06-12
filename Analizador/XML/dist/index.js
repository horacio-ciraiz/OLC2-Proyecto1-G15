"use strict";
var Entorno_1 = require("./Simbolo/Entorno");
var Simbolo_1 = require("./Simbolo/Simbolo");
var Tipo_1 = require("./Simbolo/Tipo");
var gramatica = require('./GramaticaXML/gramaticaXMLASC');
var entornoGlobal = new Entorno_1.Entorno(null);
function AnalizarXMLASC(entrada) {
    var objetoparse = gramatica.parse(entrada);
    var contadorGlobal = 0;
    var contadorObjeto = 0;
    var objetos = objetoparse.objetos;
    var ecoding = objetoparse.ecoding.replace(/['"]+/g, '');
    var ReporteGr = objetoparse.listaRG;
    var Errores = objetoparse.errores;
    console.log("EL ECODING ES -> " + ecoding);
    console.log("** ERRORES: \n");
    console.log(Errores);
    //console.log(objetoparse);
    var splitted = ""; // str.split(" ", 3)
    console.log("\n\nProducciones         Reglas Semanticas");
    for (var i = 0; i < ReporteGr.length; i++) {
        splitted = ReporteGr[i].split(",");
        console.log(String(i) + ")" + splitted[0] + "         " + splitted[1]);
    }
    // objetos.forEach((element:Objeto) => {
    //     const entornoObjeto:Entorno = new Entorno(null);
    //     contadorObjeto = 0;
    //     if (element.listaAtributos.length > 0) {
    //         AgregarEntornoAtributo(element, entornoObjeto, contadorObjeto);
    //     }
    //     if (element.listaObjetos.length > 0) {
    //         AgregarEntornoObjeto(element, entornoObjeto, contadorObjeto);
    //     } 
    //     const simbolo:Simbolo = new Simbolo(Tipo.OBJETO, element.identificador,element.texto,element.fila, element.columna, entornoObjeto);
    //     entornoGlobal.agregar(String(contadorGlobal), simbolo);
    //     contadorGlobal++;
    // });
    // PintarTablasSimbolos();
}
function AgregarEntornoAtributo(objeto, entornoObjeto, contador) {
    objeto.listaAtributos.forEach(function (atributo) {
        var simbolo = new Simbolo_1.Simbolo(Tipo_1.Tipo.ATRIBUTO, atributo.identificador, atributo.valor, objeto.fila, objeto.columna, null);
        entornoObjeto.agregar(String(contador), simbolo);
        contador++;
    });
}
function AgregarEntornoObjeto(objeto, entornoObjeto, contador) {
    if (objeto.listaObjetos.length > 0) {
        var contadorObjeto = 0;
        //RECORRER LISTADO DE OBJETOS
        objeto.listaObjetos.forEach(function (element) {
            var entornoObjeto2 = new Entorno_1.Entorno(null);
            contadorObjeto = 0;
            if (element.listaAtributos.length > 0) {
                AgregarEntornoAtributo(element, entornoObjeto2, contadorObjeto);
            }
            if (element.listaObjetos.length > 0) {
                AgregarEntornoObjeto(element, entornoObjeto2, contadorObjeto);
            }
            var simbolo = new Simbolo_1.Simbolo(Tipo_1.Tipo.OBJETO, element.identificador, element.texto, element.fila, element.columna, entornoObjeto2);
            entornoObjeto.agregar(String(contador), simbolo);
            contador++;
        });
    }
}
function PintarTablasSimbolos() {
    var contadorPintar = 0;
    var enviarAmbito = "";
    console.log("\n*** TABLA DE SIMBOLOS ***");
    while (entornoGlobal.tabla[String(contadorPintar)] != undefined) {
        console.log("nombre:" + entornoGlobal.tabla[String(contadorPintar)].indentificador + "[" + contadorPintar + "]"
            + "     valor:" + entornoGlobal.tabla[String(contadorPintar)].valor
            + "     tipo:" + Tipo_1.Tipo[entornoGlobal.tabla[String(contadorPintar)].tipo]
            + "     vambito:" + "Global");
        enviarAmbito = entornoGlobal.tabla[String(contadorPintar)].indentificador + "[" + contadorPintar + "]";
        PintarEntorno(entornoGlobal.tabla[String(contadorPintar)].entorno, enviarAmbito);
        contadorPintar++;
    }
}
function PintarEntorno(entornoObjeto, ambito) {
    var contadorPintar = 0;
    var enviarAmbito = "";
    var tipo = "";
    while (entornoObjeto.tabla[String(contadorPintar)] != undefined) {
        console.log("nombre:" + entornoObjeto.tabla[String(contadorPintar)].indentificador + "[" + contadorPintar + "]"
            + "     valor:" + entornoObjeto.tabla[String(contadorPintar)].valor
            + "     tipo:" + Tipo_1.Tipo[entornoObjeto.tabla[String(contadorPintar)].tipo]
            + "     vambito:" + ambito);
        tipo = Tipo_1.Tipo[entornoObjeto.tabla[String(contadorPintar)].tipo];
        if (tipo != "ATRIBUTO") {
            enviarAmbito = entornoObjeto.tabla[String(contadorPintar)].indentificador + "[" + contadorPintar + "]";
            PintarEntorno(entornoObjeto.tabla[String(contadorPintar)].entorno, enviarAmbito);
        }
        contadorPintar++;
    }
}
AnalizarXMLASC(" \n    <?xml version=\"1.0\" encoding=\"UTF-8\"?>\n    <fechaPublicacion a\u00F1o=\"1973\"/>\n");
module.exports = { analizarXML: AnalizarXMLASC };
// AnalizarXMLASC(` 
// <?xml version="1.0" encoding="UTF-8"?>
// <biblioteca>
//   <libro>
//     <titulo>La vida esta en otra parte</titulo>
//     <autor>Milan Kundera</autor>
//     <fechaPublicacion año="1973"/>
//   </libro>
//   <libro>
//     <titulo>Pantaleon y las visitadoras</titulo>
//     <autor fechaNacimiento="28/03/1936">Mario Vargas Llosa</autor>
//     <fechaPublicacion año="1973"/>
//   </libro>
//   <libro>
//     <titulo>Conversacion en la catedral</titulo>
//     <autor fechaNacimiento="28/03/1936">Mario Vargas Llosa</autor>
//     <fechaPublicacion año="1969"/>
//   </libro>
// </biblioteca>
// `);
