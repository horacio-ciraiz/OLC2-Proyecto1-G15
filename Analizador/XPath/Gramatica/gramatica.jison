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

"function"                  return 'function';
"as"                        return 'as';
"map"                       return 'map';
"array"                     return 'array';
"empty-sequence"            return 'empty_sequence';
"item"                      return 'item';
"node"                      return 'node';
"document-node"             return 'document_node';
"text"                      return 'text';
"comment"                   return 'comment';
"namespace-node"            return 'namespace_node';
"processing-instruction"    return 'processing_instruction';
"attribute"                 return 'attribute';
"schema-attribute"          return 'schema_attribute';
"element"                   return 'element';
"schema-element"            return 'schema_element';
"is"                        return 'is';

"child"                     return 'child';
"descendant"                return 'descendant';
"attribute"                 return 'attribute';
"self"                      return 'self';
"descendant-or-self"        return 'descendant_or_self';
"following-sibling"         return 'following_sibling';
"following"                 return 'following';
"namespace"                 return 'namespace';

"parent"                    return 'parent';
"ancestor"                  return 'ancestor';
"preceding-sibling"         return 'preceding_sibling';
"preceding"                 return 'preceding';
"ancestor-or-self"          return 'ancestor_or_self';

"eq"                        return 'eq_';
"ne"                        return 'ne_';
"lt"                        return 'lt_';
"le"                        return 'le_';
"gt"                        return 'gt_';
"ge"                        return 'ge_';




"+"                         return 'mas';
"-"                         return 'menos';
"*"                         return 'mul';

"/"                         return 'div';
"%"                         return 'mod';

"<="                        return 'menorigual';
">="                        return 'mayorigual';
"<"                         return 'menorq';
">"                         return 'mayorq';
"="                         return 'igual';
"=="                        return 'digual';
"!="                        return 'diferente';

"&&"                        return 'and';
"||"                        return 'or';
"!"                         return 'not';

"("                         return 'lparen';
")"                         return 'rparen';

","                         return 'coma';
"."                         return 'punto';
";"                         return 'puntocoma';
"?"                         return 'rinterrogacion';
"#"                         return 'numeral';
":"                         return 'dospuntos';
"["                         return 'lcorchete';
"]"                         return 'rcorchete';
"{"                         return 'lllave';
"}"                         return 'rllave';
"<<"                        return 'dmenorq';
">>"                        return 'dmayorq';
"::"                        return 'ddospuntos';
".."                        return 'dpunto';
":*"                        return 'dosppor';
"*:"                        return 'pordosp';
"$"                         return 'dolar';
"@"                         return 'arroba';



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
XPATH:EXPR;

PARAMLIST: PARAM (coma PARAM)*;

PARAM: dolar EQNAME TYPEDECLARATION;

FUNCTIONBODY:;

ENCLOSEDEXPR:;

EXPR:;

EXPRSINGLE:;

FOREXPR:;

SIMPLEFORCLAUSE:;

SIMPLEFORBINDING:;

LETEXPR:;

SIMPLELETCLAUSE:;

SIMPLELETBINDING:;

QUANTIFIEDEXPR:;

IFEXPR:;

OREXPR:;

ANDEXPR:;

COMPARISONEXPR:;

STRINGCONCATEXPR:;

RANGEEXPR:;

ADDITIVEEXPR:;

MULTIPLICATIVEEXPR:;

UNIONEXPR:;

INTERSECTEXCEPTEXPR:;

INSTANCEOFEXPR:;

TREATEXPR:;

CASTABLEEXPR:;

CASTEXPR:;

ARROWEXPR:;

UNARYEXPR:;
//------------------- AQUI INICIO
VALUEEXPR:SIMPLEMAPEXPR;

GENERALCOMP:igual
            |digual
            |menorq
            |menorigual
            |mayorq
            |mayorigual;

VALUECOMP: eq_
            | ne_
            | lt_
            | le_
            | gt_
            | ge_
            ;

NODECOMP: is
            |dmenorq
            |dmayorq;

SIMPLEMAPEXPR: PATHEXPR SIMPLEMAPEXPRL1;

SIMPLEMAPEXPRL1:SIMPLEMAPEXPRL1 SIMPLEMAPEXPRL2
                |SIMPLEMAPEXPRL2;

SIMPLEMAPEXPRL2:not PATHEXPR;



PATHEXPR: div RELATIVEPATHEXPR
        | div
        | ddiagonal RELATIVEPATHEXPR
        | RELATIVEPATHEXPR;




RELATIVEPATHEXPR: STEPEXPR RELATIVEPATHEXPRL1
                |STEPEXPR;

RELATIVEPATHEXPRL1:RELATIVEPATHEXPRL1 RELATIVEPATHEXPRL2
                |RELATIVEPATHEXPRL2 ;
RELATIVEPATHEXPRL2: RELATIVEPATHEXPRL2VAR STEPEXPR;
RELATIVEPATHEXPRL2VAR:div
                    |ddiagonal;




STEPEXPR: POSTFIXEXPR
        |AXISSTEP;





