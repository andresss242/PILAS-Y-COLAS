class Queue {             //Se define una clase llamada Queue que almacena el comportamiento de la cola 
  constructor() {         //El constructor se inicializa un arreglo vacio items donde almacena los elementos 
    this.items = [];
  }

  enqueue(element) {                   //inserta un nuevo elemento final de la cola 
    this.items.push(element);          // utiliza el mismo metodo push, para agregar el elemento final a la lista 
  }

  dequeue() {                           //elimina y devuelve el primer elemento del arreglo
    return this.items.shift();          // usa el metodo shift para eliminar el primer elemento de un arreglo 
  }

  front() {                             
    return this.items[0];               //Permite consultar el elemento que está al frente de la cola sin eliminarlo
  }

  isEmpty() {
    return this.items.length === 0;       //Retorna true si la cola está vacía, o false en caso contrario.
  }

  printQueue() {
    console.log("Cola de atención:", this.items.join(" -> "));        //Se utiliza join(" -> ") para representar el orden de atención.
  }
}

const colaBanco = new Queue();                          //Se crea una instancia llamada colaBanco.

colaBanco.enqueue("Cliente 1 - Retiro");
colaBanco.enqueue("Cliente 2 - Depósito");                  //se agregan los clientes con enqueue
colaBanco.enqueue("Cliente 3 - Apertura de cuenta");

console.log("Clientes esperando:");
colaBanco.printQueue();

const atendido = colaBanco.dequeue();                      //el metodo dequeue atiende al primer cliente y es eliminado de la cola 
console.log(`\n Se atendió a: ${atendido}`);

console.log("\n Estado actual de la cola:");
colaBanco.printQueue();

console.log(`\n Siguiente en ser atendido: ${colaBanco.front()}`);    //muestra quien es el siguiente en ser atendido

