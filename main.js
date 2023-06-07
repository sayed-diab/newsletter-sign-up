

let btnSubmit = document.querySelector('.btn')
let form = document.querySelector("form")
let emailInput = document.querySelector('form input')
let sucssesContant = document.querySelector(".success")
let dismissBtn = document.querySelector('#btn')
let containerDiv = document.querySelector('.contant-container')
let sendTo = document.querySelector('.contant strong')

emailInput.oninput = ()=>{
    form.dataset.write = 'fulse'
    
}
let exp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function checker(){
    if (emailInput.value.match(exp)){
        sucssesContant.style.display = 'flex'
        containerDiv.style.display = 'none'
        sendTo.innerHTML = emailInput.value
    }else{
        form.dataset.write = 'true'
    }
}

btnSubmit.onclick = (e)=>{
    e.preventDefault()
    checker()
}
dismissBtn.onclick = ()=>{
    window.location.reload()
}