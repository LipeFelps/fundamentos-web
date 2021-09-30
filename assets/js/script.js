
/*
Case Sensitive = Reconhece letras maiusculas e minusculas

Posso acessar por:
Tag: getElementByTagName()
Id: getElementById()
Nome: getElemntByName()
Classe: getElementsByClassName()
Seletor: querySelector()
*/
let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

nome.style.widht = '100%'
email.style.widht = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.lenght < 3) {
        txtNome.innerHTML = 'Nome Ivalido'
        txtNome.style.color = 'red'
  } else {
      txtNome.innerHTML = 'Nome Valido'
      txtNome.style.color = 'green'
  }

}

function validaEmail() {
    let txtEmail = document.querySelector('#email')   
    if (email.value.indexOf('@')== -1 || email.value.indexOf('.'))   {
    txtEmail.innerHTML = 'E-mail Invalido '
    txtEmail.style.color = 'red'
} else {

    txtEmail.innerHTML = 'E-mail valido'
    txtEmail.style.color = 'green'
}
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtassunto')

    if (assunto.value.lenght >= 100) {
    txtAssunto.innerHTML = 'Texto muito grande, maximo de 100 caracteres'
    txtAssunto.style.color = 'red'
    txtAssunto.style.display

    }
}


