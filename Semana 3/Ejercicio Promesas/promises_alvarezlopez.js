{
  // Lee el archivo json con los datos de los productos
  async function getProductos() {
    const url_productos = "https://gist.githubusercontent.com/josejbocanegra/be0461060d1c2d899740b8247089ba22/raw/916d2141e32e04031bda79c8886e8e4df0ae7f24/productos.json";
    try {
        let res = await fetch(url_productos);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
  
// Lee el archivo json con los datos de los pedidos
async function getPedidos() {
    const url_pedidos = "https://gist.githubusercontent.com/josejbocanegra/7b6febf87e9d986048a648487b35e693/raw/576531a2d0e601838fc3de997e021816a4b730f8/detallePedido.json";
    try {
        let res = await fetch(url_pedidos);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

// Esta funcion recibe un id de producto y retorna el nombre del producto
async function nombre_producto(id_mas_pedido) {
    let productos = await getProductos();
    let arreglo_productos = [];
    let arreglo_ids_productos = [];
    for(var i in productos) {
      if (id_mas_pedido === productos[i].idproducto) {
        return productos[i].nombreProducto;
      }
    }
  }

// Esta funcion encuentra el producto mas pedido de acuerdo con la cantidad de pedidos realizados
 async function producto_mas_pedido() {
    let pedidos = await getPedidos();
    let id_productos = [];
    let cantidad_por_producto = [];
    let i = 0;
    pedidos.forEach(pedido => {
    if (id_productos.includes(pedido.idproducto)){
      let index_prod = id_productos.indexOf(pedido.idproducto);
      cantidad_por_producto[index_prod] += parseInt(pedido.cantidad);
    }
    else {
      id_productos[i] = pedido.idproducto;
      cantidad_por_producto[i] = parseInt(pedido.cantidad);
      i += 1;
    }
  });
    // Extraer el producto más pedido
    let index_mas_pedido = cantidad_por_producto.indexOf(Math.max(...cantidad_por_producto));
    let id_mas_pedido = id_productos[index_mas_pedido];
    let nombre_mas_pedido = await nombre_producto(id_mas_pedido);
    let num_pedidos = Math.max(...cantidad_por_producto);
    let json_respuesta = {"Nombre producto": nombre_mas_pedido, "Número pedidos": num_pedidos};
    console.log(json_respuesta);
    return json_respuesta;
 }
 producto_mas_pedido();
}