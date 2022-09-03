{
  // Lee el archivo json con los datos de los productos
  const url_productos = "https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json";
  fetch(url_productos)
  .then(response => response.json())
  .then(productos => leer_productos(productos) );
  // Lee el archivo json con los datos de los pedidos
  const url_pedidos = "https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json";
  fetch(url_pedidos)
  .then(response => response.json())
  .then(pedidos => leer_pedidos(pedidos) );
  // Lee el archivo json con los datos de los pedidos


  // Esta funcion lee los productos y los ids de los productos del archivo
  function leer_productos(productos) {
    let arreglo_productos = [];
    for(var i in productos) {
      let producto = {"idProducto": productos[i].idproducto, "nombreProducto": productos[i].nombreProducto};
      arreglo_productos.push(producto);
    }
    //console.log(arreglo_productos);
  }

    // Esta funcion lee los productos y los ids de los pedidos del archivo
  // Esta funcion crea un json de respuesta a partir de una lista de ids de producto con sus respectivos nombres, y una lista de pedidos, con las cantidades pedidas de cada producto
  function leer_pedidos(pedidos) {
    let id_productos = [];
    let cantidad_por_producto = [];
    let i = 0;
    pedidos.forEach(pedido => {
    if (id_productos.includes(pedido.idproducto)){
      let index = id_productos.indexOf(pedido.idproducto);
      cantidad_por_producto[index] += parseInt(pedido.cantidad);
    }
    else {
      id_productos[i] = pedido.idproducto;
      cantidad_por_producto[i] = parseInt(pedido.cantidad);
      i += 1;
    }
  });
    console.log(id_productos);
    console.log(cantidad_por_producto);
  }

  
  // Esta funcion recibe un id de producto y retorna el nombre del producto
  function nombre_producto(arreglo_productos, arreglo_ids_productos, id_mas_pedido) {
    if (arreglo_ids_productos.includes(id_mas_pedido)) {
      let index_mas_pedido = arreglo_ids_productos.indexOf(id_mas_pedido);
      let prod_mas_pedido = arreglo_productos[index_mas_pedido];
      return prod_mas_pedido;
    }
  }
}
