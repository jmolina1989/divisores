const divisor = () => {
    let numero = document.getElementById('numero').value;
    const resultado = document.getElementById('divisores');
    const cantidad = document.getElementById('cantidad');
    if (numero!="" && numero <= 100000000){
        if (numero==0){
            resultado.innerHTML = "El numero 0 tiene divisores infinitos a excepción del mismo 0";
            cantidad.innerHTML = "";
        }else{
            numero = parseInt(numero);
            const divisores = [];
            let suma = 0;
            for (let i = 1; i <= numero; i++) {
                if (numero%i==0){
                    divisores.push(i)
                    suma += 1;
                }
            }
            resultado.innerHTML = `D<sub>${numero}</sub> = {${divisores.join(', ')}}`;
            cantidad.innerHTML = `El numero ${numero} tiene ${suma} divisores`;
        }
    }else {
        resultado.innerHTML = "Debe escribir un numero entre 1 y 100.000.000";
        cantidad.innerHTML = "";
    }
}
