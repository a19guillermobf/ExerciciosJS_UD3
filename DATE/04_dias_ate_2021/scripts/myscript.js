/***************************************************************************************************************
*  
*   Escreve umha funçom que, dada umha data, determine quantos dias ficam para 2021.
*   Todas as datas serám do ano 2020
*
*   Exemplos: 12/28/2020 → 3 dias
*   1/1/2020 → 365 dias
*   2/28/2020 → 308 dias
*
***************************************************************************************************************/


/** Obter datos, vou pedir que se introduzam os numeros separados por coma.
 * O primeiro um número do 1 ao 12, podendo ser 01 ou 09, pero nom 012 e o segundo um número calquera
 * devolvo um array co mes e o ano
*/
function obterDato(mensagem){
    let dato;
    let regular = /^(0?[1-9]|1[0-2]),(0?[1-9]|1[0-9]|2[0-9]|3[0-1]),\d+$/;
    do {
        dato = prompt(mensagem)
        if(!regular.test(dato)){
            alert("data incorrecta");
        }
    } while(!regular.test(dato))
    return dato.split(",");
}


/** Para comprovar o número de dias que tem o mes, colhido do exercicio anterior
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

/** Fai um array intermedio para calcular os dias que tem o mes ca funçom diaMes
 * logo estabelece a data final, ca que se vai fazer o cálculo, 1 de janeiro de 2021
 * logo crea a data que se lhe passa como array
 * Fai as comprovaçons de dias e meses, por se se mete um fevereiro de mais dias ou assi
 * Calcula os milisegundos que hai de diferença entre a data final e a data passada
 * Divide entre milisegundos,segundos,minutos e horas para saber os dias
*/
function diasAte2021(arraymesdiaano){
    let mesano = [];
    mesano.push(arraymesdiaano[0]);
    mesano.push(arraymesdiaano[2]);
    let datafinal = new Date(2021,0,1);
    let data = new Date(arraymesdiaano[2],arraymesdiaano[0]-1,arraymesdiaano[1]);
    if ( diaMes(mesano) == 28 && arraymesdiaano[0] == 2 && data.getMonth() != 1 ){
        return "Neste ano o mes de Fevereiro tivo 28 dias. A data introduzida é incorrecta";
    } else if (diaMes(mesano) == 29 && arraymesdiaano[0] == 2 && data.getMonth() != 1 ) {
        return "Neste ano o mes de Fevereiro tivo 29 días. A data introduzida é incorrecta";
    } else if (diaMes(mesano) == 30 && ( arraymesdiaano[0] == 4 || arraymesdiaano[0] == 6 || arraymesdiaano[0] == 9 || arraymesdiaano[0] == 11) && data.getDate() == 1) {
        return "Este mes só tem 30 dias. A data introduzida é incorrecta"
    } else {
        let dias = datafinal.getTime()-data.getTime();
        dias = dias/1000/60/60/24;
        return `Os dias desde o ${arraymesdiaano[1]}, do ${arraymesdiaano[0]} de ${arraymesdiaano[2]} som: ${dias}`
    }
}

do {
    data = obterDato("Introduze o mes, dia e o ano separados por comas, Ex: 12,23,2012");
    console.log(diasAte2021(data));
} while(true)
