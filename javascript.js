const form=document.getElementById('form')
const username=document.getElementById('username')
const email=document.getElementById('email')
const password=document.getElementById('password')
const password2=document.getElementById('password2')

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error'
    const small=formControl.querySelector('small');
    small.innerText=message;
}
function showSucess(input){
    const formControl=input.parentElement;
     formControl.className='form-control success'

}
function isValideEmail(email){
    return String(email).toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}


form.addEventListener('submit',function(e){
    e.preventDefault();

    if(username.value===''){
        showError(username,'Username is required');

    }else{
        showSucess(username);
    }

    if(email.value===''){
        showError(email,'Emial is required');

    }else if(!isValideEmail(email.value)){
          showError(email,'Email is invalid')
    }
    else{
        showSucess(email);
    }

    if(password.value===''){
        showError(password,'password is required');

    }else{
        showSucess(password);
    }

    if(password2.value===''){
        showError(password2,' Confirm password is required');

    }else{
        showSucess(password2);
    }


});


