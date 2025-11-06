class Stack {        //se define una clase llamada stack
  constructor() {         // El constructor inicia un arreglo vacio que almacenara cada elemento de la pila
    this.items = [];      //este arreglo lo que hace es que actua como una estructura subyacente donde guardara los datos
  }

  push(element) {                 //Agrega un nuevo elemento al tope de la pila.
    this.items.push(element);     //utiliza el método push() del arreglo para insertar el dato al final. 
  }

  pop() {                         //Elimina y retorna el último elemento agregado.
    return this.items.pop();      //utiliza el método pop() del arreglo para eliminar el ultimo elemento agregado. 
  }

  peek() {                                    
    return this.items[this.items.length - 1];   //Permite consultar el elemento superior de la pila sin eliminarlo.
  }

  isEmpty() {
    return this.items.length === 0;       //Retorna un valor booleano (T o F) indicando si la pila está vacía.
  }

  printStack() {                                                          //imprime el contenido actual de la pila en la consola
    console.log("Pila de productos:", this.items.join(" -> "));           //Se utiliza join(" -> ") para representar el orden de los elementos.
  }
}

const pilaMercado = new Stack();          //Se crea una instancia pilaMercado de la clase Stack.

pilaMercado.push("Leche");                //se agregan los productos, cada producto se apila encima del anterior
pilaMercado.push("Pan");
pilaMercado.push("Huevos");
pilaMercado.push("Arroz");

console.log(" Productos en la pila (último en entrar):");
pilaMercado.printStack();

const devuelto = pilaMercado.pop();                    // se utiliza el metodo pop para eliminar el ultimo producto agregado 
console.log(`\n Se sacó de la pila: ${devuelto}`);

console.log("\n Pila actualizada:");
pilaMercado.printStack();

console.log(`\n Producto en la cima de la pila: ${pilaMercado.peek()}`);
