class Aduana{
    empresas = [];
    constructor(){
    }
    setEmpresas(empresas){
        this.empresas.push(empresas);
    }
    getEmpresas(){
        return this.empresas;
    }
    // checkEmpresa(id_registro_empresa){
    //     //validacion de existencia de empresa en la lista
    // }
}
class Empresa{
    importaciones = [];
    constructor(id_registro, nombre, rut){
        this.id_registro = id_registro;
        this.nombre = nombre;
        this.rut = rut;
    }
    setImportaciones(importacion){
        this.importaciones.push(importacion);
    }
    getImportaciones(){
        return this.importaciones;
    }
}
class EmpresaCategoria extends Empresa{
    importaciones = [];
    constructor(id_registro, nombre, rut, rubro, tamanio){
        super(id_registro,nombre,rut);
        this.rubro = rubro;
        this.tamanio = tamanio;
        
    }
    setImportaciones(importacion){
        this.importaciones.push(importacion);
    }
    getImportaciones(){
        return this.importaciones;
    }
} 
class Importacion{
    productos = [];
    constructor(id_importacion){
        this.id_importacion = id_importacion;
    }
    setProductos(producto){
        console.log('set productos');
        this.productos.push(producto);
    }
    getProductos(){
        return this.productos;
    }
    sumaValorProductos(){
        let suma_total = 0;
        this.productos.forEach(producto => {
            suma_total = suma_total + producto.precio;
        });
        return suma_total;
    }
}

 class Producto{
    constructor(nombre,cantidad,precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.precio = precio;
    }
 }

 const registrar_empresa = document.getElementById('registrar_empresa');
 const agregar_producto = document.getElementById('agregar_producto');
const aduana = new Aduana();

 registrar_empresa.addEventListener('click', function(){
    registrarEmpresa();
 });
 agregar_producto.addEventListener('click', function(){
    //importacion
    const id_importacion = document.getElementById('id_importacion');
    const id_registro_empresa = document.getElementById('id_registro_empresa');
    const nombre_producto = document.getElementById('nombre_producto');
    const cantidad_producto = document.getElementById('cantidad_producto');
    const precio_producto = document.getElementById('precio_producto');

    const lista_empresas = aduana.getEmpresas();
    const empresa_encontrada = lista_empresas.find(empresa => empresa.id_registro == id_registro_empresa.value);
   
    if(empresa_encontrada != undefined){
        console.log('empresa', empresa_encontrada);
       const lista_importaciones = empresa_encontrada.getImportaciones();
       const importacion_encontrada = lista_importaciones.find(importacion => importacion.id_importacion == id_importacion.value)
       if(importacion_encontrada != undefined){
        const nuevo_producto = new Producto(nombre_producto.value, cantidad_producto.value, precio_producto.value);
        importacion_encontrada.setProductos(nuevo_producto);
       }else{
        const nueva_importacion = new Importacion(id_importacion.value);
        const nuevo_producto = new Producto(nombre_producto.value, cantidad_producto.value, precio_producto.value);
        nueva_importacion.setProductos(nuevo_producto);
       }
    }else{
        console.log('no encuentra empresa');
        // generar nueva empresa
    }
    console.log('aduana', aduana);
 });

 const registrarEmpresa = ()=>{
    //empresa
    const nombre_empresa = document.getElementById('nombre_empresa');
    const id_registro_empresa = document.getElementById('id_registro_empresa');
    const rut_empresa = document.getElementById('rut_empresa');
    const rubro_importacion = document.getElementById('seleccion_rubro');
    const tamanio_importacion = document.getElementById('seleccion_tamanio');
    const empresaCa = new EmpresaCategoria(id_registro_empresa.value,nombre_empresa.value, rut_empresa.value, rubro_importacion.value, tamanio_importacion.value);
    aduana.setEmpresas(empresaCa);
    console.log('empresa ca: ', empresaCa);
 }

 
 const registrarImportacion = ()=>{
    
 }

 const obtenerValores = () =>{
    
   
    
    
    
   
    
    nueva_empresa.setImportaciones(nueva_importacion);

    console.log('empresa: ', nueva_empresa);
    console.log('importacion: ', nueva_importacion);
    console.log('producto: ', nuevo_producto);


 };
//  const producto1 = new Producto('Producto 1', 10, 1000);
//  const producto2 = new Producto('Producto 2', 10, 2000);
//  const lista_productos = [producto1, producto2];
//  console.log('lista productos: ', lista_productos);