let input_domain = document.getElementById('domain')
let span = document.getElementById('success-span')
let submtd_form = document.querySelector('.submitted-form')
let botao_ok = document.querySelector('.ok-button')

let form1Enviado = false;
    
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
form1.addEventListener('submit', function(event) {
    event.preventDefault();
    form1Enviado = true;
    });

form2.addEventListener('submit', function(event) {
    if (!form1Enviado) {
        event.preventDefault(); 
        alert('Por favor, escolha um domínio e envie para continuar');
    } else if (form1Enviado == true){
        event.preventDefault()
        showSuccessForm()
        form1Enviado = false;
}
});

function domainSubmited(e){
    event.preventDefault()
    input_domain.style.border = '2px solid #2cc76a'
    span.style.display = 'block'
}
form1.addEventListener("submit", domainSubmited)

function tiraInteracao(){
    input_domain.style.border = 'none'
    span.style.display = 'none'
    form1Enviado = false
}
input_domain.addEventListener("input", tiraInteracao)

function tiraSubmittedForm(){
    submtd_form.style.display = 'none'
}
botao_ok.addEventListener("click", tiraSubmittedForm)





function showSuccessForm(){
    submtd_form.style.display = 'flex'
    form1.reset()
    form2.reset()
    tiraInteracao()
}