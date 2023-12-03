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

  // Eliminación al principio de la lista
  removeFromBeginning() {
    if (!this.head) {
      console.log("La lista está vacía. No hay elementos para eliminar.");
      return;
    }

    if (this.length === 1) {
      // Si hay un solo elemento, la lista queda vacía después de la eliminación
      this.head = null;
      this.tail = null;
    } else {
      // Eliminamos el primer nodo y ajustamos los enlaces
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.length--;
  }

  // Eliminación al final de la lista
  removeFromEnd() {
    if (!this.tail) {
      console.log("La lista está vacía. No hay elementos para eliminar.");
      return;
    }

    if (this.length === 1) {
      // Si hay un solo elemento, la lista queda vacía después de la eliminación
      this.head = null;
      this.tail = null;
    } else {
      // Eliminamos el último nodo y ajustamos los enlaces
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.length--;
  }

  // Eliminación de un nodo en una posición específica de la lista
  removeFromPosition(position) {
    if (position < 0 || position >= this.length) {
      console.log("Posición no válida.");
      return;
    }

    if (position === 0) {
      // Si la posición es 0, eliminamos al principio
      this.removeFromBeginning();
    } else if (position === this.length - 1) {
      // Si la posición es la última, eliminamos al final
      this.removeFromEnd();
    } else {
      // Eliminamos en una posición específica
      let current = this.head;
      let count = 0;

      while (count < position) {
        current = current.next;
        count++;
      }

      current.prev.next = current.next;
      current.next.prev = current.prev;

      this.length--;
    }
  }

  // ... (código anterior)
}

// Ejemplo de uso
const myList = new DoublyLinkedList();
myList.insertAtEnd(1);
myList.insertAtEnd(2);
myList.insertAtEnd(3);

myList.removeFromBeginning();
myList.removeFromEnd();
myList.removeFromPosition(0);

// Imprimir la lista después de las eliminaciones
myList.printList();
ß