//import { AST } from "./AST/AST";
//import { Entorno } from "./AST/Entorno";
//import { Instruccion } from "./Interfaces/Instruccion";
declare var require: any
const gramatica = require('./XPath/Gramatica/gramatica');

function ejecutarCodigo(entrada:string){
    const objetos = gramatica.parse(entrada);
    return "listo";
   
    //const ast:AST = new AST(instrucciones);


    //instrucciones.forEach((element:Instruccion) => {
    //    element.ejecutar(entornoGlobal,ast);
    //});
}

ejecutarCodigo(`"//book/rice/price/*\n /book/ried"`);