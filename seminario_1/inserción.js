function insertionSort(lista) {
  let n = lista.length;

  for (let i = 1; i < n; i++) {
    let key = lista[i];
    let j = i - 1;

    // Mover los elementos de la lista[0..i-1] que son mayores que key
    // a una posición adelante de su posición actual
    while (j >= 0 && lista[j] > key) {
      lista[j + 1] = lista[j];
      j = j - 1;
    }
    lista[j + 1] = key;
  }
}

// Ejemplo de uso
let miLista = [64, 34, 25, 12, 22, 11, 90];
console.log("Lista original:", miLista);

insertionSort(miLista);
console.log("Lista ordenada:", miLista);