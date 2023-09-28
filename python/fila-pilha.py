# two sum problem - https://leetcode.com/problems/two-sum/ 
# linked list pilha e fila - https://www.youtube.com/watch?v=ZwJfIDYv0Ik 

class ListNode:
    def __init__(self, value):
        self.value = value  # Cria um nó com um valor
        self.next = None    # Inicializa o próximo nó como None

def find_two_sum(head, target):
    num_set = set()        # Cria um conjunto para rastrear os números
    current = head         # Inicializa um ponteiro para o nó atual

    while current is not None:  # Enquanto não chegarmos ao final da lista encadeada
        complement = target - current.value  # Calcula o complemento necessário
        if complement in num_set:            # Se o complemento estiver no conjunto
            return [complement, current.value]  # Encontramos um par que soma ao alvo
        num_set.add(current.value)           # Adiciona o valor atual ao conjunto
        current = current.next              # Move para o próximo nó

    return None  # Se nenhum par for encontrado, retornamos None

# Exemplo de uso:
# Crie uma lista encadeada: 1 -> 2 -> 3 -> 4 -> 5
head = ListNode(1)
head.next = ListNode(2)
head.next.next = ListNode(3)
head.next.next.next = ListNode(4)
head.next.next.next.next = ListNode(5)

alvo = 9

resultado = find_two_sum(head, alvo)

if resultado:
    print(f"Os números {resultado[0]} e {resultado[1]} na lista encadeada somam {alvo}.")
else:
    print("Não foi encontrado um par que some ao alvo.")