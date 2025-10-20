const form = document.getElementById('form')
const fullName = document.getElementById('fullName')
const email = document.getElementById('email')
const subject = document.getElementById('subject')
const message = document.getElementById('message')
const nameError = document.getElementById('name-error')
const emailError = document.getElementById('email-error')
const subjectError = document.getElementById('subject-error')
const messageError = document.getElementById('message-error')
const sucessMessage = document.getElementById('success')
form.addEventListener('submit', (e)=>{
    let isValid = true;
    e.preventDefault();

    nameError.hidden = true;
    emailError.hidden = true;
    subjectError.hidden = true;
    messageError.hidden = true;
    sucessMessage.textContent = "";
    sucessMessage.hidden = true;


    if(!fullName.value || fullName.value.length < 2){
        nameError.hidden = false;
        isValid = false;
        nameError.setAttribute('aria-invalid', 'true');
    } if(!email.value || !email.value.includes("@") || !email.value.includes(".")){
        emailError.hidden = false;
        isValid = false;
        emailError.setAttribute('aria-invalid', 'true');
    }if(!subject.value){
        subjectError.hidden = false;
        isValid = false;
        subjectError.setAttribute('aria-invalid', 'true');
    }if (!message.value || message.value.length < 1){
        messageError.hidden = false;
        isValid = false;
        messageError.setAttribute('aria-invalid', 'true');
}
    if(isValid){
        sucessMessage.hidden = false;
        sucessMessage.textContent = "Your message has been sent";
        form.reset();
        setTimeout(() => {
            sucessMessage.hidden = true;
          }, 3000);
        return true;
        
       }

       else{
        return false;
       }
    }
)


   

