// Clase Nodo: representa cada elemento del árbol
class Nodo {
  constructor(valor) {
    this.valor = valor;      // Dato que guarda el nodo
    this.izquierdo = null;   // Referencia al hijo izquierdo
    this.derecho = null;     // Referencia al hijo derecho
  }
}

// Clase ArbolBinario: define las operaciones principales del árbol
class ArbolBinario {
  constructor() {
    this.raiz = null;  // El árbol comienza vacío
  }

  //Insertar un nuevo valor en el árbol (de forma recursiva)
  insertar(valor) {
    const nuevoNodo = new Nodo(valor);
    if (this.raiz === null) {
      this.raiz = nuevoNodo; // Si el árbol está vacío, el nuevo nodo es la raíz
    } else {
      this._insertarRec(this.raiz, nuevoNodo);
    }
  }

  _insertarRec(nodo, nuevoNodo) {
    // Si el valor es menor, va al lado izquierdo
    if (nuevoNodo.valor < nodo.valor) {
      if (nodo.izquierdo === null) nodo.izquierdo = nuevoNodo;
      else this._insertarRec(nodo.izquierdo, nuevoNodo);
    }
    // Si es mayor, va al lado derecho
    else {
      if (nodo.derecho === null) nodo.derecho = nuevoNodo;
      else this._insertarRec(nodo.derecho, nuevoNodo);
    }
  }

  // 👀 Recorrido en orden (izquierdo → raíz → derecho)
  inOrden(nodo = this.raiz) {
    if (nodo !== null) {
      this.inOrden(nodo.izquierdo);
      console.log(nodo.valor);
      this.inOrden(nodo.derecho);
    }
  }

  //Recorrido preorden (raíz → izquierdo → derecho)
  preOrden(nodo = this.raiz) {
    if (nodo !== null) {
      console.log(nodo.valor);
      this.preOrden(nodo.izquierdo);
      this.preOrden(nodo.derecho);
    }
  }

  //Recorrido postorden (izquierdo → derecho → raíz)
  postOrden(nodo = this.raiz) {
    if (nodo !== null) {
      this.postOrden(nodo.izquierdo);
      this.postOrden(nodo.derecho);
      console.log(nodo.valor);
    }
  }
}

// Ejemplo de uso
const arbol = new ArbolBinario();

// Insertamos algunos valores
arbol.insertar(50);
arbol.insertar(30);
arbol.insertar(70);
arbol.insertar(20);
arbol.insertar(40);
arbol.insertar(60);
arbol.insertar(80);

// Mostramos recorridos
console.log("Recorrido en orden (izq → raíz → der):");
arbol.inOrden();

console.log("\nRecorrido en preorden (raíz → izq → der):");
arbol.preOrden();

console.log("\nRecorrido en postorden (izq → der → raíz):");
arbol.postOrden();
