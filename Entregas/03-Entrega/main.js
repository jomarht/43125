// Obtener referencias a los elementos del DOM
const clienteForm = document.getElementById('formCliente');
const productoForm = document.getElementById('producto-form');
const productosTable = document.getElementById('productos-table');
const productosList = document.getElementById('productos-list');
const subtotalElement = document.getElementById('subtotal');
const impuestoElement = document.getElementById('impuesto');
const totalElement = document.getElementById('total');
const guardarCotiBtn = document.getElementById('guardar-btn');

// Variable para almacenar los datos del cliente
let datosCliente = {};

// Variable para almacenar las cotizacion
let cotizacion = [];

// Manejar el evento de envío del formulario del cliente
clienteForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const dni = document.getElementById('dni').value;
  const telefono = document.getElementById('telefono').value;
  const nroCoti = document.getElementById('nroCoti').value;

  // Guardar los datos del cliente
  datosCliente = { nombre, dni, telefono, nroCoti };

  // Limpiar los campos del formulario del cliente
 /*  clienteForm.reset(); */
});

// Manejar el evento de envío del formulario del producto
productoForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombreProducto = document.getElementById('nombre-producto').value;
  const cantidad = document.getElementById('cantidad').value;
  const precio = document.getElementById('precio').value;

  // Validar los campos del formulario de productos
  if (nombreProducto.trim() === '' || cantidad.trim() === '' || precio.trim() === '') {
    Swal.fire('Error', 'Por favor, complete todos los campos del formulario de productos.', 'error');
    return;
  }

  // Verificar que la cantidad y el precio sean valores numéricos
  if (isNaN(parseFloat(cantidad)) || isNaN(parseFloat(precio))) {
    Swal.fire('Error', 'La cantidad y el precio deben ser valores numéricos.', 'error');
    return;
  }

  // Crear un objeto de producto
  const producto = { nombre: nombreProducto, cantidad, precio };

  // Obtener la lista de productos
  let productos = obtenerProductosDesdeLocalStorage();

  // Agregar el nuevo producto a la lista
  productos.push(producto);

  // Guardar la lista de productos actualizada en LocalStorage
  guardarProductosEnLocalStorage(productos);

  // Limpiar los campos del formulario del producto
  productoForm.reset();

  // Actualizar el listado de productos
  actualizarListadoProductos();
});

// Manejar el evento de clic en el botón "Guardar Coti"
guardarCotiBtn.addEventListener('click', () => {

    const nombre = document.getElementById('nombre').value;
    const dni = document.getElementById('dni').value;
    const telefono = document.getElementById('telefono').value;
    const nroCoti = document.getElementById('nroCoti').value;
  
    // Guardar los datos del cliente
    datosCliente = { nombre, dni, telefono, nroCoti};

  // Verificar si hay datos de cliente y si se ha agregado al menos un producto
  if (datosCliente && productosList.childElementCount > 0) {
    // Crear un objeto de Coti
    const Coti = {
      cliente: datosCliente,
      productos: obtenerProductosDesdeLocalStorage()
    };

    // Agregar la Coti al arreglo de cotizacion
    cotizacion.push(Coti);
    
    // Guardar el arreglo de cotizacion en LocalStorage
    guardarcotizacionEnLocalStorage(cotizacion);
    
    // Limpiar los datos de cliente y productos
    datosCliente = {};
    localStorage.removeItem('productos');

    // Actualizar el listado de productos
    actualizarListadoProductos();

    // Mostrar una notificación de éxito usando SweetAlert2
    Swal.fire('cotizacion Guardada', 'La Cotizacion ha sido guardada exitosamente.', 'success');

    // Mostrar las cotizacion en la consola
    console.log(cotizacion);
  }
  formCliente.reset();
});

// Función para obtener la lista de productos desde LocalStorage
function obtenerProductosDesdeLocalStorage() {
  let productos = localStorage.getItem('productos');
  productos = productos ? JSON.parse(productos) : [];
  return productos;
}

// Función para guardar la lista de productos en LocalStorage
function guardarProductosEnLocalStorage(productos) {
  localStorage.setItem('productos', JSON.stringify(productos));
}

// Función para guardar el arreglo de cotizacion en LocalStorage
function guardarcotizacionEnLocalStorage(cotizacion) {
  localStorage.setItem('cotizacion', JSON.stringify(cotizacion));
}

// Función para actualizar el listado de productos en la tabla
function actualizarListadoProductos() {
  // Obtener la lista de productos desde LocalStorage
  let productos = obtenerProductosDesdeLocalStorage();

  // Limpiar el contenido de la tabla
  productosList.innerHTML = '';

  // Recorrer la lista de productos y crear las filas de la tabla
  productos.forEach((producto, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${producto.nombre}</td>
      <td>${producto.cantidad}</td>
      <td>${producto.precio}</td>
      <td>
        <button class="btn btn-danger btn-sm" onclick="eliminarProducto(${index})">Eliminar</button>
      </td>
    `;
    productosList.appendChild(row);
  });

  // Calcular el subtotal, impuesto y total
  const subtotal = productos.reduce((acc, producto) => acc + producto.cantidad * producto.precio, 0);
  const impuesto = subtotal * 0.19;
  const total = subtotal + impuesto;

  // Actualizar los elementos correspondientes en la tabla
  subtotalElement.textContent = subtotal.toFixed(2);
  impuestoElement.textContent = impuesto.toFixed(2);
  totalElement.textContent = total.toFixed(2);
}

// Función para eliminar un producto de la lista
function eliminarProducto(index) {
  // Obtener la lista de productos desde LocalStorage
  let productos = obtenerProductosDesdeLocalStorage();

  // Eliminar el producto en el índice especificado
  productos.splice(index, 1);

  // Guardar la lista de productos actualizada en LocalStorage
  guardarProductosEnLocalStorage(productos);

  // Actualizar el listado de productos
  actualizarListadoProductos();
}

// Cargar los datos del cliente y los productos al cargar la página
window.addEventListener('load', () => {
  // Obtener los datos del cliente desde LocalStorage
  const cliente = localStorage.getItem('cliente');
  if (cliente) {
    datosCliente = JSON.parse(cliente);
    document.getElementById('nombre').value = datosCliente.nombre;
    document.getElementById('dni').value = datosCliente.dni;
    document.getElementById('telefono').value = datosCliente.telefono;
    document.getElementById('nroCoti').value = datosCliente.nroCoti;
  }

  // Obtener las cotizacion desde LocalStorage
  const cotizacionStorage = localStorage.getItem('cotizacion');
  cotizacion = cotizacionStorage ? JSON.parse(cotizacionStorage) : [];

  // Actualizar el listado de productos
  actualizarListadoProductos();
});
