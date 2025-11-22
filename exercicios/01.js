// Desconto em compra
// Regra de negocio:
// - se valorCompra >= 100 -> 10% de desconto
// - se valorCompra < 100 -> sem desconto
// cria uma função que execute isso!

let escopoGlobal = 10 // escopo global

function ValidaDesconto(valorCompra){
    let desconto = 0 // escopo de função

    if (valorCompra >= 100) {
        desconto = valorCompra * 0.10
    }

    valorFinal = valorCompra - desconto

    return{
        valorCompra,
        desconto,
        valorFinal
    }

}

console.log(ValidaDesconto(1200));
