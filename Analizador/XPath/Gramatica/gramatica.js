/* parser generated by jison 0.4.18 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var gramatica = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[1,12],$V1=[1,13],$V2=[1,16],$V3=[1,17],$V4=[1,18],$V5=[1,19],$V6=[1,26],$V7=[1,27],$V8=[1,28],$V9=[1,29],$Va=[1,30],$Vb=[1,31],$Vc=[1,32],$Vd=[1,33],$Ve=[1,34],$Vf=[1,35],$Vg=[1,36],$Vh=[1,37],$Vi=[1,38],$Vj=[1,5],$Vk=[1,6],$Vl=[1,7],$Vm=[1,8],$Vn=[1,22],$Vo=[1,23],$Vp=[1,24],$Vq=[1,25],$Vr=[1,42],$Vs=[1,40],$Vt=[1,41],$Vu=[1,43],$Vv=[1,44],$Vw=[1,45],$Vx=[1,46],$Vy=[1,47],$Vz=[1,48],$VA=[1,49],$VB=[1,50],$VC=[1,51],$VD=[1,52],$VE=[5,25,26,45,46,47,48,49,50,51,52,53,54,55,56],$VF=[1,58],$VG=[1,59],$VH=[5,15,16,25,26,45,46,47,48,49,50,51,52,53,54,55,56],$VI=[22,23,27,28,32,33,34,35,36,37,38,39,40,41,42,43,44,62,65,66,67],$VJ=[5,25,45,46,48,49,50,51,52,53,54,55],$VK=[5,25,48,49,50,51,52,53,54,55];
var parser = {trace: function trace () { },
yy: {},
symbols_: {"error":2,"XPATH":3,"OPERACION":4,"EOF":5,"BLOQUE":6,"SIMPLEOR":7,"PATHEXPR":8,"ORL1":9,"ORL2":10,"simpleor":11,"DIAGONALSIMPLE":12,"DIAGONALDOBLE":13,"PATHREL":14,"sdiagonal":15,"ddiagonal":16,"EXPRESION":17,"PATHRELL1":18,"PATHRELL2":19,"PATHRELV":20,"AXISNAME":21,"identifier":22,"arroba":23,"lcorchete":24,"rcorchete":25,"mul":26,"spunto":27,"dpunto":28,"METODO":29,"NAMEAXIS":30,"ddospuntos":31,"ancestor":32,"ancestor_or_self":33,"attribute":34,"child":35,"descendant":36,"descendant_or_self":37,"following":38,"following_sibling":39,"namespace_node":40,"parent":41,"preceding":42,"preceding_sibling":43,"self":44,"mas":45,"menos":46,"div_":47,"igual":48,"diferente":49,"menorq":50,"menorigual":51,"mayorq":52,"mayorigual":53,"or_":54,"and_":55,"mod_":56,"OPERAD":57,"DecimalLiteral":58,"IntegerLiteral":59,"StringLiteral":60,"CharLiteral":61,"text":62,"lparen":63,"rparen":64,"node":65,"last":66,"position":67,"$accept":0,"$end":1},
terminals_: {2:"error",5:"EOF",11:"simpleor",15:"sdiagonal",16:"ddiagonal",22:"identifier",23:"arroba",24:"lcorchete",25:"rcorchete",26:"mul",27:"spunto",28:"dpunto",31:"ddospuntos",32:"ancestor",33:"ancestor_or_self",34:"attribute",35:"child",36:"descendant",37:"descendant_or_self",38:"following",39:"following_sibling",40:"namespace_node",41:"parent",42:"preceding",43:"preceding_sibling",44:"self",45:"mas",46:"menos",47:"div_",48:"igual",49:"diferente",50:"menorq",51:"menorigual",52:"mayorq",53:"mayorigual",54:"or_",55:"and_",56:"mod_",58:"DecimalLiteral",59:"IntegerLiteral",60:"StringLiteral",61:"CharLiteral",62:"text",63:"lparen",64:"rparen",65:"node",66:"last",67:"position"},
productions_: [0,[3,2],[6,1],[6,1],[7,2],[9,2],[9,1],[10,2],[8,1],[8,1],[8,1],[12,2],[12,1],[13,2],[13,1],[14,2],[14,1],[18,2],[18,1],[19,2],[20,1],[20,1],[17,1],[17,1],[17,5],[17,2],[17,2],[17,1],[17,1],[17,4],[17,1],[21,3],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[30,1],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,3],[4,1],[4,1],[57,1],[57,1],[57,1],[57,1],[29,3],[29,3],[29,3],[29,3]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1:

        arreglolexico=$$[$0-1];

        return {
                codigo:arreglolexico,finalizado:"\nfin.",AST:$$[$0-1]};
        
break;
case 2: case 3: case 6: case 8: case 9: case 10: case 12: case 14: case 22: case 23: case 27: case 28: case 30: case 32: case 33: case 34: case 35: case 36: case 37: case 38: case 39: case 40: case 41: case 42: case 43: case 44:
this.$=$$[$0];
break;
case 4: case 5: case 7: case 17:
this.$=$$[$0-1]+" "+$$[$0];
break;
case 11: case 13:
this.$=$$[$0-1] +" "+ $$[$0];
break;
case 15:
 this.$=$$[$0-1] +" "+ $$[$0];
break;
case 16: case 18: case 20: case 21:
this.$= $$[$0];
break;
case 19:
this.$= $$[$0-1]+" "+$$[$0];
break;
case 24:
 this.$=$$[$0-4] +" " + $$[$0-3] + " " + $$[$0-2]+" "+$$[$0-1] ;
break;
case 25: case 26:
this.$=$$[$0-1]+""+$$[$0];
break;
case 29:
 this.$=$$[$0-3] +" " + $$[$0-2] + " " + $$[$0-1]+" "+$$[$0] ;
break;
case 31: case 64: case 65: case 66: case 67:
this.$=$$[$0-2]+""+$$[$0-1]+""+$$[$0];
break;
case 45: case 46: case 47: case 48: case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57:
this.$=new Operacion($$[$0-2],$$[$0-1],Operador.SUMA,_$[$0-2].first_line, _$[$0-2].first_column);
break;
case 58: case 59:
this.$=new Operacion($$[$0],$$[$01],Operador.SUMA,_$[$0].first_line, _$[$0].first_column);
break;
case 60: case 61: case 62: case 63:
this.$= new Primitivo($$[$0],_$[$0].first_line, _$[$0].first_column);
break;
}
},
table: [{3:1,4:2,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{1:[3]},{5:[1,39],26:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vy,52:$Vz,53:$VA,54:$VB,55:$VC,56:$VD},o($VE,[2,58]),o($VE,[2,59]),o($VE,[2,60]),o($VE,[2,61]),o($VE,[2,62]),o($VE,[2,63]),o($VE,[2,8]),o($VE,[2,9]),o($VE,[2,10]),o($VE,[2,12],{17:14,21:15,29:20,30:21,14:53,22:$V2,23:$V3,27:$V4,28:$V5,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,62:$Vn,65:$Vo,66:$Vp,67:$Vq}),o($VE,[2,14],{17:14,21:15,29:20,30:21,14:54,22:$V2,23:$V3,27:$V4,28:$V5,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,62:$Vn,65:$Vo,66:$Vp,67:$Vq}),o($VE,[2,16],{18:55,19:56,20:57,15:$VF,16:$VG}),o($VH,[2,22]),o($VH,[2,23],{24:[1,60]}),{22:[1,61],26:[1,62]},o($VH,[2,27]),o($VH,[2,28]),o($VH,[2,30]),{31:[1,63]},{63:[1,64]},{63:[1,65]},{63:[1,66]},{63:[1,67]},{31:[2,32]},{31:[2,33]},{31:[2,34]},{31:[2,35]},{31:[2,36]},{31:[2,37]},{31:[2,38]},{31:[2,39]},{31:[2,40]},{31:[2,41]},{31:[2,42]},{31:[2,43]},{31:[2,44]},{1:[2,1]},{4:68,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{4:69,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{4:70,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{4:71,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{4:72,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{4:73,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{4:74,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{4:75,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{4:76,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{4:77,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{4:78,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{4:79,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{4:80,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},o($VE,[2,11]),o($VE,[2,13]),o($VE,[2,15],{20:57,19:81,15:$VF,16:$VG}),o($VH,[2,18]),{17:82,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,62:$Vn,65:$Vo,66:$Vp,67:$Vq},o($VI,[2,20]),o($VI,[2,21]),{4:83,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},o($VH,[2,25],{24:[1,84]}),o($VH,[2,26]),{17:85,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,62:$Vn,65:$Vo,66:$Vp,67:$Vq},{64:[1,86]},{64:[1,87]},{64:[1,88]},{64:[1,89]},o($VJ,[2,45],{26:$Vr,47:$Vu,56:$VD}),o($VJ,[2,46],{26:$Vr,47:$Vu,56:$VD}),o($VE,[2,47]),o($VE,[2,48]),o($VK,[2,49],{26:$Vr,45:$Vs,46:$Vt,47:$Vu,56:$VD}),o($VK,[2,50],{26:$Vr,45:$Vs,46:$Vt,47:$Vu,56:$VD}),o($VK,[2,51],{26:$Vr,45:$Vs,46:$Vt,47:$Vu,56:$VD}),o($VK,[2,52],{26:$Vr,45:$Vs,46:$Vt,47:$Vu,56:$VD}),o($VK,[2,53],{26:$Vr,45:$Vs,46:$Vt,47:$Vu,56:$VD}),o($VK,[2,54],{26:$Vr,45:$Vs,46:$Vt,47:$Vu,56:$VD}),o([5,25,54],[2,55],{26:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vy,52:$Vz,53:$VA,55:$VC,56:$VD}),o([5,25,54,55],[2,56],{26:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vy,52:$Vz,53:$VA,56:$VD}),o($VE,[2,57]),o($VH,[2,17]),o($VH,[2,19]),{25:[1,90],26:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vy,52:$Vz,53:$VA,54:$VB,55:$VC,56:$VD},{4:91,8:4,12:9,13:10,14:11,15:$V0,16:$V1,17:14,21:15,22:$V2,23:$V3,27:$V4,28:$V5,29:20,30:21,32:$V6,33:$V7,34:$V8,35:$V9,36:$Va,37:$Vb,38:$Vc,39:$Vd,40:$Ve,41:$Vf,42:$Vg,43:$Vh,44:$Vi,57:3,58:$Vj,59:$Vk,60:$Vl,61:$Vm,62:$Vn,65:$Vo,66:$Vp,67:$Vq},o($VH,[2,31]),o($VH,[2,64]),o($VH,[2,65]),o($VH,[2,66]),o($VH,[2,67]),o($VH,[2,29]),{25:[1,92],26:$Vr,45:$Vs,46:$Vt,47:$Vu,48:$Vv,49:$Vw,50:$Vx,51:$Vy,52:$Vz,53:$VA,54:$VB,55:$VC,56:$VD},o($VH,[2,24])],
defaultActions: {26:[2,32],27:[2,33],28:[2,34],29:[2,35],30:[2,36],31:[2,37],32:[2,38],33:[2,39],34:[2,40],35:[2,41],36:[2,42],37:[2,43],38:[2,44],39:[2,1]},
parseError: function parseError (str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        var error = new Error(str);
        error.hash = hash;
        throw error;
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        var lex = function () {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        };
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};

	
	 var arreglolexico = "Codigo: ";

 
        
    const {Primitivo} = require("../Expresiones/Primitivo");
    const {Operacion, Operador} = require("../Expresiones/Operacion");
    const {Objeto} = require("../Expresiones/Objeto");
    const {Atributo} = require("../Expresiones/Atributo");
    
   
    
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function(match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex () {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin (condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState () {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules () {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState (n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState (condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 33;
break;
case 1:return 37;
break;
case 2:return 39;
break;
case 3:return 40;
break;
case 4:return 43;
break;
case 5:return 32;
break;
case 6:return 34;
break;
case 7:return 35;
break;
case 8:return 36;
break;
case 9:return 38;
break;
case 10:return 41;
break;
case 11:return 42;
break;
case 12:return 44;
break;
case 13:return 'null';
break;
case 14:return 'true';
break;
case 15:return 'false';
break;
case 16:return 65;
break;
case 17:return 62;
break;
case 18:return 66;
break;
case 19:return 67;
break;
case 20:return 47;
break;
case 21:return 54;
break;
case 22:return 55;
break;
case 23:return 56;
break;
case 24:return 11;
break;
case 25:return 45;
break;
case 26:return 46;
break;
case 27:return 26;
break;
case 28:return 48;
break;
case 29:return 49;
break;
case 30:return 50;
break;
case 31:return 51;
break;
case 32:return 52;
break;
case 33:return 53;
break;
case 34:return 63;
break;
case 35:return 64;
break;
case 36:return 24;
break;
case 37:return 25;
break;
case 38:return 16; //Probar Esto
break;
case 39:return 15;
break;
case 40:return 28;
break;
case 41:return 27;
break;
case 42:return 23;
break;
case 43:return 31;
break;
case 44:/*skip comment */
break;
case 45:/* skip whitespace */
break;
case 46:return 58;
break;
case 47:return 59;
break;
case 48:return 60;
break;
case 49:return 61;
break;
case 50:return 22;
break;
case 51:
                                        console.error('Este es un error léxico: ' + yy_.yytext + ', en la linea: ' + yy_.yylloc.first_line + ', en la columna: ' + yy_.yylloc.first_column);
                                    
