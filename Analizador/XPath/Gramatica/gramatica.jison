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


"+"                         return 'mas';
"-"                         return 'menos';
"*"                         return 'mul';

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
XPATH:;

PARAMLIST:;

PARAM:;

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

VALUEEXPR:;

GENERALCOMP:;

VALUECOMP:;

NODECOMP:;

SIMPLEMAPEXPR:;

PATHEXPR:;

RELATIVEPATHEXPR:;

STEPEXPR:;

AXISSTEP:;

FORWARDSTEP:;

FORWARDAXIS:;

ABBREVFORWARDSTEP:;

REVERSESTEP:;

REVERSEAXIS:;

ABBREVREVERSESTEP:;

NODETEST:;

NAMETEST:;

WILDCARD:;

POSTFIXEXPR:;

ARGUMENTLIST:;

PREDICATELIST:;

PREDICATE:;

LOOKUP:;

KEYSPECIFIER:;

ARROWFUNCTIONSPECIFIER:;

PRIMARYEXPR:;

LITERAL:;

NUMERICLITERAL:;

VARREF:;

VARNAME:;


//----------------------------------------------------------------------------
PARENTHESIZEDEXPR: ;  lparen EXPR? rparen;

CONTEXTITEMEXPR:   punto;

FUNCTIONCALL: EQNAME ARGUMENTLIST;

ARGUMENT: EXPRSINGLE 
        |ARGUMENTPLACEHOLDER;

ARGUMENTPLACEHOLDER: rinterrogacion;

FUNCTIONITEMEXPR: NAMEDFUNCTIONREF
                |INLINEFUNCTIONEXPR;

NAMEDFUNCTIONREF: EQNAME numeral IntegerLiteral;

INLINEFUNCTIONEXPR: function lparen PARAMLIST ? rparen (as SEQUENCETYPE)? FUNCTIONBODY ;

MAPCONSTRUCTOR: 	map lllave lparen MAPCONSTRUCTORENTRY lparen coma MAPCONSTRUCTORENTRY rparen* rparen? rllave;

MAPCONSTRUCTORENTRY: MAPKEYEXPR dospuntos MAPVALUEEXPR;

MAPKEYEXPR: EXPRSINGLE;

MAPVALUEEXPR: EXPRSINGLE;

ARRAYCONSTRUCTOR: SQUAREARRAYCONSTRUCTOR
                |CURLYARRAYCONSTRUCTOR;

SQUAREARRAYCONSTRUCTOR: lcorchete (EXPRSINGLE( coma EXPRSINGLE)*)? rcorchete;

CURLYARRAYCONSTRUCTOR: array ENCLOSEDEXPR;

UNARYLOOKUP: rinterrogacion KEYSPECIFIER ;

SINGLETYPE:  SIMPLETYPENAME rinterrogacion ?;

TYPEDECLARATION: as SEQUENCETYPE ;


SEQUENCETYPE: (empty_sequence lparen rparen)
            |(ITEMTYPE OCCURRENCEINDICATOR?);

OCCURRENCEINDICATOR: rinterrogacion
                    |mul
                    |mas ;

ITEMTYPE: KINDTEST 
        |(item lparen rparen)
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

DOCUMENTTEST: document_node lparen (ELEMENTTEST | SCHEMAELEMENTTEST)? rparen;

TEXTTEST: text lparen rparen;

COMMENTTEST: comment lparen rparen;

NAMESPACENODETEST: namespace_node lparen rparen ;

PITEST: processing_instruction lparen ( ncname | stringliteral )? rparen;

ATTRIBUTETEST: attribute lparen (ATTRIBNAMEORWILDCARD (coma TYPENAME)?)? rparen;

ATTRIBNAMEORWILDCARD: ATTRIBUTENAME
                    |mul;

SCHEMAATTRIBUTETEST: schema_attribute lparen ATTRIBUTEDECLARATION rparen ;

ATTRIBUTEDECLARATION: ATTRIBUTENAME;

ELEMENTTEST: element lparen (ELEMENTNAMEORWILDCARD (coma TYPENAME rinterrogacion ?)?)? rparen;

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

TYPEDFUNCTIONTEST:function lparen (SEQUENCETYPE (coma SEQUENCETYPE)*)? rparen as SEQUENCETYPE ;

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