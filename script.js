const divisor = () => {
    let numero = document.getElementById('numero').value;
    if (numero!="" && numero <= 100000000){
        if (numero==0){
            document.getElementById('divisores').innerHTML = "El 0 tiene infinito numero divisores exceptuando al mismo 0";
            document.getElementById('cantidad').innerHTML = "";
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
            document.getElementById('divisores').innerHTML = `D<sub>${numero}</sub> = {${divisores.join(', ')}}`;
            document.getElementById('cantidad').innerHTML = `El numero ${numero} tiene ${suma} divisores`;
        }
    }else {
        document.getElementById('divisores').innerHTML = "Debe escribir un numero entre 1 y 100.000.000";
        document.getElementById('cantidad').innerHTML = "";
    }
}
