const container = document.getElementById('container')

const vendas = [50, 120, 100, 20, 15]

const somaVendas = vendas.reduce((valorAnterior, valorAtual) =>
{
    let total = valorAnterior + valorAtual
    console.log(total)
    return container.innerHTML = total
}, 0

);


