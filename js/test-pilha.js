/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const pilha = [];  // Cria uma pilha vazia para rastrear os parênteses abertos
     
     // Define um mapeamento de parênteses abertos para seus correspondentes fechados
     const mapaParênteses = {
         '(': ')',
         '[': ']',
         '{': '}'
     };
     
     // Itera por cada caractere na string de entrada
     for (let i = 0; i < s.length; i++) {
         const caractere = s[i];
         
         // Se o caractere for um parêntese aberto, coloque-o na pilha
         if (mapaParênteses[caractere]) {
             pilha.push(caractere);
         } else {
             // Se o caractere for um parêntese fechado
             // Verifica se a pilha está vazia ou se o último parêntese aberto não corresponde
             if (pilha.length === 0 || mapaParênteses[pilha.pop()] !== caractere) {
                 return false;  // Inválido
             }
         }
     }
     
     // Após percorrer a string, se a pilha estiver vazia, é válida
     return pilha.length === 0;
 }
 
 // Exemplo de uso:
 console.log(isValid("()"));         // Saída: true
 console.log(isValid("()[]{}"));     // Saída: true
 console.log(isValid("(]"));         // Saída: false
 