// Clase para representar un nodo de la lista doblemente enlazada
class Node {
  constructor(data) {
    this.data = data;
    this.prev = null; // Enlace al nodo anterior
    this.next = null; // Enlace al nodo siguiente
  }
}

// Clase para representar la lista doblemente enlazada
class DoublyLinkedList {
  constructor() {
    this.head = null; // Puntero al primer nodo
    this.tail = null; // Puntero al último nodo
    this.length = 0;  // Longitud de la lista
  }

  // ... (código anterior)

  // Obtener el tamaño de la lista
  getSize() {
    return this.length;
  }

  // ... (código anterior)
}

// Ejemplo de uso
const myList = new DoublyLinkedList();
myList.insertAtEnd(1);
myList.insertAtEnd(2);
myList.insertAtEnd(3);

const size = myList.getSize();
console.log(`Tamaño de la lista: ${size}`); // Imprime "Tamaño de la lista: 3"
