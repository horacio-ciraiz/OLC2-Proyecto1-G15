

  function MetodoAbrir() {
  
    var cod= document.getElementById("Menu").value;
    if(cod=="Menu_Abrir"){
      
      
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
  
           document.getElementById("entradatext").value = content;
           
           var editor=CodeMirror.fromTextArea(
            document.getElementById("entradatext"),{
              theme:"neo",
              lineNumbers:true,
              mode: "text/x-java",
              scrollbarStyle:"native",
            
          });
          editor.setSize("550px","300px");
          
  
            input= document.getElementById("entradatext").value //Consola que tiene el texto 
  
            //document.getElementById("ConsolaPython").value = input; //Consola secundaria 
  
        }
     
     }
     
     input.click();
  
     var slcchange = document.getElementById("Menu");
      slcchange.addEventListener("null", function() {
      });
  
    }else if ( cod=="Menu_Analizar"){
  
      var texto1 = document.getElementById("entradatext").value 
  
      if(texto1==""){
        alert("Debe Abrir un Archivo");
      }else{
        Conexion();
        CodigoTraducido();
        CodigoErroresLexicos();
        CodigoErroresSintacticos();
        CodigoListaTokens();
        CodigoGraphviz();
  
       ErroresLexicos="";
       ErroresSintacticos="";
       CodigoJavaScript="";
       ListaTokens="";
      }
      //document.getElementById("ConsolaJavaScript").value = "Errores Lexicos******* \n"+ ErroresLexicos + "\n Errores Sintacticos ********* "+ ErroresSintacticos;
    }else if ( cod=="Menu_Guardar"){
    
  
      descargarArchivo(generarTextoGuardar(), 'Guardado.java');
      
  
  
    }
  }
  
  function generarTextoGuardar(){
  
    var texto1 = document.getElementById("entradatext").value 
      var texto = [];
      texto.push(texto1);
      return new Blob(texto, {
        type: 'text/plain'
      });
  }
  
  
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
  

//------------------Metodo-------------------
  function MetodoXPath(){
    
    var cod  = document.getElementById("Menu_XPath").value;
    if(cod=="Menu_AscXPath"){

    }else if (cod=="Menu_DesXPath"){
      alert("Iniciando XPath Descendente");
      texto = document.getElementById("EntradaXPath").value 
      var objetos = gramatica.parse(texto);
      alert("Analisis Terminado");
      document.getElementById("ConsolaSalida").value ="";
      document.getElementById("ConsolaSalida").value += objetos.codigo;

    }

  }
  
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
  
  

  
  
  //---------- codigo Graphviz----------------
  function CodigoGraphviz(){
    CodigoGraphvizRecuperado="";
    var texto="";
    var url = "http://localhost:3030/api/CodigoGraphviz/";
    var data = {datos:'"'+texto+ '"'};
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(function(error) {
        alert(error);
    })
    .then(function(response) {
        alert(response); 
  
        CodigoGraphvizRecuperado=response;
  
    });
  
  }
  
  
  
  //--------recuperar Errores Lexicos-------------
  function CodigoErroresLexicos(){
    ErroresLexicos="";
    var texto="";
    var url = "http://localhost:3030/api/ErroresLexicos/";
    var data = {datos:'"'+texto+ '"'};
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(function(error) {
        alert(error);
    })
    .then(function(response) {
        alert(response); // el response viene el arreglo 
  
        response.forEach(element => {
          ErroresLexicos+= element + "\n";
        
      });
  
        document.getElementById("ConsolaJavaScript").value ="Errores Lexicos:\n"+ErroresLexicos;
  
  
    });
  
  }
  //--------------------errroes sintacticos-----------
  function CodigoErroresSintacticos(){
    ErroresSintacticos="";
    var texto="";
    var url = "http://localhost:3030/api/ErroresSintacticos/";
    var data = {datos:'"'+texto+ '"'};
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(function(error) {
        alert(error);
    })
    .then(function(response) {
        alert(response);
  
        response.forEach(element => {
          ErroresSintacticos+= element + "\n";
        
      });
  
        document.getElementById("ConsolaJavaScript").value += "\nErrores Sintacticos:\n"+ ErroresSintacticos;
  
  
  
    });
  
  }
  
  //--------------------lista de tokens------------------
  function CodigoListaTokens(){
    ErroresSintacticos="";
    var texto="";
    var url = "http://localhost:3030/api/ListaTokens/";
    var data = {datos:'"'+texto+ '"'};
    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(function(error) {
        alert(error);
    })
    .then(function(response) {
        alert(response);
  
        response.forEach(element => {
          ListaTokens+= element + "\n";
        
      });
  
        document.getElementById("ConsolaJavaScript").value += "\nLista de Tokens:\n"+ ListaTokens;
  
  
  
    });
  
  }
  
  
  
  
  
  function handleFiles(files) {
    
    var file = files[0];
    var reader = new FileReader();
    reader.onload = function (e) {
      
        // Cuando éste evento se dispara, los datos están ya disponibles.
        // Se trata de copiarlos a una área <div> en la página.
        var output = document.getElementById("fileOutput");
        output.textContent = e.target.result;
        document.getElementById("entradatext").value = output.textContent;
    };
    reader.readAsText(file);
  }
  
  