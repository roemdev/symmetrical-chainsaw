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

  // Búsqueda de un elemento específico en la lista
  searchElement(value) {
    let current = this.head;

    while (current) {
      if (current.data === value) {
        console.log(`Elemento ${value} encontrado en la lista.`);
        return true;
      }
      current = current.next;
    }

    console.log(`Elemento ${value} no encontrado en la lista.`);
    return false;
  }

  // ... (código anterior)
}

// Ejemplo de uso
const myList = new DoublyLinkedList();
myList.insertAtEnd(1);
myList.insertAtEnd(2);
myList.insertAtEnd(3);

myList.searchElement(2); // Devuelve "Elemento 2 encontrado en la lista."
myList.searchElement(4); // Devuelve "Elemento 4 no encontrado en la lista."
