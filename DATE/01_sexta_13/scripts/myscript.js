/***************************************************************************************************************
*  
*   Dado um mes e ano em formato numérico, determinar se o mes 
*   tem umha sexta-feira 13.
*   Janeiro proporciona-se como mês 1, Fevereiro como 2, etc
*
*   Exemplos: 3,2020 → true
*   10,2017 → true
*   1,1985 → false
*
*
***************************************************************************************************************/


/** Obter datos, neste caso que seja um mes*/
function obterMes(mensagem){
    let dato;
    do {
        dato = prompt(mensagem)
    } while( isNaN(dato) || !Number.isInteger(parseFloat(dato)) || dato >12 || dato < 1)
    return dato;
}

/** Obter datos, neste caso que seja um numero maior ca 0*/
function obterAno(mensagem){
    let dato;
    do {
        dato = prompt(mensagem)
    } while( isNaN(dato) || !Number.isInteger(parseFloat(dato)) || dato < 1)
    return dato;
}

/** Recebe o mes, e o ano, e crea-se umha nova data 
 * com esse mes e ano, e o dia 13.
 * A mes hai que restar-lhe 1, pois a funçom colhe-os de 0 a 11
 * Logo, com getDay() comprova-se se é sexta, é dizer, se devolve o valor
 * de 5
 */

function temSexta13(mes,ano){
    let data = new Date(ano,mes-1,13);
    if(data.getDay()==5){
        return true;
    }
    return false;
}

let mes,ano;
do {
    mes = parseInt(obterMes("Introduze o mes"));
    ano = parseInt(obterAno("Introduze o ano"));
    console.log(temSexta13(mes,ano));
} while(ano != 1)
