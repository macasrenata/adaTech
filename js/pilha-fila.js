// pilha : queue
// exemplo: desfazer/refazer, navegação, ctrl+z, ctrl+y
// performance : O(1)

// fila: push, pop
// exemplo: mensageria, fila de banco, fila de impressão 
// performance: O(1)

class ListNode {
    constructor(value) {
        this.value = value;  // Cria um nó com um valor
        this.next = null;   // Inicializa o próximo nó como null
    }
}

function findTwoSum(head, target) {
    const numSet = new Set();   // Cria um conjunto para rastrear os números
    let current = head;         // Inicializa um ponteiro para o nó atual

    while (current !== null) {   // Enquanto não chegarmos ao final da lista encadeada
        const complement = target - current.value;  // Calcula o complemento necessário
        if (numSet.has(complement)) {               // Se o complemento estiver no conjunto
            return [complement, current.value];     // Encontramos um par que soma ao alvo
        }
        numSet.add(current.value);  // Adiciona o valor atual ao conjunto
        current = current.next;     // Move para o próximo nó
    }

    return null;  // Se nenhum par for encontrado, retornamos null
}

// Exemplo de uso:
// Crie uma lista encadeada: 1 -> 2 -> 3 -> 4 -> 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const alvo = 9;

const resultado = findTwoSum(head, alvo);

if (resultado) {
    console.log(`Os números ${resultado[0]} e ${resultado[1]} na lista encadeada somam ${alvo}.`);
} else {
    console.log("Não foi encontrado um par que some ao alvo.");
}
