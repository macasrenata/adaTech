// two sum 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    const numToIndex = new Map(); // Um mapa para armazenar números e seus índices

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        
        // Se o complemento estiver no mapa, retornar os índices
        if (numToIndex.has(complement)) {
            return [numToIndex.get(complement), i];
        }
        
        // Caso contrário, armazenar o número atual no mapa
        numToIndex.set(nums[i], i);
    }
    
    // Se nenhum par for encontrado, retornar um array vazio
    return [];
    
};


// palindronos 

function solution(inputString) {
    // Remove espaços em branco e converte a string para minúsculas
        const cleanedString = inputString.replace(/\s/g, '').toLowerCase();
        
        let left = 0;
        let right = cleanedString.length - 1;
        
        while (left < right) {
            if (cleanedString[left] !== cleanedString[right]) {
                return false; // Os caracteres não coincidem, não é um palíndromo
            }
            left++;
            right--;
        }
        
        return true; // Todos os caracteres coincidem, é um palíndromo
    
    }


    // 1. Two Sum - https://leetcode.com/problems/two-sum/description/
    // 2. Move Zeroes - https://leetcode.com/problems/move-zeroes/description/
    // 3. Check Palindrome - https://app.codesignal.com/arcade/intro/level-1/s5PbmwxfECC52PWyQ
    // 4. Sudoku - https://app.codesignal.com/interview-practice/question/SKZ45AF99NpbnvgTn/description
    // 5. Palindrome Linked List - https://leetcode.com/problems/palindrome-linked-list/description/
    // 6. Reverse Linked List - https://leetcode.com/problems/reverse-linked-list/descriptio
    