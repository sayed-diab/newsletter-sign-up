

let btnSubmit = document.querySelector('.btn')
let form = document.querySelector("form")
let emailInput = document.querySelector('form input')

emailInput.oninput = ()=>{
    form.dataset.write = 'fulse'
    
}


btnSubmit.onsubmit = ()=>{
    emailInput.value.match(/w+@w+.com/gi) ?
    window.open("./sucsses.html",target="_blank") : form.dataset.write = 'true'
}
