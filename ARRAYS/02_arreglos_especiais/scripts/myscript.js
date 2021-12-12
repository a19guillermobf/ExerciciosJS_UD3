/***************************************************************************************************************
*  
*   Um arreglo é especial se cada índice par contem um número par e cada índice
*   impar contem um número impar. Crea umha funçom que devolva true se o array é especial e false se nom
*
*   Exemplo: [2,7,4,9,6,1,6,3] → true indices pares[2,4,6,6] e impares [7,9,1,3]
*   [2,7,9,9,6,1,6,3] → false indices pares[2,9,6,6] e impares [7,9,1,3], o índice par tem um número impar
*
***************************************************************************************************************/


/** Obter datos, neste caso que sejam um números enteiro separados por comas e maiores ca 0*/
function obterDato(mensagem){
    let dato;
    let expreg;
    do {
        /**Expressom regular que comprova que começe por um dígito, e remate por 0 ou mais cobinaçons de ,digitos */
        expreg = new RegExp("^\\d+(,\\d+)*$")
        dato = prompt(mensagem);
    } while( !expreg.test(dato) )
    dato=dato.split(",")
    return dato;
}

/** Primeiro se a longitude do array é impar já devolve false
 * se é par, vai dividindo a ocorrencia actual mais a seguinte
 * entre dous, se da 0 a primeira e nom da 0 a segunda segue,
 * se nom tamém devolve false, se ao final 
 */

function especial(arr){
    if (arr.length%2 !== 0){
        return false
    } else {
        for(let i=0; i<arr.length; i+=2){
            if(arr[i]%2 !==0 || arr[i+1]%2 === 0){
                return false;
            }
            return true;
        }
    }
}

let arr;
do {
    arr=obterDato("Introduze números separados por comas")
    console.log(especial(arr));
} while(arr != 1)
