function selectionSort(lista) {
  let n = lista.length;

  // Iterar a través de todos los elementos de la lista
  for (let i = 0; i < n - 1; i++) {

    // Encontrar el elemento mínimo en la parte no ordenada
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (lista[j] < lista[minIndex]) {
        minIndex = j;
      }
    }

    // Intercambiar el elemento mínimo con el primer elemento no ordenado
    let temp = lista[minIndex];
    lista[minIndex] = lista[i];
    lista[i] = temp;
  }
}

// Ejemplo de uso
let miLista = [64, 34, 25, 12, 22, 11, 90];
console.log("Lista original:", miLista);

selectionSort(miLista);
console.log("Lista ordenada:", miLista);