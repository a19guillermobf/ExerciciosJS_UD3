/***************************************************************************************************************
*  
*   Escreve umha funçom que, ao passar-lhe mes e ano, devolva o número de dias do mes, tendo em conta que pode haver
*   Fevereiros com 29 dias
*
*   Exemplos: 2,2018 → 28
*   4,654 → 30
*
*
***************************************************************************************************************/


/** Obter datos, vou pedir que se introduzam os numeros separados por coma.
 * O primeiro um número do 1 ao 12, podendo ser 01 ou 09, pero nom 012 e o segundo um número calquera
 * devolvo um array co mes e o ano
*/
function obterDato(mensagem){
    let dato;
    let regular = /^(0?[1-9]|1[0-2]),\d+$/;
    do {
        dato = prompt(mensagem)
    } while(!regular.test(dato))
    return dato.split(",");
}


/** Recebe o array co mes e o ano.
 * Crea umha nova data no dia 1 desse mes. Hai que lembrar que ao mes lhe hai que restar 1
 * porque no objeto Date vam de 0 a 11
 * Crea um contador, que vai ir contando os dias do mes.
 * Vai passando os dias até que seja de novo dia 1
 */

function diaMes(arraymesano){
    let data = new Date(arraymesano[1], arraymesano[0]-1, 1);
    let dias = 0;
    do {
        dias++;
        data.setDate(data.getDate()+1);
    } while(data.getDate() != 1)
    return dias;
}


do {
    data = obterDato("Introduze o mes e o ano separados por comas, Ex: 2,2012");
    console.log(`O mes ${data[0]} do ano ${data[1]} tem ${diaMes(data)} dias`);
} while(true)