AXISSTEP: AXISSTEPVAR PREDICATELIST;

AXISSTEPVAR:REVERSESTEP
            |FORWARDSTEP;





FORWARDSTEP: FORWARDAXIS NODETEST
            |ABBREVFORWARDSTEP;

FORWARDAXIS: child ddospuntos
            | descendant ddospuntos
            | attribute ddospuntos
            | self ddospuntos
            | descendant_or_self ddospuntos
            | following_sibling ddospuntos
            | following ddospuntos
            | namespace ddospuntos
            ;



ABBREVFORWARDSTEP: arroba NODETEST
                |NODETEST;



REVERSESTEP: REVERSEAXIS NODETEST
            |ABBREVREVERSESTEP;

REVERSEAXIS: parent ddospuntos
            | ancestor ddospuntos
            | preceding_sibling ddospuntos
            | preceding ddospuntos
            | ancestor_or_self ddospuntos;

ABBREVREVERSESTEP: dpunto;

NODETEST: KINDTEST
        | NAMETEST;

NAMETEST: EQNAME
        | WILDCARD;

WILDCARD: mul
        | (ncname) dosppor
        | pordosp (ncname)
        | (BracedURILiteral) mul;

POSTFIXEXPR: PRIMARYEXPR POSTFIXEXPRL1
            |PRIMARYEXPR;

POSTFIXEXPRL1:POSTFIXEXPRL1 POSTFIXEXPRL2
            |POSTFIXEXPRL2;

POSTFIXEXPRL2:PREDICATE 
            |ARGUMENTLIST 
            |LOOKUP;



ARGUMENTLIST: lparen ARGUMENTLISTL1 rparen
            |lparen  rparen;

ARGUMENTLISTL1:ARGUMENT ARGUMENTLISTL2
            |ARGUMENT;

ARGUMENTLISTL2:ARGUMENTLISTL2 ARGUMENTLISTL3
            |ARGUMENTLISTL3;

ARGUMENTLISTL3:coma ARGUMENT;



PREDICATELIST: PREDICATELIST PREDICATE
            |PREDICATE
            |;

PREDICATE: lcorchete EXPR rcorchete;

LOOKUP: rinterrogacion KEYSPECIFIER;

KEYSPECIFIER: ncname
            | IntegerLiteral
            | PARENTHESIZEDEXPR
            | mul;

ARROWFUNCTIONSPECIFIER: EQNAME
                        | VARREF
                        |PARENTHESIZEDEXPR;

PRIMARYEXPR: LITERAL
            |VARREF
            |PARENTHESIZEDEXPR
            |CONTEXTITEMEXPR
            |FUNCTIONCALL
            |FUNCTIONITEMEXPR
            |MAPCONSTRUCTOR
            |ARRAYCONSTRUCTOR
            |UNARYLOOKUP;

LITERAL: NUMERICLITERAL
        |StringLiteral;

NUMERICLITERAL: IntegerLiteral
                |DecimalLiteral
                |DoubleLiteral;

VARREF: dolar VARNAME;

VARNAME: EQNAME;


//----------------------------------------------------------------------------
PARENTHESIZEDEXPR: ;  lparen EXPR rparen
                    |lparen rparen;

CONTEXTITEMEXPR:   punto;

FUNCTIONCALL: EQNAME ARGUMENTLIST;

ARGUMENT: EXPRSINGLE 
        |ARGUMENTPLACEHOLDER;

ARGUMENTPLACEHOLDER: rinterrogacion;

FUNCTIONITEMEXPR: NAMEDFUNCTIONREF
                |INLINEFUNCTIONEXPR;

NAMEDFUNCTIONREF: EQNAME numeral IntegerLiteral;

INLINEFUNCTIONEXPR: function lparen PARAMLIST  rparen as SEQUENCETYPE FUNCTIONBODY
                    |function lparen rparen as SEQUENCETYPE FUNCTIONBODY 
                    |function lparen PARAMLIST  rparen  FUNCTIONBODY
                    ||function lparen rparen  FUNCTIONBODY
                    ;



MAPCONSTRUCTOR: 	map lllave MAPCONSTRUCTORL1  rllave
                    |map lllave  rllave;

MAPCONSTRUCTORL1:MAPCONSTRUCTORENTRY MAPCONSTRUCTORL2 
                |MAPCONSTRUCTORENTRY;

MAPCONSTRUCTORL2:MAPCONSTRUCTORL2 MAPCONSTRUCTORL3
                |MAPCONSTRUCTORL3;

MAPCONSTRUCTORL3:coma MAPCONSTRUCTORENTRY;



MAPCONSTRUCTORENTRY: MAPKEYEXPR dospuntos MAPVALUEEXPR;

MAPKEYEXPR: EXPRSINGLE;

MAPVALUEEXPR: EXPRSINGLE;

ARRAYCONSTRUCTOR: SQUAREARRAYCONSTRUCTOR
                |CURLYARRAYCONSTRUCTOR;



