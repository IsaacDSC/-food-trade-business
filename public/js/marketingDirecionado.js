//const MarketigDirecionado = require('../../routes/home')
const dataUsers = []

if (typeof(Storage) != 'undefine') {
    if (localStorage.visitas) {
        localStorage.visitas = Number(localStorage.visitas) + 1
        dataUsers.push({ 'visitas': localStorage.visitas })
    } else {
        //localStorage.setItem('visitas', 1)
        localStorage.visitas = 1
        dataUsers.push({ 'visitas': localStorage.visitas })
    }
    //document.write('visitas: ' + localStorage.visitas)

    for (dataUser of dataUsers) {
        alert('Visitas: ' + dataUser.visitas)
    }

} else {
    document.write('Sem Suporte ao WEBSTORAGE')
}


if (localStorage.visitas == 1) {
    alert('seja bem vindo, você acabou de ganhar um desconto!')

}