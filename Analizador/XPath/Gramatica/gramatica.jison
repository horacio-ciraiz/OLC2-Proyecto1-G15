%lex

%options case-insensitive
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


"//".*                              /* skip comments */
"/*"                                this.begin('comment');
<comment>"*/"                       this.popState();
<comment>.                          /* skip comment content*/
\s+                                 /* skip whitespace */

"print"                     return 'print';
"null"                      return 'null';
"true"                      return 'true';
"false"                     return 'false';

"+"                         return 'plus';
"-"                         return 'minus';
"*"                         return 'times';
"/"                         return 'div';
"%"                         return 'mod';

"<="                        return 'lte';
">="                        return 'gte';
"<"                         return 'lt';
">"                         return 'gt';
"="                         return 'asig';
"=="                        return 'equal';
"!="                        return 'nequal';

"&&"                        return 'and';
"||"                        return 'or';
"!"                         return 'not';

";"                         return 'semicolon';
"("                         return 'lparen';
")"                         return 'rparen';



/* Number literals */
(([0-9]+"."[0-9]*)|("."[0-9]+))     return 'DoubleLiteral';
[0-9]+                              return 'IntegerLiteral';

[a-zA-Z_][a-zA-Z0-9_ñÑ]*            return 'identifier';

{stringliteral}                     return 'StringLiteral'
{charliteral}                       return 'CharLiteral'

//error lexico
.                                   {
                                        console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);
                                    }

<<EOF>>                     return 'EOF'

/lex

//SECCION DE IMPORTS
%{
    
%}


// DEFINIMOS PRESEDENCIA DE OPERADORES
%left 'or'
%left 'and'
%left 'lt' 'lte' 'gt' 'gte' 'equal' 'nequal'
%left 'plus' 'minus'
%left 'times' 'div' 'mod'
%left 'pow'
%left 'not' 
%left UMINUS
%left 'lparen' 'rparen'

// DEFINIMOS PRODUCCIÓN INICIAL
%start START
%%


/* Definición de la gramática */
START : RAICES EOF         
    ;

    RAICES:
    RAICES RAIZ           
	| RAIZ     
;

RAIZ:
    PRINT semicolon       
    | OBJETO              
;

OBJETO:
      lt identifier LATRIBUTOS gt OBJETOS           lt div identifier gt       
    | lt identifier LATRIBUTOS gt LISTA_ID_OBJETO   lt div identifier gt       
    | lt identifier LATRIBUTOS div gt                                          
;

LATRIBUTOS: ATRIBUTOS                              
           |                                        
;

ATRIBUTOS:
    ATRIBUTOS ATRIBUTO                              
    |ATRIBUTO                                       
;

ATRIBUTO: 
    identifier asig StringLiteral                  
;

LISTA_ID_OBJETO: LISTA_ID_OBJETO identifier         
        | identifier                                
;

OBJETOS:
      OBJETOS OBJETO        
	| OBJETO       
    ;         

PRINT:
    print lparen EXPR rparen   
    ;        

EXPR:
    PRIMITIVA                           
    | OP_ARITMETICAS                    
;

OP_ARITMETICAS:
    | EXPR minus EXPR                   
    | EXPR times EXPR                   
    |EXPR plus EXPR                      
    | EXPR div EXPR                   
    | EXPR mod EXPR                     
    | minus EXPR %prec UMINUS          
    | lparen EXPR rparen                
;

PRIMITIVA:
    IntegerLiteral                    
    | DoubleLiteral                     
    | StringLiteral                     
    | charliteral                   
    | null                              
    | true                              
    | false                             
;