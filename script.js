binario_0 = prompt("Digite o primeiro numero binario: ")
binario_1 = prompt("Digite o segundo numero binario: ")

resultado = []

carry = 0

array_0 = list(binario_0)
array_1 = list(binario_1)

tamanho_0 = len(array_0)
tamanho_1 = len(array_1)

diferenca = abs(tamanho_1 - tamanho_0)

if (tamanho_0 < tamanho_1):
    for (let i = 0; i < diferenca; i++) {
        array_0.insert(0, "0")
    }
else if (tamanho_0 > tamanho_1) {
    for (let i = 0; i < diferenca; i++) {
        array_1.insert(0, "0")
    }
}

cont = len(array_0) - 1

operacao = prompt("Digite a operacao [ + , - , * , / ]:");

if (operacao == "+") {
    for (let i = 0; i < len(array_0); i++) {
        if (array_0[cont] == "0" && array_1[cont] == "0" && carry == 0) {
            resultado.insert(0, "0")
            cont -= 1
        }
        else if (array_0[cont] == "0" && array_1[cont] == "0" && carry == 1) {
            resultado.insert(0, "1")
            carry = 0
            cont -= 1
        }
        else if (array_0[cont] == "1" && array_1[cont] == "1" && carry == 0) {
            if (i == len(array_0) - 1) {
                resultado.insert(0, "10")
            }
            else {
                resultado.insert(0, "0")
                carry = 1
                cont -= 1
            }
        }
        else if (array_0[cont] == "1" && array_1[cont] == "1" && carry == 1) {
            if (i == len(array_0) - 1) {    
                resultado.insert(0, "11")
            }
            else {
                resultado.insert(0, "1")
                carry = 1
                cont -= 1
            }
        }
        else if ((array_0[cont] != array_1[cont]) && carry == 0) {
            resultado.insert(0, "1")
            cont -= 1
        }
        else if ((array_0[cont] != array_1[cont]) && carry == 1) {
            if (i == len(array_0) - 1) {
                resultado.insert(0, "10")
            }
            else {
                resultado.insert(0, "0")
                carry = 1
                cont -= 1
            }
        }
    }
}else{alert("Operação não implementada ainda!")}

resultado = ''.join(resultado)

alert("O resultado da operação é: " + resultado)
