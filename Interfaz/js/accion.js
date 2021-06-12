var bundles = require("../../Analizador/XML/dist/bundle");

var analizador = require("../../Analizador/XML/dist/indexAnalizadorXML");

function MetodoXPath() {
    try {
      var cod= document.getElementById("Menu_XPath").value;
      if(cod=="Menu_AbrirXPath"){
        
        
        var input = document.createElement('input');
        input.type = 'file';
        input.onchange = e => { 
          // getting a hold of the file reference
          var file = e.target.files[0]; 
          // setting up the reader
          var reader = new FileReader();
          reader.readAsText(file,'UTF-8');
          // here we tell the reader what to do when it's done reading...
          reader.onload = readerEvent => {
             var content = readerEvent.target.result; // this is the content!
             editorXPath.getDoc().setValue(content);
    
              //document.getElementById("ConsolaPython").value = input; //Consola secundaria 
    
          }
       
       }
       
       input.click();
    
       var slcchange = document.getElementById("Menu");
        slcchange.addEventListener("null", function() {
        });
    
      }else if ( cod=="Menu_AscXPath"){ //------------Analizar Descendentemente Xpath
    
        var texto = editorXPath.getValue();
        if(texto==""){
          alert("Debe Abrir un Archivo Xpath");
        }else{
  
          var objetos = gramatica.parse(texto);
          
          alert("Analisis Terminado")
          //document.getElementById("ConsolaSalida").value =objetos.codigo;
          editorConsola.getDoc().setValue(objetos.codigo);
        }
       
      }else if ( cod=="Menu_DesXPath"){ //------------Analizar Descendentemente Xpath
    
        var texto = editorXPath.getValue();
        
        if(texto==""){
          alert("Debe Abrir un Archivo Xpath");
        }else{
  
          var objetos = gramaticadesc.parse(texto);
          
          alert("Analisis Desc Terminado")
          //document.getElementById("ConsolaSalida").value =objetos.codigo;
          editorConsola.getDoc().setValue(objetos.codigo);
        }
       
      }else if ( cod=="Menu_Guardar"){
      
    
        descargarArchivo(generarTextoGuardar(), 'Guardado.java');
        
    
    
      }
    } catch (error) {
      console.log(error);
    }

    document.getElementById("Menu_XPath").selectedIndex = 0;
  }



function MetodoXML() {
    try {
      var cod= document.getElementById("Menu_XML").value;
      if(cod=="Menu_AbrirXML"){
        
        
        var input = document.createElement('input');
        input.type = 'file';
        input.onchange = e => { 
          // getting a hold of the file reference
          var file = e.target.files[0]; 
          // setting up the reader
          var reader = new FileReader();
          reader.readAsText(file,'UTF-8');
          // here we tell the reader what to do when it's done reading...
          reader.onload = readerEvent => {
             var content = readerEvent.target.result; // this is the content!
    
             editorXML.getDoc().setValue(content);
            
    
              input= document.getElementById("EntradaXML").value //Consola que tiene el texto 
    
              //document.getElementById("ConsolaPython").value = input; //Consola secundaria 
    
          }
       
       }
       
       input.click();
    
       var slcchange = document.getElementById("Menu");
        slcchange.addEventListener("null", function() {
        });
    
      }else if ( cod=="Menu_AscXML"){ //------------Analizar Descendentemente Xpath
       
        var texto =  editorXML.getValue();
        if(texto==""){
          alert("Debe Abrir un Archivo Xpath");
        }else{
          //alert(texto);

          console.log("inicia");
          
          var content = analizador.AnalizadorXMLASC("<s>asd</s>")
          
         // var content = require("../../Analizador/XML/dist/indexAnalizadorXML") // bundles.function(5);//AnalizarXMLASC('<libro>asdasd</libro>');

          console.log(content);

          console.log("fin");
          
          alert(recibido);
          alert("Analisis Desc Terminado")
          document.getElementById("ConsolaSalida").value =objetos.codigo;
          editorXPath.setValue(objetos.codigo);
        }
       
      }else if ( cod=="Menu_DesXML"){ //------------Analizar Descendentemente Xpath
    
        var texto = editorXML.getValue();
        if(texto==""){
          alert("Debe Abrir un Archivo Xpath");
        }else{
         
        }
       
      }else if ( cod=="Menu_Guardar"){
      
    
        descargarArchivo(generarTextoGuardar(), 'Guardado.java');
        
    
    
      }
    } catch (error) {
      console.log(error);
    }

    document.getElementById("Menu_XPath").selectedIndex = 0;
  }



  
  
  function generarTextoGuardar(){
  
    var texto1 = document.getElementById("entradatext").value 
      var texto = [];
      texto.push(texto1);
      return new Blob(texto, {
        type: 'text/plain'
      });
  }
  
  var ErroresLexicos="";
  var ErroresSintacticos="";
  var CodigoJavaScript="";
  var CodigoGraphvizRecuperado="";
  var ListaTokens="";
  
  function generarTexto() {
  
    
    var texto = [];
    texto.push(CodigoJavaScript);
    return new Blob(texto, {
      type: 'text/plain'
    });
  };
  
  function descargarArchivo(contenidoEnBlob, nombreArchivo) {
    //creamos un FileReader para leer el Blob
    var reader = new FileReader();
    //Definimos la función que manejará el archivo
    //una vez haya terminado de leerlo
    reader.onload = function (event) {
      //Usaremos un link para iniciar la descarga
      var save = document.createElement('a');
      save.href = event.target.result;
      save.target = '_blank';
      //Truco: así le damos el nombre al archivo
      save.download = nombreArchivo || 'archivo.dat';
      var clicEvent = new MouseEvent('click', {
        'view': window,
        'bubbles': true,
        'cancelable': true
      });
      //Simulamos un clic del usuario
      //no es necesario agregar el link al DOM.
      save.dispatchEvent(clicEvent);
      //Y liberamos recursos...
      (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    //Leemos el blob y esperamos a que dispare el evento "load"
    reader.readAsDataURL(contenidoEnBlob);
  };
  
  
  function MenuDescargar(){
    var cod= document.getElementById("Descargar").value;
  
    if(cod=="Menu_Descargar"){
      alert("Descargar JavaScript");
  
      descargarArchivo(generarTexto(), 'archivo.js');
  
    }else if (cod=="Menu_AST"){
      alert("Abrir AST");
      var win = window.open("./Ondox.html?id="+CodigoGraphvizRecuperado,'_blank');
      CodigoGraphvizRecuperado="";
      //var graphviz = 'digraph {' + CodigoGraphvizRecuperado + '}';
  
      //d3.select("#graph").graphviz()
      //.renderDot(graphviz);
  
    }
  
  
  }
  