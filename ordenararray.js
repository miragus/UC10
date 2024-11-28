
 function ordenarArray(arr) {
    //SE FOR NEGATIVO a DEVE VIR ANTES DE b
    //SE FOR POSITIVO b DEVE VIR ANTES DE a
    return arr.slice().sort((a, b) => a - b); 
}
export{ 
ordenarArray
}

