function cotizarProductos() {
    // Solicitar la cantidad de productos al usuario
    const cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a cotizar:"));
  
    // Array para almacenar los productos
    const productos = [];
  
    // Función de flecha para validar el nombre del producto
    const validarNombreProducto = (nombre) => {
      const regex = /^[a-zA-Z\s]+$/;
      return regex.test(nombre);
    };
  
    // Función de flecha para pedir el nombre y precio de cada producto
    const obtenerDatosProducto = (indice) => {
      let nombreProducto = "";
      let precioProducto = 0;
  
      do {
        nombreProducto = prompt(`Ingrese el nombre del producto ${indice + 1}:`);
        if (!validarNombreProducto(nombreProducto)) {
          alert("El nombre del producto no es válido. Por favor, ingrese solo letras y espacios.");
        }
      } while (!validarNombreProducto(nombreProducto));
  
      while (isNaN(precioProducto) || precioProducto <= 0) {
        precioProducto = parseFloat(prompt(`Ingrese el precio del producto ${indice + 1}:`));
      }
  
      return { nombre: nombreProducto, precio: precioProducto };
    };
  
    // Pedir al usuario el nombre y precio de cada producto y agregarlo al array de productos
    Array.from({ length: cantidadProductos }).forEach((_, i) => {
      const producto = obtenerDatosProducto(i);
      productos.push(producto);
    });
  
    // Calcular el subtotal
    let subtotal = 0;
  
    productos.forEach((producto) => {
      subtotal += producto.precio;
    });
  
    // Calcular el impuesto (19%)
    const impuesto = subtotal * 0.19;
  
    // Calcular el total con impuesto incluido
    const total = subtotal + impuesto;
  
    // Construir la lista de productos
    let listaProductos = "";
  
    productos.forEach((producto) => {
      listaProductos += `${producto.nombre}: $${producto.precio.toFixed(2)}\n`;
    });
  
    // Mostrar el resultado en un alert
    const mensajeFinal = `Lista de productos:\n\n${listaProductos}\nSubtotal: $${subtotal.toFixed(2)}\nImpuesto (19%): $${impuesto.toFixed(2)}\nTotal: $${total.toFixed(2)}`;
    alert(mensajeFinal);
  }
  