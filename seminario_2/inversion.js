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

  // Invertir el orden de la lista
  reverseList() {
    let current = this.head;

    while (current) {
      // Intercambiar los punteros "anterior" y "siguiente" de cada nodo
      const temp = current.next;
      current.next = current.prev;
      current.prev = temp;

      // Mover al siguiente nodo
      current = temp;
    }

    // Intercambiar las referencias a la cabeza y la cola después de invertir
    const tempHead = this.head;
    this.head = this.tail;
    this.tail = tempHead;
  }

  // ... (código anterior)
}

// Ejemplo de uso
const myList = new DoublyLinkedList();
myList.insertAtEnd(1);
myList.insertAtEnd(2);
myList.insertAtEnd(3);

console.log("Lista original:");
myList.forwardTraversal(); // Imprime 1, 2, 3

myList.reverseList();

console.log("Lista invertida:");
myList.forwardTraversal(); // Imprime 3, 2, 1
