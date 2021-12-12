/***************************************************************************************************************
*  
*   Transcreve a cadeia DNA no correspondente RNA mitocondrial, mRNA.
*   O DNA está formado polas bases A, T, G e C, mentras que o RNA converte-as a U, A, C e G respectivamente
*
*   Exemplo: ATTAGCGCGATATACGCGTAC → UAAUCGCGCUAUAUGCGCAUG
*   CGATATA → GCUAUAU
*   GTCATACGACGTA → CAGUAUGCUGCAU
*
***************************************************************************************************************/


/** Obter datos, um string, pode-se ponher por meio de umha expressom regulara que só contenha os caracteres
 * A,T,G ou C, ou em minúsculas, devolve todo em maiúsculas
 */
function obterDato(mensagem){
    let dato;
    let adn = new RegExp("^[A|T|C|G|a|t|c|g]+$")
    do {
        dato = prompt(mensagem)
        console.log(adn.test(dato))
    } while( !adn.test(dato))
    return dato.toUpperCase();
}

/** Agora a funçom convertemRNA(adn) recebe este parámetro e com, por exemplo um 
 * switch case, poderia ir construindo a nova frase.
 * Pero também existe o método replaceAll(), que vem moito melhor para esto
 */

function convertemRNA(adn){
    adn = adn.replaceAll("A","U");
    adn = adn.replaceAll("T","A");
    /** Cambio temporal para cambiar as g por x, logo as c por g, e depois as x por c, se nom
     * se cambiara directamente g por c, depoios teria que cabiar c por g e cambiaria as novas e as velhas
     */
    adn = adn.replaceAll("G","X");
    adn = adn.replaceAll("C","G");
    adn = adn.replaceAll("X","C");
    return adn;
}

let dato;
do {
    dato = obterDato("Introduze cadea de ADN");
    console.log(convertemRNA(dato));
} while(dato != "A")
