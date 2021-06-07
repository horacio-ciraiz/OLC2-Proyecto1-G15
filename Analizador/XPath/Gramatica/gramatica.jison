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
"."                         return 'spunto';
".."                         return 'dpunto';
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
                codigo:arreglolexico};
        };

BLOQUE:SIMPLEOR {$$=$1;}
	|PATHEXPR{$$=$1;};

SIMPLEOR: PATHEXPR ORL1 {$$=$1+" "+$2;};

ORL1: ORL1 ORL2 {$$=$1+" "+$2;}
	|ORL2 {$$=$1;};
ORL2: simpleor PATHEXPR {$$=$1+" "+$2;};

PATHEXPR:DIAGONALSIMPLE{$$=$1;}
        |DIAGONALDOBLE{$$=$1;} 
        |PATHREL {$$=$1;};

DIAGONALSIMPLE:sdiagonal PATHREL {$$=$1 +" "+ $2;}
        |sdiagonal {$$=$1;}
        ;
DIAGONALDOBLE: ddiagonal PATHREL {$$=$1 +" "+ $2;}
        |ddiagonal{$$=$1;}
        ;
PATHREL: EXPRESION PATHRELL1 { $$=$1 +" "+ $2;}
        |EXPRESION {$$= $1;};

PATHRELL1 :PATHRELL1 PATHRELL2{$$=$1+" "+$2;}
	|PATHRELL2 {$$= $1;};

PATHRELL2:PATHRELV EXPRESION {$$= $1+" "+$2;};

PATHRELV: sdiagonal {$$= $1;}
	|ddiagonal  {$$= $1;};
		
EXPRESION:AXISNAME {$$=$1;} 
        |identifier {$$=$1;}
        |arroba identifier {$$=$1+""+$2;}
        |mul {$$=$1;}
        | identifier lcorchete OPERACION rcorchete{ $$=$1 +" " + $2 + " " + $3+" "+$4 ;} ;


AXISNAME: NAMEAXIS ddospuntos  EXPRESION {$$=$1+""+$2+""+$3;}
        |NAMEAXIS ddospuntos METODO{$$=$1+""+$2+""+$3;}
        ;

NAMEAXIS:ancestor{$$=$1;}
	|ancestor_or_self{$$=$1;}
	|attribute{$$=$1;}
	|child{$$=$1;}
	|descendant{$$=$1;}
	|descendant_or_self{$$=$1;}
	|following{$$=$1;}
	|following_sibling{$$=$1;}
	|namespace_node{$$=$1;}
	|parent{$$=$1;}
	|preceding{$$=$1;}
	|preceding_sibling{$$=$1;}
	|self{$$=$1;}
	;

OPERACION:OPERACION mas OPERACION{$$=$1+""+$2+""+$3;}
  |OPERACION menos OPERACION{$$=$1+""+$2+""+$3;}
  |OPERACION mul OPERACION{$$=$1+""+$2+""+$3;}
  |OPERACION div_ OPERACION{$$=$1+""+$2+""+$3;}
  |OPERACION igual OPERACION{$$=$1+""+$2+""+$3;}
  |OPERACION diferente OPERACION{$$=$1+""+$2+""+$3;}
  |OPERACION menorq OPERACION{$$=$1+""+$2+""+$3;}
  |OPERACION menorigual OPERACION{$$=$1+""+$2+""+$3;}
  |OPERACION mayorq OPERACION{$$=$1+""+$2+""+$3;}
  |OPERACION mayorigual OPERACION{$$=$1+""+$2+""+$3;}
  |OPERACION or_ OPERACION{$$=$1+""+$2+""+$3;}
  |OPERACION and_ OPERACION{$$=$1+""+$2+""+$3;}
  |OPERACION mod_ OPERACION{$$=$1+""+$2+""+$3;}
  |OPERAD{$$=$1;}
  ;

OPERAD:  
        |arroba mul{$$=$1+""+$2;}
        |arroba identifier{$$=$1+""+$2;}
        |identifier{$$=$1;}
        |DecimalLiteral{$$=$1;}
        |IntegerLiteral{$$=$1;}
        |last lparen rparen{$$=$1+""+$2+""+$3;}
        |position lparen rparen{$$=$1+""+$2+""+$3;};


METODO:   text lparen rparen{$$=$1+""+$2+""+$3;}
        | node lparen rparen{$$=$1+""+$2+""+$3;}
        ;

