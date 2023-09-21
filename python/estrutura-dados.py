#  lista encadeada simples

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None



class LinkedList:
    def __init__(self):
        self.head = None
        self.length = 0

# operações de inserção

def traverse(self):
    # Começando no início da lista
    current = self.head

    # Enquanto current for válido
    while current:

        # Processando o dado atual
        do_something(current.data)

        # Atualizando current para o próximo elemento da lista
        current = current.next
        
def do_something(data):
    # Replace this with your own function or operation
    print(data)
