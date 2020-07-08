const pedidos = []

pedidos.push({ title: 'coca - cola', valor: 5 })
pedidos.push({ title: 'guaraná', valor: 5 })
pedidos.push({ title: 'coca-cola 600ml', valor: 6 })
    /* for (var i = 0; i <= 10; i++) {
        console.log('ok')
    } */

const valorTotal = pedidos.reduce((subtotal, pedido) => pedido.valor + subtotal, 0)
console.log(valorTotal)


for (pedido in pedidos) {
    console.log(pedido)
}

for (pedido of pedidos) {
    //console.log(pedido)
    console.log(pedido.title)
}