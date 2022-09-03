{ 
  // Lee el archivo json con los datos 
  var url_productos = "https://gist.githubusercontent.com/josejbocanegra/b1873c6b7e732144355bb1627b6895ed/raw/";
  fetch(url_productos)
  .then(response => response.json())
  .then(data => ejecutar_lectura(data) );

  // Función para leer el archivo json.
  function ejecutar_lectura(data){
    let arregloObjetos = [];
    let eventosUnicos = [];
    
    for (var i in data)
      {
        let eventosTemp = data[i].events;
        for (var j in eventosTemp)
          {
            let evento = eventosTemp[j];
            //Añade el evento a la lista de unico
            if (eventosUnicos.indexOf(evento)===-1)
              eventosUnicos.push(evento);
          }
      }

    for(let i in eventosUnicos){
      let mat = contar_ocurrencias(eventosUnicos[i], data);
      //console.log("Evento", eventosUnicos[i]);  
      //console.log(mat);
      let corr = MCC(mat[0],mat[1],mat[2],mat[3]);
      let json_respuesta = {"evento": eventosUnicos[i], "correlacion":corr };
      arregloObjetos.push(json_respuesta);
      }

    console.log(arregloObjetos);
    return arregloObjetos;
    
    }
    
   
// Si la entrada del log contiene al evento, returna True. False de lo contrario
function entrada_tiene_evento(evento, entrada){
  return entrada.events.indexOf(evento) !== -1;
}

  // Cuenta el numero de TN, FN, FP, TP por evento del log
function contar_ocurrencias(evento, log){
  // Este arreglo representa la matriz de : TN, FN, FP, TP
  let matriz = [0, 0, 0, 0];
  // Recorrer todo el log de eventos
  for(let i = 0; i < log.length; i++){
    let entrada = log[i];
    let indice_matriz = 0;
    // Esto quiere decir que fijo ocurrio el evento: es un falso negativo o un verdadero positivo.
    // Es decir, es la posicion 1 (si no es ardilla) o 3 (si es ardilla)
    if (entrada_tiene_evento(evento, entrada)) {
      indice_matriz += 1;
    }
    // Esto quiere decir que el evento es una ardilla: es fijo un falso positivo o un verdadero positivo
    if (entrada.squirrel) {
      indice_matriz += 2;
    }
    matriz[indice_matriz] += 1;
  }
  return matriz;
}

  // Esta funcion retorna el coeficiente MCC para las ardillas
  function MCC(TN, FN, FP, TP){
  	return (TP*TN - FP*FN)/(Math.sqrt((TP + FP)*(TP + FN)*(TN + FP)*(TN + FN)));
  }
}
