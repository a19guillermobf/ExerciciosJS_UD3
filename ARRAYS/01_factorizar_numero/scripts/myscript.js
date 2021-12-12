/***************************************************************************************************************
*  
*   Crear umha funçom à que se lhe passe um número enteiro positivo e devolva um array
*   com todos os seus divisores
*
*   Exemplo: 12 → [1,2,3,4,6,12]
*   4 → [1,2,4]
*   17 → [1,17]
*
***************************************************************************************************************/


/** Obter datos, neste caso que seja um número enteiro e maior ca 0*/
function obterDato(mensagem){
    let dato;
    do {
        dato = parseInt(prompt(mensagem));
    } while( isNaN(dato) || !Number.isInteger(parseFloat(dato)) || dato < 1)
    return dato;
}

/** Pois com um bucle que vaia mirando que diviso da resto 0 e engade a um novo array
 */

function factorizar(n){
    let factorizado = [];
    for(let i=1;i<=n;i++){
        if (n%i===0){
            factorizado.push(i);
        }
    }
    return factorizado;
}

let numero;
do {
    numero=obterDato("Introduze um número para factorizar")
    console.log(factorizar(numero));
} while(numero != 1)