SQUAREARRAYCONSTRUCTOR: lcorchete SQUAREARRAYCONSTRUCTORL1 rcorchete
                        |lcorchete  rcorchete;

SQUAREARRAYCONSTRUCTORL1: EXPRSINGLE SQUAREARRAYCONSTRUCTORL2
                        | EXPRSINGLE ;

SQUAREARRAYCONSTRUCTORL2:SQUAREARRAYCONSTRUCTORL2 SQUAREARRAYCONSTRUCTORL3
                        |SQUAREARRAYCONSTRUCTORL3;

SQUAREARRAYCONSTRUCTORL3:coma EXPRSINGLE;




CURLYARRAYCONSTRUCTOR: array ENCLOSEDEXPR;

UNARYLOOKUP: rinterrogacion KEYSPECIFIER ;

SINGLETYPE:  SIMPLETYPENAME rinterrogacion ?;

TYPEDECLARATION: as SEQUENCETYPE ;


SEQUENCETYPE: empty_sequence lparen rparen
            |ITEMTYPE OCCURRENCEINDICATOR
            |ITEMTYPE;

OCCURRENCEINDICATOR: rinterrogacion
                    |mul
                    |mas ;

ITEMTYPE: KINDTEST 
        |item lparen rparen
        |FUNCTIONTEST
        |MAPTEST
        |ARRAYTEST
        |ATOMICORUNIONTYPE
        |PARENTHESIZEDITEMTYPE;


ATOMICORUNIONTYPE: EQNAME;

KINDTEST: DOCUMENTTEST
        |ELEMENTTEST
        |ATTRIBUTETEST
        |SCHEMAELEMENTTEST
        |SCHEMAATTRIBUTETEST
        |PITEST
        |COMMENTTEST
        |TEXTTEST
        |NAMESPACENODETEST
        |ANYKINDTEST;

ANYKINDTEST: node lparen rparen ;

DOCUMENTTEST: document_node lparen DOCUMENTTESTL1 rparen
            |document_node lparen rparen;

DOCUMENTTESTL1: ELEMENTTEST 
              | SCHEMAELEMENTTEST;


TEXTTEST: text lparen rparen;

COMMENTTEST: comment lparen rparen;

NAMESPACENODETEST: namespace_node lparen rparen ;

PITEST: processing_instruction lparen PITESTL1 rparen
        |processing_instruction lparen rparen;

PITESTL1: ncname 
        | stringliteral;

ATTRIBUTETEST: attribute lparen ATTRIBUTETESTL1 rparen
            |attribute lparen  rparen;

ATTRIBUTETESTL1:ATTRIBNAMEORWILDCARD coma TYPENAME
                |ATTRIBNAMEORWILDCARD;

ATTRIBNAMEORWILDCARD: ATTRIBUTENAME
                    |mul;

SCHEMAATTRIBUTETEST: schema_attribute lparen ATTRIBUTEDECLARATION rparen ;

ATTRIBUTEDECLARATION: ATTRIBUTENAME;

ELEMENTTEST: element lparen ELEMENTTEST1 rparen
            |element lparen  rparen;

ELEMENTTEST1:ELEMENTNAMEORWILDCARD ELEMENTTEST2
            |ELEMENTNAMEORWILDCARD;

ELEMENTTEST2:coma TYPENAME rinterrogacion
            |coma TYPENAME;


ELEMENTNAMEORWILDCARD: ELEMENTNAME
                    |mul ;

SCHEMAELEMENTTEST: schema_element lparen ELEMENTDECLARATION rparen;

ELEMENTDECLARATION: ELEMENTNAME;

ATTRIBUTENAME: EQNAME;

ELEMENTNAME: EQNAME;

SIMPLETYPENAME: TYPENAME;

TYPENAME: EQNAME;

FUNCTIONTEST: ANYFUNCTIONTEST
            |TYPEDFUNCTIONTEST
            ;

ANYFUNCTIONTEST: function lparen mul rparen;



TYPEDFUNCTIONTEST:function lparen SEQUENCETYPE TYPEDFUNCTIONTESTLIST rparen as SEQUENCETYPE
                |function lparen SEQUENCETYPE rparen as SEQUENCETYPE
                |function lparen   rparen as SEQUENCETYPE ;

TYPEDFUNCTIONTESTLIST: TYPEDFUNCTIONTESTLIST TYPEDFUNCTIONL
                    | TYPEDFUNCTIONL;

TYPEDFUNCTIONL: coma SEQUENCETYPE;


            

MAPTEST: ANYMAPTEST
        |TYPEDMAPTEST;

ANYMAPTEST: map lparen mul rparen;

TYPEDMAPTEST: map lparen ATOMICORUNIONTYPE coma SEQUENCETYPE rparen;

ARRAYTEST: ANYARRAYTEST
        |TYPEDARRAYTEST;

ANYARRAYTEST: array lparen mul rparen;

TYPEDARRAYTEST: array lparen SEQUENCETYPE rparen;

PARENTHESIZEDITEMTYPE: lparen ITEMTYPE rparen;

EQNAME: QName 
        | URIQualifiedName;














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