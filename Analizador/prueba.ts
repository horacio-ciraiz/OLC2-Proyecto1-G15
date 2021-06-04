//import { AST } from "./AST/AST";
//import { Entorno } from "./AST/Entorno";
//import { Instruccion } from "./Interfaces/Instruccion";
declare var require: any
const gramatica = require('./XPath/Gramatica/gramatica');

function ejecutarCodigo(entrada:string){
    const objetos = gramatica.parse(entrada);

   
    //const ast:AST = new AST(instrucciones);

    

    //instrucciones.forEach((element:Instruccion) => {
    //    element.ejecutar(entornoGlobal,ast);
    //});
}

ejecutarCodigo(`
    print(1);
    print(true);
    print("hola mundo");
`);