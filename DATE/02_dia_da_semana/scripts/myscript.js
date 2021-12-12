/***************************************************************************************************************
*  
*   Escreve umha funçom que, dada umha data em formato DD/MM/AAAA devolva o dia da semana coma umha cadea
*
*   Exemplos: 07/12/2016 → "Quarta-feira"
*   04/09/2016 → "Domingo"
*   08/12/2011 → "Quinta-feria"
*
*
***************************************************************************************************************/


/** Obter datos, neste caso a comprovaçom é bastante complexa
 * simplesmente vou fazer coma que se recolhe normalmente, e 
 * se introduze seguindo os requerimentos
*/
function obterDato(mensagem){
    //let dato;
    //do {
    let dato = prompt(mensagem)
    //} while( isNaN(dato) || !Number.isInteger(parseFloat(dato)) || dato >12 || dato < 1)
    return dato;
}


/** Recebe a data no formati indicado e separa com split
 * Crea umha nova data, lembrabdo que a mes hai que restar-lhe 1, pois new Date() colhe-os de 0 a 11
 * Logo, fai-se um getDay() e em funçom do número que devolva
 * asigna-se-lhe um string a dia, e devolve dia
 */

function diaSemana(data){
    let dia;
    data = data.split("/");
    let data2 = new Date(data[2],data[1]-1,data[0]);
    switch(data2.getDay()){
        case 0:
            dia = "Domingo";
            break;
        case 1:
            dia = "Segunda-feira";
            break;
        case 2:
            dia = "Terça-feira";
            break;
        case 3:
            dia = "Quarta-feira";
            break;
        case 4:
            dia = "Quinta-feira";
            break;
        case 5:
            dia = "Sexta-feira";
            break;
        case 6:
            dia = "Sábado";
            break;
        default:
            console.log("Algo dou errado");
    }
    return dia;
}

let data;
do {
    data = obterDato("Introduze a data com formato DD/MM/AAAA");
    console.log(diaSemana(data));
} while(data != 0)
