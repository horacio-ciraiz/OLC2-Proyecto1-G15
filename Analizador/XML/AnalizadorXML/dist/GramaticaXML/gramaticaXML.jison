/* Definición Léxica */
%lex

%options case-insensitive
%x Comentario
%x Etiqueta

escapechar                          [\'\"\\bfnrtv]
escape                              \\{escapechar}
acceptedcharsdouble                 [^\"\\]+
stringdouble                        {escape}|{acceptedcharsdouble}
stringliteral                       \"{stringdouble}*\"

acceptedcharssingle                 [^\'\\]
stringsingle                        {escape}|{acceptedcharssingle}
charliteral                         \'{stringsingle}\'

BSL                                 "\\".
%s                                  comment
%%

"<!--"                {this.begin("Comentario"); }
<Comentario>[ \r\t]+  {}
<Comentario>\n        {}
<Comentario>"-->"     {this.popState();}
<Comentario>[^"-->"]+ {console.log("comentario: "+yytext)} 





\s+                                 /* skip whitespace */


"+"                         return 'mas';
"-"                         return 'menos';
"*"                         return 'por';
"/"                         return 'division';
"%"                         return 'resto';

"<="                        return 'menor_igual';
">="                        return 'mayor_igual';
"<"                         return 'menor';
">"                         return 'mayor';
"="                         return 'igual';

";"                         return 'ptcoma';
"("                         return 'parizq';
")"                         return 'parder';


/* Number literals */
(([0-9]+"."[0-9]*)|("."[0-9]+))     return 'Decimal';
[0-9]+                              return 'numero';

[a-zA-Z_][a-zA-Z0-9_ñÑ]*            return 'identificador';

{stringliteral}                     return 'cadena'
{charliteral}                       return 'caracter'

//ERROR LEXICO
.                                   {
                                        console.error('Error!, error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                                    }

<<EOF>>                     return 'EOF'

/lex

//IMPORTS
%{
    const {Objeto} = require("../Expresiones/Objeto");
    const {Atributo} = require("../Expresiones/Atributo");
%}

// PRESEDENCIA DE OPERADORES

%left 'lparen' 'rparen'


// PRODUCCIÓN INICIAL
%start INICIO

%%


// DEFINICION GRAMATICA
INICIO : RAICES EOF         { $$ = $1; return $$; }
;

RAICES:
	RAICES RAIZ         { $1.push($2); $$ = $1;}
	| RAIZ              { $$ = [$1]; } ;

RAIZ:
	OBJETO              { $$ = $1 }
;

OBJETO:
	menor identificador LATRIBUTOS mayor OBJETOS             menor division identificador mayor         { $$ = new Objeto($2,'',@1.first_line, @1.first_column,$3,$5); }
    | menor identificador LATRIBUTOS mayor LISTA_ID_OBJETO   menor division identificador mayor         { $$ = new Objeto($2,$5,@1.first_line, @1.first_column,$3,[]); }
    | menor identificador LATRIBUTOS division mayor                                                     { $$ = new Objeto($2,'',@1.first_line, @1.first_column,$3,[]); }
;

LATRIBUTOS: 
		ATRIBUTOS         { $$ = $1; }
        |                 { $$ = []; }
;

ATRIBUTOS:
		ATRIBUTOS ATRIBUTO         { $1.push($2); $$ = $1;}
    	| ATRIBUTO                 { $$ = [$1]; } 
;

ATRIBUTO: 
		identificador igual cadena         { $$ = new Atributo($1, $3, @1.first_line, @1.first_column); }
;

LISTA_ID_OBJETO: 
			LISTA_ID_OBJETO identificador         { $1=$1 + ' ' +$2 ; $$ = $1;}
        	| identificador                       { $$ = $1 }
;

OBJETOS:
	OBJETOS OBJETO         { $1.push($2); $$ = $1;}
	| OBJETO               { $$ = [$1]; } ;


