 %{
	
	 var arreglolexico = "Codigo para mostrar que funciona a Alejandro";

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
acceptedcharssingle                 [^\'\\]
stringsingle                        {escape}|{acceptedcharssingle}
//CharFormal
charliteral                         \'{stringsingle}\'
//Digito
digit                               [0-9]+ 

//Comentario
acceptedcomment                      [^\:)\\]+
commentdouble                        {escape}|{acceptedcomment}
commentliteral                        \(\: {commentdouble} \:\)

%%


//----------------Palabras Reservadas
"ancestor"                  return 'ancestor';
"ancestor-or-self"          return 'ancestor_or_self';
"attribute"                 return 'attribute';
"child"                     return 'child';
"descendant"                return 'descendant';
"descendant-or-self"        return 'descendant_or_self';
"following"                 return 'following';
"following-sibling"         return 'following_sibling';
"namespace-node"            return 'namespace_node';
"parent"                    return 'parent';
"preceding"                 return 'preceding';
"preceding-sibling"         return 'preceding_sibling';
"self"                      return 'self';
"null"                      return 'null';
"true"                      return 'true';
"false"                     return 'false';
"node"                      return 'node';
"text"                      return 'text';
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
"."                         return 'spunto';
".."                         return 'dpunto';
"@"                         return 'arroba';
"::"                        return 'ddospuntos';

//----------Expresiones Regulares------------

{commentliteral}                     /*skip comment */
\s+                                 /* skip whitespace */

//Numeros Enteros
{digit}                             return 'IntegerLiteral';
//Numeros Decimales
(({digit}"."[0-9]*)|("."{digit}))  return 'DecimalLiteral';
//Double
//( ({digit}"."[0-9]*)|("."{digit})  (e|E)(+|-)? {digit} )    return 'DoubleLiteral';

//Identificador
[a-zA-Z_][a-zA-Z0-9_ñÑ]*            return 'identifier';
//String
{stringliteral}                     return 'StringLiteral';
//Char
{charliteral}                       return 'CharLiteral';

//error lexico
.                                   {
                                        console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                                    }

<<EOF>>                     return 'EOF';

/lex

//SECCION DE IMPORTS
%{
    
%}


// DEFINIMOS PRESEDENCIA DE OPERADORES

// DEFINIMOS PRODUCCIÓN INICIAL
%start XPATH
%%


/* Definición de la gramática de Alejandro */

XPATH: PATHEXPR EOF{
        return {codigo:arreglolexico};
        };

PATHEXPR:DIAGONALSIMPLE
        |DIAGONALDOBLE 
        |PATHREL;

DIAGONALSIMPLE:sdiagonal PATHREL {console.log("DIAGONALSIMPLE");}
        |sdiagonal
        ;
DIAGONALDOBLE: ddiagonal PATHREL {console.log("DIAGONALDOBLE");}
        |ddiagonal
        ;
PATHREL: EXPRESION PATHRELL1
        |EXPRESION;

PATHRELL1 :PATHRELL1 PATHRELL2
	|PATHRELL2;

PATHRELL2:PATHRELV EXPRESION;

PATHRELV: sdiagonal {console.log("PATHRELV - sdiagonal");}
	|ddiagonal  {console.log("PATHRELV - ddiagonal");};
		
EXPRESION: identifier {console.log($1);}
        |mul {console.log($1);}
        | identifier lcorchete rcorchete{console.log($1 +" - " + $2 + "-" + $3 );} ;



/* Definición de la gramática de Horacio */


/*
book/price// 



XPATH:INSTRUCCIONES {console.log('1');};//

INSTRUCCIONES:SENTENCIABARRA
             |OTHER
             ;
SENTENCIABARRA:ddiagonal
               |sdiagonal

EXPR:ancestor;
*/

//-------------2
