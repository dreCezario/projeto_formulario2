const formulario = document.querySelector('#formCadastro')

formulario.onsubmit = function(e) {
    e.preventDefault()

    let temErro = false

    let inputNome = document.querySelector('#nome')

    if(!inputNome.value){
        temErro = true
        inputNome.classList.add('inputError')

        let span = document.querySelector('#span-nome')
        span.innerText = 'Digite o nome corretamente'
    }else{
        inputNome.classList.remove('inputError')

        let span = document.querySelector('#span-nome')
        span.innerText = ''
    }

    let inputEmail = document.querySelector('#email')

    if(!inputEmail.value){
        temErro = true
        inputEmail.classList.add('inputError')

        let span = document.querySelector('#span-email')
        span.innerText = 'Digite o email corretamente'
    }else{
        inputEmail.classList.remove('inputError')

        
        let span = document.querySelector('#span-email')
        span.innerText = ''
    }

    let inputTel = document.querySelector('#tel')

    if(!inputTel.value){
        temErro = true
        inputTel.classList.add('inputError')

        let span = document.querySelector('#span-tel')
        span.innerText = 'Digite o número de telefone corretamente'
    }else{
        inputTel.classList.remove('inputError')

        let span = document.querySelector('#span-tel')
        span.innerText = ''
    }

    let selectSexo = document.querySelector('#sexo')

    if(!selectSexo.value){
        temErro = true
        selectSexo.classList.add('inputError')

        let span = document.querySelector('#span-sexo')
        span.innerText = 'Selecione o seu sexo'
    }else{
        selectSexo.classList.remove('inputError')

        let span = document.querySelector('#span-sexo')
        span.innerText = ''
    }

    if(!temErro){
        formulario.submit()
    }
}