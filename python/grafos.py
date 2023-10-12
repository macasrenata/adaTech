# grafos 

import networkx as nx

# Grafo não direcionado
G = nx.Graph()

# Grafo direcionado
D = nx.DiGraph()

# Adicionando vértices
G.add_node(1)
G.add_nodes_from([2, 3, 4, 5, 6, 7, 8, 9, 10])

# Adicionando arestas
G.add_edge(1, 2)
G.add_edges_from([(1, 3), (1, 4), (1, 5), (1, 6), (1, 7)])

# Adicionando atributos
G.add_node(1, time='10:00')
G.add_nodes_from([2, 3, 4, 5, 6, 7, 8, 9, 10], time='10:00')

# Adicionando atributos
G.add_edge(1, 2, weight=4.7)
G.add_edges_from([(1, 3), (1, 4), (1, 5), (1, 6), (1, 7)], weight=4.7)

# Adicionando atributos
G.add_edge(1, 2, relation='friend')
G.add_edges_from([(1, 3), (1, 4), (1, 5), (1, 6), (1, 7)], relation='friend')


#Exemplo de DFS (Depth First Search)
#DFS é um algoritmo de busca em grafos utilizado para realizar uma busca ou travessia num grafo e estrutura de árvore.
#Intuitivamente, o algoritmo começa num nó raiz (selecionando algum nó como sendo o raiz, no caso de um grafo) e explora tanto quanto possível cada um dos seus ramos, antes de retroceder(backtracking).
#Quando todos os ramos tiverem sido explorados, o algoritmo retrocede ao nó que antecede o atual e reinicia a exploração a partir deste.
#Este processo é repetido até que todos os nós tenham sido visitados. Caso algum nó não tenha sido visitado o algoritmo escolhe outro nó não visitado, e repete o processo a partir deste.
#O algoritmo de busca em profundidade expande primeiro o último nó adicionado à pilha de nós a explorar.
#O algoritmo de busca em profundidade é implementado pelo uso de uma pilha de nós a explorar.


# Path with Maximum Gold - Leetcode 1219

class Solution:
    def getMaximumGold(self, grid: List[List[int]]) -> int: #funcao que recebe um grid e retorna um inteiro
        arr = [] #array de arrays
        self.mx = 0 #maximo 
        vis = set() #set de tuplas 
        for i in range(len(grid)): #percorre o grid 
            for j in range(len(grid[0])): #percorre o grid 
                if grid[i][j] > 0: #se o valor do grid for maior que 0 
                    vis.add((i,j)) #adiciona no set de tuplas 
                    self.dfs(vis,i,j,0,grid) #chama a funcao dfs 
                    vis.remove((i,j)) #remove do set de tuplas 
        return self.mx #retorna o maximo 
            





#Exemplo de BFS (Breadth First Search)
#BFS é um algoritmo de busca em grafos utilizado para realizar uma busca ou travessia num grafo e estrutura de árvore.
#Intuitivamente, você começa pelo vértice raiz e explora todos os vértices vizinhos.
#Então, para cada um desses vértices mais próximos, exploramos os seus vértices vizinhos inexplorados e assim por diante, até que ele encontre o alvo da busca.
#O algoritmo de busca em largura expande primeiro todos os vértices vizinhos do vértice raiz, depois os vizinhos dos vértices vizinhos e assim por diante.
#O algoritmo de busca em largura é implementado pelo uso de uma fila de vértices a explorar.

