//VALIDADOR DE CPF

//50545194830

function validacpf(cpf) {
    cpfClear = Array.from(cpf.replace(/\D+/g, '')) //retira o que não é numero e separa os
    // elemetos em um array

    if(cpfClear.reduce((total,valor)=> total+= Number(valor),0) ===
    Number(cpfClear[0]) * 11){
        return "Todos iguais"
    }

    primeiraSoma = cpfClear.reduce((total, valor, indice) => {
        if (indice <= 8) {
            let multiplicador = 10 - indice; 
            total += Number(valor) * multiplicador;
        }
        return total;
    }, 0)

    segundaSoma = cpfClear.reduce((total, valor, indice) => {
        if (indice <= 9) {
            let multiplicador = 11 - indice;
            total += Number(valor) * multiplicador;
        }
        return total;
    }, 0)

    if (11 - (primeiraSoma % 11) === Number(cpfClear[9])) {
        if (11 - (segundaSoma % 11) === Number(cpfClear[10]) || 11 - (segundaSoma % 11) > 9) {
            return 'Valido!'
        }
        return 'Invalido, mas quase'
    }
    return 'Invalido'
}

console.log(validacpf("505.451.948-30"))