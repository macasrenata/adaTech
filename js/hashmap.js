// Definindo um objeto de livros e seus gêneros
const books = {
    "O Senhor dos Anéis": "Fantasia",
    "1984": "Ficção Científica",
    "Orgulho e Preconceito": "Romance"
};

// Buscando o gênero de um livro específico
const bookTitle = "1984";
const genre = books[bookTitle];
if (genre) {
    console.log(`O livro '${bookTitle}' pertence ao gênero: ${genre}`);
} else {
    console.log(`O livro '${bookTitle}' não foi encontrado.`);
}


// colisões de hash

class HashTableWithChaining {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill([]); // Inicializando a tabela hash com listas vazias.
    }

    hash(key) {
        return Math.abs(hashCode(key) % this.size);
    }

    set(key, value) {
        const hashIndex = this.hash(key);

        for (const pair of this.table[hashIndex]) {
            if (pair[0] === key) {
                pair[1] = value;
                return;
            }
        }

        this.table[hashIndex].push([key, value]);
    }

    get(key) {
        const hashIndex = this.hash(key);

        for (const pair of this.table[hashIndex]) {
            if (pair[0] === key) {
                return pair[1];
            }
        }

        return null;
    }
}

// Função de hash personalizada para JavaScript
function hashCode(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
        h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    }
    return h;
}

// Exemplo de uso
const hashTable = new HashTableWithChaining(10);
hashTable.set("chave1", "valor1");
hashTable.set("chave2", "valor2");
console.log(hashTable.get("chave1"));  // Saída: "valor1"
console.log(hashTable.get("chave2"));  // Saída: "valor2"


// endereço aberto 

class HashTableWithOpenAddressing {
    constructor(size) {
        this.size = size;
        this.table = new Array(size).fill(null);
    }

    hash(key) {
        return Math.abs(hashCode(key) % this.size);
    }

    set(key, value) {
        const hashIndex = this.hash(key);
        let originalIndex = hashIndex;

        while (this.table[hashIndex] !== null) {
            if (this.table[hashIndex].getKey() === key) {
                this.table[hashIndex].setValue(value);
                return;
            }
            hashIndex = (hashIndex + 1) % this.size;

            if (hashIndex === originalIndex) {
                throw new Error("Tabela Hash cheia!");
            }
        }

        this.table[hashIndex] = new Pair(key, value);
    }

    get(key) {
        const hashIndex = this.hash(key);
        let originalIndex = hashIndex;

        while (this.table[hashIndex] !== null) {
            if (this.table[hashIndex].getKey() === key) {
                return this.table[hashIndex].getValue();
            }
            hashIndex = (hashIndex + 1) % this.size;

            if (hashIndex === originalIndex) {
                return null;
            }
        }

        return null;
    }
}

class Pair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }

    getKey() {
        return this.key;
    }

    getValue() {
        return this.value;
    }

    setValue(value) {
        this.value = value;
    }
}

// Função de hash personalizada para JavaScript
function hashCode(s) {
    let h = 0;
    for (let i = 0; i < s.length; i++) {
        h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
    }
    return h;
}

// Exemplo de uso
// const hashTable = new HashTableWithOpenAddressing(10);
hashTable.set("chave1", "valor1");
hashTable.set("chave2", "valor2");
console.log(hashTable.get("chave1"));  // Saída: "valor1"
console.log(hashTable.get("chave2"));  // Saída: "valor2"



// two sum 

function twoSum(nums, target) {
    // Crie um objeto para atuar como uma tabela hash.
    const numMap = {};

    // Percorra o array de números.
    for (let i = 0; i < nums.length; i++) {
        const currentNum = nums[i];
        const complement = target - currentNum;

        // Verifique se o complemento já existe na tabela hash.
        // Se existir, significa que encontramos uma combinação que soma ao alvo.
        if (numMap[complement] !== undefined) {
            // Retorne os índices dos dois números que somam ao alvo.
            return [numMap[complement], i];
        }

        // Caso contrário, armazene o número atual na tabela hash
        // com a chave sendo o próprio número e o valor sendo o índice.
        numMap[currentNum] = i;
    }

    // Se não houver uma combinação válida, retorne null ou uma mensagem de erro, dependendo dos requisitos.
    return null;
}

// Exemplo de uso:
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target); // Deve retornar [0, 1] (índices dos números 2 e 7)
console.log(result);



// Classe HashMap
class HashMap {
    constructor() {
        // Inicializa um objeto vazio para armazenar os pares chave-valor.
        this.map = {};
    }

    // Método para adicionar um par chave-valor ao HashMap.
    put(key, value) {
        // Define o valor associado à chave no objeto map.
        this.map[key] = value;
    }

    // Método para recuperar o valor associado a uma chave específica.
    get(key) {
        // Verifica se a chave existe no mapa e a retorna.
        // Se a chave não existir, retorna undefined.
        return this.map[key];
    }

    // Método para verificar se o HashMap contém uma chave específica.
    containsKey(key) {
        // Verifica se a chave existe no mapa.
        return this.map.hasOwnProperty(key);
    }

    // Método para remover um par chave-valor do HashMap com base na chave.
    remove(key) {
        // Verifica se a chave existe antes de tentar removê-la.
        if (this.containsKey(key)) {
            delete this.map[key];
        }
    }

    // Método para obter todas as chaves do HashMap.
    keys() {
        // Retorna um array das chaves do objeto map.
        return Object.keys(this.map);
    }

    // Método para obter todos os valores do HashMap.
    values() {
        // Retorna um array dos valores do objeto map.
        return Object.values(this.map);
    }

    // Método para verificar se o HashMap está vazio.
    isEmpty() {
        // Retorna true se o objeto map estiver vazio, caso contrário, retorna false.
        return Object.keys(this.map).length === 0;
    }

    // Método para obter o tamanho do HashMap.
    size() {
        // Retorna o número de pares chave-valor no objeto map.
        return Object.keys(this.map).length;
    }
}

// Exemplo de uso:
const myHashMap = new HashMap();

// Adiciona pares chave-valor ao HashMap.
myHashMap.put("chave1", "valor1");
myHashMap.put("chave2", "valor2");

// Recupera valores com base nas chaves.
console.log(myHashMap.get("chave1")); // Saída: "valor1"
console.log(myHashMap.get("chave2")); // Saída: "valor2"

// Verifica se o HashMap contém uma chave específica.
console.log(myHashMap.containsKey("chave1")); // Saída: true
console.log(myHashMap.containsKey("chave3")); // Saída: false

// Remove um par chave-valor com base na chave.
myHashMap.remove("chave1");

// Obtém todas as chaves e valores do HashMap.
console.log(myHashMap.keys());   // Saída: ["chave2"]
console.log(myHashMap.values()); // Saída: ["valor2"]

// Verifica se o HashMap está vazio e obtém seu tamanho.
console.log(myHashMap.isEmpty()); // Saída: false
console.log(myHashMap.size());   // Saída: 1
