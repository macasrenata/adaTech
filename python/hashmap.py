# Definindo um dicionário de livros e seus gêneros
books = {
    "O Senhor dos Anéis": "Fantasia",
    "1984": "Ficção Científica",
    "Orgulho e Preconceito": "Romance"
}

# Buscando o gênero de um livro específico
book_title = "1984"
genre = books.get(book_title)
if genre:
    print(f"O livro '{book_title}' pertence ao gênero: {genre}")
else:
    print(f"O livro '{book_title}' não foi encontrado.")


# colisões de hash

class HashTableWithChaining:
    def __init__(self, size):
        self.size = size
        self.table = [[] for _ in range(size)]

    def hash(self, key):
        return hash(key) % self.size

    def set(self, key, value):
        hash_index = self.hash(key)

        for pair in self.table[hash_index]:
            if pair[0] == key:
                pair[1] = value
                return

        self.table[hash_index].append([key, value])

    def get(self, key):
        hash_index = self.hash(key)

        for pair in self.table[hash_index]:
            if pair[0] == key:
                return pair[1]

        return None

# Exemplo de uso
hash_table = HashTableWithChaining(10)
hash_table.set("chave1", "valor1")
hash_table.set("chave2", "valor2")
print(hash_table.get("chave1"))  # Saída: "valor1"
print(hash_table.get("chave2"))  # Saída: "valor2"


# endereço aberto (open addressing)

class HashTableWithOpenAddressing:
    def __init__(self, size):
        self.size = size
        self.table = [None] * size

    def hash(self, key):
        return hash(key) % self.size

    def set(self, key, value):
        hash_index = self.hash(key)
        original_index = hash_index

        while self.table[hash_index] is not None:
            if self.table[hash_index].get_key() == key:
                self.table[hash_index].set_value(value)
                return
            hash_index = (hash_index + 1) % self.size

            if hash_index == original_index:
                raise Exception("Tabela Hash cheia!")

        self.table[hash_index] = Pair(key, value)

    def get(self, key):
        hash_index = self.hash(key)
        original_index = hash_index

        while self.table[hash_index] is not None:
            if self.table[hash_index].get_key() == key:
                return self.table[hash_index].get_value()
            hash_index = (hash_index + 1) % self.size

            if hash_index == original_index:
                return None

        return None

class Pair:
    def __init__(self, key, value):
        self.key = key
        self.value = value

    def get_key(self):
        return self.key

    def get_value(self):
        return self.value

    def set_value(self, value):
        self.value = value

# Exemplo de uso
hash_table = HashTableWithOpenAddressing(10)
hash_table.set("chave1", "valor1")
hash_table.set("chave2", "valor2")
print(hash_table.get("chave1"))  # Saída: "valor1"
print(hash_table.get("chave2"))  # Saída: "valor2"
