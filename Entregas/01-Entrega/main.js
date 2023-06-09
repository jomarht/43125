function cotizarProductos() {
    // Solicitar la cantidad de productos al usuario
    const cantidadProductos = parseInt(prompt("Ingrese la cantidad de productos a cotizar:"));
  
    // Función de flecha para pedir el nombre del producto
    const obtenerNombreProducto = (indice) => {
      return prompt(`Ingrese el nombre del producto ${indice + 1}:`);
    };
  
    // Función de flecha para pedir el precio del producto
    const obtenerPrecioProducto = (indice) => {
      return parseFloat(prompt(`Ingrese el precio del producto ${indice + 1}:`));
    };
  
    // Variables para almacenar el precio total
    let precioTotal = 0;
  
    // Pedir al usuario el nombre y precio de cada producto y calcular el precio total
    for (let i = 0; i < cantidadProductos; i++) {
      const nombreProducto = obtenerNombreProducto(i);
      const precioProducto = obtenerPrecioProducto(i);
  
      // Sumar el precio al total
      precioTotal += precioProducto;
    }
  
    // Mostrar el resultado en un alert
    alert(`El precio total de los productos es: $${precioTotal.toFixed(2)}`);
  }
  