function findName(characteres) {
  let start = System.currentTimeMillis();
  for (let i = 0; i < characteres.length; i++) {
    if (characteres[i] === "nemo") {
      console.log("Found Nemo!");
    }
  }
  let end = currentTimeMillis();
  console.log("Time taken: " + (end - start));
}
console.log(findName(["nemo"]));
// Time taken: 0.0000000009313226


// simplificar a complexidade em js desses algoritimos 

// 1. seguir o pior caso 
// 2. remover constantes
// 3. diferentes termos para entradas diferentes
// 4. remover não dominantes


O(n + 10)
O(100 * n)
O(25)
O(n^2 + n^3)
O(n + n + n + n)
O(1000 * log(n) + n)
O(1000 * n * log(n) + n)
O(2^n + n^2)
O(5 + 3 + 1)
O(n + n^(1/2) + n^2 + n * log(n)^10)

// respostas::

O(n + 10) -->  O(n)
O(100 * n) --> O(n)
O(25) --> O(1)
O(n^2 + n^3) -->  O(n^3)
O(n + n + n + n) -->  O(n)
O(1000 * log(n) + n) --> O(n) 
O(1000 * n * log(n) + n) -->  O(n * log(n))
O(2^n + n^2) -->  O(2^n)
O(5 + 3 + 1) --> O(1)
O(n + n^(1/2) + n^2 + n * log(n)^10) --> O(n^2)

