function quickSort(lista) {
  if (lista.length <= 1) {
    return lista; // La lista ya está ordenada si tiene 0 o 1 elemento
  }

  const pivot = lista[0];
  const menores = [];
  const mayores = [];

  for (let i = 1; i < lista.length; i++) {
    if (lista[i] < pivot) {
      menores.push(lista[i]);
    } else {
      mayores.push(lista[i]);
    }
  }

  // Llamadas recursivas para ordenar las sublistas
  return quickSort(menores).concat(pivot, quickSort(mayores));
}

// Ejemplo de uso
let miLista = [64, 34, 25, 12, 22, 11, 90];
console.log("Lista original:", miLista);

miLista = quickSort(miLista);
console.log("Lista ordenada:", miLista);
