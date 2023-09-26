class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addNode(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    isPalindrome() {
      const values = [];
      let current = this.head;
  
      // Traverse the linked list and store the values in an array.
      while (current) {
        values.push(current.data);
        current = current.next;
      }
  
      // Check if the array of values is a palindrome.
      for (let i = 0; i < Math.floor(values.length / 2); i++) {
        if (values[i] !== values[values.length - 1 - i]) {
          return false;
        }
      }
  
      return true;
    }
  }
  
  // Example usage:
  const list1 = new LinkedList();
  list1.addNode(1);
  list1.addNode(2);
  list1.addNode(3);
  list1.addNode(2);
  list1.addNode(1);
  
  console.log("Is the list a palindrome?", list1.isPalindrome()); // Output: true
  
  const list2 = new LinkedList();
  list2.addNode(1);
  list2.addNode(2);
  list2.addNode(3);
  
  console.log("Is the list a palindrome?", list2.isPalindrome()); // Output: false
  