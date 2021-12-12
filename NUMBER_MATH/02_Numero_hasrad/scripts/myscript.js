/***************************************************************************************************************
*  
*   Um número de Harshad é aque que é divisível pola suma dos seus dígitos.
*   Crea umha funçom que determine se é ou nom número de Harshad
*
*   Exemplo: 
*   75 → 7+5=12 → false pois 75 nom é divisível por 12
*   171 → 1+7+1=9 → true 171 é divisível por 9
*
***************************************************************************************************************/


/** Obter datos, neste caso que seja um número */
function obterDato(mensagem){
    let dato;
    do {
        dato = prompt(mensagem)
    } while( isNaN(dato) || !Number.isInteger(parseFloat(dato)))
    return dato;
}

/** 
 */

function eHarshad(n){
    let suma = 0;
    n = n.toString();
    for(let i = 0; i<n.length; i++){
        suma+=parseInt(n.charAt(i));
    }
    if(parseInt(n)%(suma) != 0){
        return false
    }
    return true
}

let dato;
do {
    dato = parseInt(obterDato("Introduze um número"));
    console.log(eHarshad(dato))
} while(dato != 0)
