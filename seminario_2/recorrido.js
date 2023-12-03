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

  // Recorrido hacia adelante
  forwardTraversal() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Recorrido hacia atrás
  backwardTraversal() {
    let current = this.tail;

    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }

  // ... (código anterior)
}

// Ejemplo de uso
const myList = new DoublyLinkedList();
myList.insertAtEnd(1);
myList.insertAtEnd(2);
myList.insertAtEnd(3);

console.log("Recorrido hacia adelante:");
myList.forwardTraversal(); // Imprime 1, 2, 3

console.log("Recorrido hacia atrás:");
myList.backwardTraversal(); // Imprime 3, 2, 1
