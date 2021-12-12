/***************************************************************************************************************
*  
*   Crear umha funçom que transforme todos os caracteres de umha cadea menos os 
*   catro últimos em # e devolva a cadea enmascarada
*
*   Exemplo: 455654451234 → ########1234
*   12345678 → ####5678
*   1 → 1
*   "" → ""
*
***************************************************************************************************************/


/** Obter datos, um string, pode-se ponher por meio de umha expressom regular que recolha todos os caracteres
 * alfanuméricos mais o guiom baixp
 */
function obterDato(mensagem){
    let dato;
    let adn = new RegExp("^\\w*$")
    do {
        dato = prompt(mensagem)
        console.log(adn.test(dato))
    } while( !adn.test(dato))
    return dato;
}

/** A funçom recebe o string e recolhe o número de de caracteres que hai menos 4
 *  
 * Logo se a longitude é maior de 4, com slice recolhe o texto da última posiçom a os 4 últimos caracteres.
 * Logo concatena com repeat os # equivalentes ao número que recolhemos ao primeiro
 * 
 * Co metodo slice(pos1,pos2), podo obter umha cadea desde umha posiçom até outra
 * exemplo, na cadea cad = "Umha cadea normal"
 * cad.slice(4,a.length) → " cadea normal"
 * cad.slice(4,-1) → " cadea norma"
 * cad.slice(4,6) → " c"
 * cad.slice(-4) → "rmal"
 */

function enmascara(texto){
    let l = texto.length-4;
    if(texto.length > 4){
        texto = texto.slice(-4);
        // ou texto = texto.slice(texto.length-4,texto.length);
        texto = "#".repeat(l).concat(texto);
    } 
    return texto;
}

let dato;
do {
    dato = obterDato("Introduce o string alfanumérico");
    console.log(enmascara(dato));
} while(dato != "AA")