break;
case 52:return 5;
break;
}
},
rules: [/^(?:ancestor-or-self\b)/i,/^(?:descendant-or-self\b)/i,/^(?:following-sibling\b)/i,/^(?:namespace-node\b)/i,/^(?:preceding-sibling\b)/i,/^(?:ancestor\b)/i,/^(?:attribute\b)/i,/^(?:child\b)/i,/^(?:descendant\b)/i,/^(?:following\b)/i,/^(?:parent\b)/i,/^(?:preceding\b)/i,/^(?:self\b)/i,/^(?:null\b)/i,/^(?:true\b)/i,/^(?:false\b)/i,/^(?:node\b)/i,/^(?:text\b)/i,/^(?:last\b)/i,/^(?:position\b)/i,/^(?:div\b)/i,/^(?:or\b)/i,/^(?:and\b)/i,/^(?:mod\b)/i,/^(?:\|)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:=)/i,/^(?:!=)/i,/^(?:<)/i,/^(?:<=)/i,/^(?:>)/i,/^(?:>=)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\[)/i,/^(?:\])/i,/^(?:\/\/)/i,/^(?:\/)/i,/^(?:\.\.)/i,/^(?:\.)/i,/^(?:@)/i,/^(?:::)/i,/^(?:(\(:((\\([\'\"\\bfnrtv]))|([^\:)\\]+)):\)))/i,/^(?:\s+)/i,/^(?:(([0-9]+\.[0-9]*)|(\.[0-9]+)))/i,/^(?:([0-9]+))/i,/^(?:("((\\([\'\"\\bfnrtv]))|([^\"\\]+))*"))/i,/^(?:('((\\([\'\"\\bfnrtv]))|([^\'\\]+))*'))/i,/^(?:[a-zA-Z_][a-zA-Z0-9_ñÑ]*)/i,/^(?:.)/i,/^(?:$)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = gramatica;
exports.Parser = gramatica.Parser;
exports.parse = function () { return gramatica.parse.apply(gramatica, arguments); };
exports.main = function commonjsMain (args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}