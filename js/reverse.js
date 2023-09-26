/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    let prev = null   // variavel para iniciar a lista vazia
    let current = head  // variavel para armazenar o head (primeiro nó)
    
    while (current != null)  { // enquanto percorro a lista verifico se é diferente de nulo
      
      // quando for nulo ele vai parar 
      // o primeiro valor do head por exemplo  1 e guarda outro valor para proximo 
      // garantir que o no que vai entrado tenha no seu Next o nó atual(que ja esta)
      // retorno seria a lista revertida
    
      const next = current.next; // crio uma variavel para percorrer a lista 
      current.next = prev // pegando o primeiro da lista e deixando o prev no final
      prev = current // comparação do primeiro e do ultimo(proximo)
      current = next // inverto a lista 
    }
    return prev // retornar a lista invertida
    }

    console.log(reverseList([1,2,3,4,5]))
    console.log(reverseList([1,2]))
    console.log(reverseList([]))