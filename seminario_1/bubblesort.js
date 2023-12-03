function bubbleSort(lista) {
  let n = lista.length;

  // Repetir n veces para asegurar que la lista esté ordenada
  for (let i = 0; i < n; i++) {

    // Últimos elementos i ya están ordenados, no es necesario verificarlos
    for (let j = 0; j < n - i - 1; j++) {

      // Comparar elementos adyacentes
      if (lista[j] > lista[j + 1]) {

        // Intercambiar elementos si están en el orden incorrecto
        let temp = lista[j];
        lista[j] = lista[j + 1];
        lista[j + 1] = temp;
      }
    }
  }
}

// Ejemplo de uso
let miLista = [64, 34, 25, 12, 22, 11, 90];
console.log("Lista original:", miLista);

bubbleSort(miLista);
console.log("Lista ordenada:", miLista);
