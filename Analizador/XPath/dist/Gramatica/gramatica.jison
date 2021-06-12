%{
	
	 var arreglolexico = "Codigo: ";

 %}


%lex

%options case-insensitive

//----------------------Palabras Reservadas-------------

//escape principal
escapechar                          [\'\"\\bfnrtv]

//Componentes del String
escape                              \\{escapechar}
acceptedcharsdouble                 [^\"\\]+
stringdouble                        {escape}|{acceptedcharsdouble}
//----String Formal
stringliteral                       \"{stringdouble}*\"

//Componentes del Char
acceptedcharssingle                 [^\'\\]+
stringsingle                        {escape}|{acceptedcharssingle}
//CharFormal
charliteral                         \'{stringsingle}*\'
//Digito
digit                               [0-9]+ 

//Comentario
acceptedcomment                      [^\:)\\]+
commentdouble                        {escape}|{acceptedcomment}
commentliteral                        \(\: {commentdouble} \:\)

%%


//----------------Palabras Reservadas
"ancestor-or-self"          return 'ancestor_or_self';
"descendant-or-self"        return 'descendant_or_self';
"following-sibling"         return 'following_sibling';
"namespace-node"            return 'namespace_node';
"preceding-sibling"         return 'preceding_sibling';
"ancestor"                  return 'ancestor';
"attribute"                 return 'attribute';
"child"                     return 'child';
"descendant"                return 'descendant';
"following"                 return 'following';
"parent"                    return 'parent';
"preceding"                 return 'preceding';
"self"                      return 'self';
"null"                      return 'null';
"true"                      return 'true';
"false"                     return 'false';
"node"                      return 'node';
"text"                      return 'text';
"last"                      return 'last';
"position"                  return 'position';

//-------- Operadores Palabras
"div"                       return 'div_';
"or"                        return 'or_';
"and"                       return 'and_';
"mod"                       return 'mod_';
//-------- Operadores Simbolos-----------
"|"                         return 'simpleor';
"+"                         return 'mas';
"-"                         return 'menos';
"*"                         return 'mul';
"="                         return 'igual';
"!="                        return 'diferente';
"<"                         return 'menorq';
"<="                        return 'menorigual';
">"                         return 'mayorq';
">="                        return 'mayorigual';
"("                         return 'lparen';
")"                         return 'rparen';
"["                         return 'lcorchete';
"]"                         return 'rcorchete';
//----------Selectores-----------------
"//"                         return 'ddiagonal'; //Probar Esto
"/"                         return 'sdiagonal';
".."                         return 'dpunto';
"."                         return 'spunto';
"@"                         return 'arroba';
"::"                        return 'ddospuntos';

//----------Expresiones Regulares------------

{commentliteral}                     /*skip comment */
\s+                                 /* skip whitespace */
//Numeros Decimales
(([0-9]+"."[0-9]*)|("."[0-9]+))     return 'DecimalLiteral';
//Numeros Enteros
{digit}                             return 'IntegerLiteral';

//Double
//( ({digit}"."[0-9]*)|("."{digit})  (e|E)(+|-)? {digit} )    return 'DoubleLiteral';


//String
{stringliteral}                     return 'StringLiteral';
//Char
{charliteral}                       return 'CharLiteral';
//Identificador
[a-zA-Z_][a-zA-Z0-9_ñÑ]*            return 'identifier';

//error lexico
.                                   {
                                        console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                                    }

<<EOF>>                     return 'EOF';

/lex

//SECCION DE IMPORTS
%{
        
    const {Primitivo} = require("../Expresiones/Primitivo");
    const {Operacion, Operador} = require("../Expresiones/Operacion");
    const {Objeto} = require("../Expresiones/Objeto");
    const {Atributo} = require("../Expresiones/Atributo");
    
   
    
%}


// DEFINIMOS PRESEDENCIA DE OPERADORES
%left 'or_'
%left 'and_'
%left 'menorq' 'menorigual' 'mayorq' 'mayorigual' 'igual' 'diferente'
%left 'mas' 'menos'
%left 'div_' 'mul' 'mod_'
%left umenos

// DEFINIMOS PRODUCCIÓN INICIAL
%start XPATH
%%


/* Definición de la gramática de Alejandro */

XPATH: BLOQUE EOF{
        arreglolexico=$1;

        return {
                codigo:arreglolexico,finalizado:"\nfin.",AST:$1};
        };

BLOQUE:SIMPLEOR         {$$=$1;} //push
	|PATHRELL1      {$$=$1;} //push
        ;

SIMPLEOR: PATHRELL1 ORL1        {$$=$1+" "+$2;}         //new OR(RUTA1,RUTA2,linea,columna)
        ;

ORL1: ORL1 ORL2                 {$1.push($2); $$=$1;}
	|ORL2                   {$$=[$1];}
        ;  

ORL2: simpleor PATHRELL1        {$$=$1+" "+$2;}// new simpleor
        ;



PATHRELL1 :PATHRELL1 PATHRELL2  {$1.push($2); $$= $1;}//                /casa  /habitacion  /silla
	|PATHRELL2              {$$= [$1];}
        ; 

PATHRELL2:PATHRELV EXPRESION    {$$= $1+" "+$2;} //INSTRUCCION -> PATH ($1,$2,linea,columna)       /silla  
        |EXPRESION              {$$=$1;}
        ;

// tipo enum
PATHRELV: sdiagonal {$$= $1;} 
        |ddiagonal  {$$= $1;}
        ;

 // EXPRESION : RETONA UN VALOR    ---- INSTRUCCION : EJECUTA (REALIZA EL CALCULO)      	
EXPRESION:AXISNAME              {$$=$1;}                                        // new EXPRESION
        |METODO                 {$$=$1;}
        |ACCES                  {$$=$1;}
        ;

ACCES:   identifier             {$$=$1;}                                        // PRIMITIVO new primitivo expresion
        |arroba identifier      {$$=$1+""+$2;}                                  // INSTRUCCION retorna todos los atributos con el mismo nombre dentod de su padre
        |arroba mul             {$$=$1+""+$2;}                                  // INSTRUCCION retorna todos los atributos de la etiqueta padre
        //|mul {$$=$1;}
        |spunto                 {$$=$1;}                                        // INSTRUCCION  .  retorna todos los nodos con el mismo nombre
        |dpunto                 {$$=$1;}                                        // INSTRUCCION   .. retorna el padre del nodo actual

;


AXISNAME: NAMEAXIS ddospuntos  EXPRESION {$$=$1+""+$2+""+$3;}// new OPERACIONAXIS(tipName,Expresion,linea,columna)
        ;


//TIPO NAMEAXIS enum   
NAMEAXIS:ancestor               {$$=$1;}                       
	|ancestor_or_self       {$$=$1;}               
	|attribute              {$$=$1;}
	|child                  {$$=$1;}
	|descendant             {$$=$1;}
	|descendant_or_self     {$$=$1;}
	|following              {$$=$1;}
	|following_sibling      {$$=$1;}
	|namespace_node         {$$=$1;}
	|parent                 {$$=$1;}
	|preceding              {$$=$1;}
	|preceding_sibling      {$$=$1;}
	|self                   {$$=$1;}
	;

OPERACION:OPERACION mas OPERACION               {$$=new Operacion($1,$3,Operador.SUMA,@1.first_line, @1.first_column);} 
  |OPERACION menos OPERACION                    {$$=new Operacion($1,$3,Operador.SUMA,@1.first_line, @1.first_column);} 
  |OPERACION mul OPERACION                      {$$=new Operacion($1,$3,Operador.SUMA,@1.first_line, @1.first_column);}
  |OPERACION div_ OPERACION                     {$$=new Operacion($1,$3,Operador.SUMA,@1.first_line, @1.first_column);}
  |OPERACION igual OPERACION                    {$$=new Operacion($1,$3,Operador.SUMA,@1.first_line, @1.first_column);}
  |OPERACION diferente OPERACION                {$$=new Operacion($3,$2,Operador.SUMA,@1.first_line, @1.first_column);}
  |OPERACION menorq OPERACION                   {$$=new Operacion($1,$3,Operador.SUMA,@1.first_line, @1.first_column);}
  |OPERACION menorigual OPERACION               {$$=new Operacion($1,$3,Operador.SUMA,@1.first_line, @1.first_column);}
  |OPERACION mayorq OPERACION                   {$$=new Operacion($1,$3,Operador.SUMA,@1.first_line, @1.first_column);}
  |OPERACION mayorigual OPERACION               {$$=new Operacion($1,$3,Operador.SUMA,@1.first_line, @1.first_column);}
  |OPERACION or_ OPERACION                      {$$=new Operacion($1,$3,Operador.SUMA,@1.first_line, @1.first_column);}
  |OPERACION and_ OPERACION                     {$$=new Operacion($1,$3,Operador.SUMA,@1.first_line, @1.first_column);}
  |OPERACION mod_ OPERACION                     {$$=new Operacion($1,$3,Operador.SUMA,@1.first_line, @1.first_column);}
  |OPERAD                                       {$$=$1;}
  |PATHRELL1                                    {$$=$1;}
  ;

OPERAD: //Primitivo
        DecimalLiteral  {$$= new Primitivo($1,@1.first_line, @1.first_column);}
        |IntegerLiteral {$$= new Primitivo($1,@1.first_line, @1.first_column);}
        |StringLiteral  {$$= new Primitivo($1,@1.first_line, @1.first_column);}
        |CharLiteral    {$$= new Primitivo($1,@1.first_line, @1.first_column);}
        
        ;

//INSTRUCCION
METODO:  text lparen rparen{$$=$1+""+$2+""+$3;} //  new  METODO
        |node lparen rparen{$$=$1+""+$2+""+$3;} // new METODO
        |last lparen rparen{$$=$1+""+$2+""+$3;} // new METODO
        |position lparen rparen{$$=$1+""+$2+""+$3;} // new METODO
        |arroba identifier lcorchete OPERACION rcorchete{ $$=$1 +" " + $2 + " " + $3+" "+$4 ;} // new METODO
        |identifier lcorchete OPERACION rcorchete{ $$=$1 +" " + $2 + " " + $3+" "+$4 ;} //new METODO
        ;


