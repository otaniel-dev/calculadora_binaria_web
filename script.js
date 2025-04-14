// Função para somar dois números binários
function somar() {
    // Obter os valores dos campos de entrada
    const binario_0 = document.getElementById("binario_0").value;
    const binario_1 = document.getElementById("binario_1").value;
    
    // Converter strings para arrays
    const array_0 = binario_0.split('');
    const array_1 = binario_1.split('');
    
    // Garantir que ambos os arrays tenham o mesmo tamanho
    const tamanho_0 = array_0.length;
    const tamanho_1 = array_1.length;
    const diferenca = Math.abs(tamanho_1 - tamanho_0);
    
    if (tamanho_0 < tamanho_1) {
        for (let i = 0; i < diferenca; i++) {
            array_0.unshift("0");
        }
    } else if (tamanho_0 > tamanho_1) {
        for (let i = 0; i < diferenca; i++) {
            array_1.unshift("0");
        }
    }
    
    // Realizar a soma binária
    let carry = 0;
    const resultado = [];
    let cont = array_0.length - 1;
    
    for (let i = 0; i < array_0.length; i++) {
        if (array_0[cont] === "0" && array_1[cont] === "0" && carry === 0) {
            resultado.unshift("0");
            cont -= 1;
        }
        else if (array_0[cont] === "0" && array_1[cont] === "0" && carry === 1) {
            resultado.unshift("1");
            carry = 0;
            cont -= 1;
        }
        else if (array_0[cont] === "1" && array_1[cont] === "1" && carry === 0) {
            if (i === array_0.length - 1) {
                resultado.unshift("10");
            }
            else {
                resultado.unshift("0");
                carry = 1;
                cont -= 1;
            }
        }
        else if (array_0[cont] === "1" && array_1[cont] === "1" && carry === 1) {
            if (i === array_0.length - 1) {    
                resultado.unshift("11");
            }
            else {
                resultado.unshift("1");
                carry = 1;
                cont -= 1;
            }
        }
        else if ((array_0[cont] !== array_1[cont]) && carry === 0) {
            resultado.unshift("1");
            cont -= 1;
        }
        else if ((array_0[cont] !== array_1[cont]) && carry === 1) {
            if (i === array_0.length - 1) {
                resultado.unshift("10");
            }
            else {
                resultado.unshift("0");
                carry = 1;
                cont -= 1;
            }
        }
    }
    
    // Converter o resultado para string
    const resultadoString = resultado.join('');
    
    // Exibir o resultado
    document.getElementById("resultado").textContent = "Resultado: " + resultadoString;
}

// Função para subtrair dois números binários
function subtrair() {
    document.getElementById("resultado").textContent = "Função de subtração ainda não implementada";
}

// Função para multiplicar dois números binários
function multiplicar() {
    document.getElementById("resultado").textContent = "Função de multiplicação ainda não implementada";
}

// Função para dividir dois números binários
function dividir() {
    document.getElementById("resultado").textContent = "Função de divisão ainda não implementada";
}
