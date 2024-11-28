// funcoes.js
function contarOcorrencias(str, palavra) {
    const regex = new RegExp(palavra, 'gi'); 
    const matches = str.match(regex);
    return matches ? matches.length : 0;
}

export{
    contarOcorrencias
}

