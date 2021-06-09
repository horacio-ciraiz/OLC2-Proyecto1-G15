"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Entorno_1 = require("./Simbolo/Entorno");
var Simbolo_1 = require("./Simbolo/Simbolo");
var Tipo_1 = require("./Simbolo/Tipo");
var gramaticaXML = require('./GramaticaXML/gramaticaXML');
var entornoGlobal = new Entorno_1.Entorno(null);
function AnalizarXMLASC(entrada) {
    var objetos = gramaticaXML.parse(entrada);
    var contadorGlobal = 0;
    var contadorObjeto = 0;
    //INICIA RECORRIDO
    objetos.forEach(function (element) {
        var entornoObjeto = new Entorno_1.Entorno(null);
        contadorObjeto = 0;
        if (element.listaAtributos.length > 0) {
            AgregarEntornoAtributo(element, entornoObjeto, contadorObjeto);
        }
        if (element.listaObjetos.length > 0) {
            AgregarEntornoObjeto(element, entornoObjeto, contadorObjeto);
        }
        element.entorno = entornoObjeto;
        var simbolo = new Simbolo_1.Simbolo(Tipo_1.Tipo.OBJETO, element.identificador, element.texto, element.linea, element.columna, element.entorno);
        entornoGlobal.agregar(String(contadorGlobal), simbolo);
        contadorGlobal = contadorGlobal + 1;
    });
    //FINALIZA RECORRIDO
    PintarTablaSimbolos();
}
function AgregarEntornoAtributo(objeto, entornoObjeto, contador) {
    contador = 0;
    objeto.listaAtributos.forEach(function (atributo) {
        var simbolo = new Simbolo_1.Simbolo(Tipo_1.Tipo.ATRIBUTO, atributo.identificador, atributo.valor, atributo.linea, atributo.columna, null);
        entornoObjeto.agregar(String(contador), simbolo);
        contador += 1;
    });
}
function AgregarEntornoObjeto(objeto, entornoGlobal, contadorGlobal) {
    if (objeto.listaObjetos.length > 0) {
        var contadorObjeto = 0;
        //reccorrer listado de objetos
        objeto.listaObjetos.forEach(function (element) {
            var entornoObjeto = new Entorno_1.Entorno(null);
            contadorObjeto = 0;
            if (element.listaAtributos.length > 0) {
                AgregarEntornoAtributo(element, entornoObjeto, contadorObjeto);
            }
            if (element.listaObjetos.length > 0) {
                AgregarEntornoObjeto(element, entornoObjeto, contadorObjeto);
            }
            element.entorno = entornoObjeto;
            var simbolo = new Simbolo_1.Simbolo(Tipo_1.Tipo.OBJETO, element.identificador, element.texto, element.linea, element.columna, element.entorno);
            entornoGlobal.agregar(String(contadorGlobal), simbolo);
            contadorGlobal = contadorGlobal + 1;
        });
    }
}
function PintarTablaSimbolos() {
    //PINTAR TABLA DE SIMBOLOS
    var contadorPintar = 0;
    var enviarAmbito = "";
    console.log("\n*** TABLA DE SIMBOLOS ***");
    while (entornoGlobal.tabla[String(contadorPintar)] != undefined) {
        console.log("-nombre:" + entornoGlobal.tabla[String(contadorPintar)].indentificador + "[" + contadorPintar + "]"
            + " -valor:" + entornoGlobal.tabla[String(contadorPintar)].valor
            + " -tipo:" + Tipo_1.Tipo[entornoGlobal.tabla[String(contadorPintar)].tipo]
            + " -ambito:" + "Global");
        enviarAmbito = entornoGlobal.tabla[String(contadorPintar)].indentificador + "[" + contadorPintar + "]";
        PintarEntorno(entornoGlobal.tabla[String(contadorPintar)].entorno, enviarAmbito);
        contadorPintar++;
    }
}
function PintarEntorno(entornoObjeto, ambito) {
    var contadorPintar = 0;
    var enviarAmbito = " ";
    var tipo = "";
    while (entornoObjeto.tabla[String(contadorPintar)] != undefined) {
        console.log("-nombre:" + entornoObjeto.tabla[String(contadorPintar)].indentificador + "[" + contadorPintar + "]"
            + " -valor:" + entornoObjeto.tabla[String(contadorPintar)].valor
            + " -tipo:" + Tipo_1.Tipo[entornoObjeto.tabla[String(contadorPintar)].tipo]
            + " -ambito:" + ambito);
        tipo = Tipo_1.Tipo[entornoObjeto.tabla[String(contadorPintar)].tipo];
        if (tipo != "ATRIBUTO") {
            enviarAmbito = entornoObjeto.tabla[String(contadorPintar)].indentificador + "[" + contadorPintar + "]";
            PintarEntorno(entornoObjeto.tabla[String(contadorPintar)].entorno, enviarAmbito);
        }
        contadorPintar++;
    }
}
function ComprobarString(inputText) {
    if (typeof inputText === 'string' || inputText instanceof String) {
        return true;
    }
    else {
        return false;
    }
}
AnalizarXMLASC("\n<!-- DATOS XML -->\n<biblioteca>\n  <libro>\n    <titulo>La vida esta en otra parte</titulo>\n    <autor>Milan Kundera</autor>\n    <fechaPublicacion a\u00F1o=\"1973\"/>\n  </libro>\n  <libro>\n    <titulo>Pantaleon y las visitadoras</titulo>\n    <autor fechaNacimiento=\"28/03/1936\">Mario Vargas Llosa</autor>\n    <fechaPublicacion a\u00F1o=\"1973\"/>\n  </libro>\n  <libro>\n    <titulo>Conversacion en la catedral</titulo>\n    <autor fechaNacimiento=\"28/03/1936\">Mario Vargas Llosa</autor>\n    <fechaPublicacion a\u00F1o=\"1969\"/>\n  </libro>\n</biblioteca>\n");
