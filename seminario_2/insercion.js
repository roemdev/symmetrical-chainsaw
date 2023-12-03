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

  // Inserción al principio de la lista
  insertAtBeginning(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // Si la lista está vacía, el nuevo nodo es tanto la cabeza como la cola
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Si la lista no está vacía, ajustamos los enlaces y actualizamos la cabeza
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.length++;
  }

  // Inserción al final de la lista
  insertAtEnd(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // Si la lista está vacía, el nuevo nodo es tanto la cabeza como la cola
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Si la lista no está vacía, ajustamos los enlaces y actualizamos la cola
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Inserción en una posición específica de la lista
  insertAtPosition(data, position) {
    if (position < 0 || position > this.length) {
      console.log("Posición no válida.");
      return;
    }

    if (position === 0) {
      // Si la posición es 0, insertamos al principio
      this.insertAtBeginning(data);
    } else if (position === this.length) {
      // Si la posición es la longitud, insertamos al final
      this.insertAtEnd(data);
    } else {
      // Insertamos en una posición específica
      const newNode = new Node(data);
      let current = this.head;
      let count = 0;

      while (count < position) {
        current = current.next;
        count++;
      }

      newNode.prev = current.prev;
      newNode.next = current;
      current.prev.next = newNode;
      current.prev = newNode;

      this.length++;
    }
  }

  // Método para imprimir la lista
  printList() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }
}

// Ejemplo de uso
const myList = new DoublyLinkedList();
myList.insertAtEnd(1);
myList.insertAtEnd(3);
myList.insertAtBeginning(0);
myList.insertAtPosition(2, 2);

// Imprimir la lista
myList.printList();
