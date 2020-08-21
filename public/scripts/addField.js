// Procurar o botão //
document.querySelector("#add-time")

// Ação de clicar no botão //
.addEventListener('click', cloneField)

// Após o clique, aconteça isso: //
function cloneField() {
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true)   // Boolean = True or False //

    // Resetar o campo dos dados. Quais campos ? 
    const fields = newFieldContainer.querySelectorAll('input')

    // Forma não usual //
    // fields[0].value = ""
    // fields[1].value = ""

    // Para cada campo, resetar o dado contido nele 
    fields.forEach(function(field){
        // Pegar o campo field do momento e limpa ele
        field.value = ""
    })

    // Colocar em que lugar da página ? 
    document.querySelector('#schedule-items').appendChild(newFieldContainer)
}
