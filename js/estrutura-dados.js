class List {
  constructor() {
    this.data = [];
    this.length = 0;
  }
  
 
  // adicionar um elemento
  // O(n)
  addElement(element) {
    this.data[this.length] = element;
    this.length++;
  }


   // acessar um elemento
  // O(1)
  accessElement(index) {
    return this.data[index];
  }


   // pesquisar um elemento
  // O(n)
  searchElement(element) {
    for (let i = 0; i < this.length; i++) {
      if (this.data[i] === element) {
        return i;
      }
    }
    return -1;
  }


  // remover um elemento
  // O(n)
  removeElement(index) {
    for (let i = index; i < this.length; i++) {
      this.data[i] = this.data[i + 1];
    }
    this.length--;
  }

 

  // Exemplo de método para imprimir a lista
  printList() {
    console.log('imprimir lista', this.data.slice(0, this.length));
  }
}
// Criar uma instância da classe List
const myList = new List([], 0);

// Usar os métodos da classe List
myList.addElement(10);
myList.addElement(20);
myList.addElement(30);

console.log("Element at index 1:", myList.accessElement(0));
console.log("Search for element 20:", myList.searchElement(20));

// Remover o elemento no índice 0
myList.removeElement(0);

console.log("Updated list:");
myList.printList();

// operações comuns em listas 

// linked list
// https://www.youtube.com/watch?v=njTh_OwMljA

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    }

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }
    }

const node1 = new Node(2)
const node2 = new Node(5)
const node3 = new Node(7)

node1.next = node2
node2.next = node3

const list = new LinkedList(node1)
console.log(list)

// inserir um elemento no inicio da lista
// O(1)
LinkedList.prototype.insertAtBeginning = function(value) {
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    return this.head;
  }

// inserir um elemento no final da lista
// O(n)
LinkedList.prototype.insertAtEnd = function(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      return this.head;
    }
    let tail = this.head;
    while (tail.next !== null) {
      tail = tail.next;
    }
    tail.next = newNode;
    return this.head;
  }

// inserir um elemento em uma posição especifica da lista
// O(n)
LinkedList.prototype.insertAt = function(value, index) {
    if (index === 0) {
      this.head = new Node(value, this.head);
      return;
    }
    const previous = this.getAt(index - 1);
    let newNode = new Node(value);
    newNode.next = previous.next;
    previous.next = newNode;
  
    return this.head
  }

// remover um elemento no inicio da lista
// O(1)
LinkedList.prototype.removeFirstNode = function() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
    return this.head;
  }

// travessia da lista 
// O(n)
LinkedList.prototype.traverse = function() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

// pesquisar um elemento
// O(n)

LinkedList.prototype.search = function(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

// remover um elemento no final da lista
// O(n)

LinkedList.prototype.removeLastNode = function() {
    if (!this.head) {
      return null;
    }
    if (!this.head.next) {
      this.head = null;
      return;
    }
    let previous = this.head;
    let tail = this.head.next;
  
    while (tail.next !== null) {
      previous = tail;
      tail = tail.next;
    }
  
    previous.next = null;
    return this.head;
  }
  
