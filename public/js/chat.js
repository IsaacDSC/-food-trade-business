function abrirChat() {
    //document.write("ok")
    var chat = document.querySelector('#chat')
    chat.style.height = '350px'
    var dialogo = document.querySelector('#modalChat')
    dialogo.style.display = 'flex'

}

function fecharChat() {
    //document.write('ok')
    var chat = document.querySelector('#chat')
    chat.style.height = '32px'
    var dialogo = document.querySelector('#modalChat')
    dialogo.style.display = 'none'

}