/***************************************************************************************************************
*  
*   Crea umha funçom que colha um número e devolva true ou false dependendo de se é automorfico ou nom.
*   Um número n é automorfico se o seu quadrado remata em n.
*
*   Exemplo, 5 é automórfico, porque o seu quadrado é 25, 8 nom porque é 64
*   Salida  : Hola Mundo !
*
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

/** Funçom automorfico
 * recebe um número e comprova se o último número do seu quadrado
 * é igual ao número introduzido
 */

function eAutomorfico(n){
    let n2 = n*n;
    /** Convirto n2 e n a string */
    n2 = n2.toString();
    n = n.toString();
    /** Com um bucle que dure a longitude de n vou percorrendo e 
     * comparando cada caracter desde o final, se algum nom coincide, devolvo
     * false
     */
    for(let i = n.length -1, j=n2.length-1; i>=0; i--,j--){
        if(n2.charAt(j) != n.charAt(i)){
            return false;
        }
    }
    return true;
}

let dato;
do {
    dato = parseInt(obterDato("Introduze um número"));
    console.log(eAutomorfico(dato))
} while(dato != 0)
