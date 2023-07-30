const form = document.querySelector(".login-form");
const profile = {}
form.addEventListener("submit", hendlerSubmit);
 
function hendlerSubmit(evt) {
    evt.preventDefault()
  
    const { email, password } = evt.currentTarget.elements;
   
    if (email.value === '' || password.value === '') {
        alert('Please fill in all the fields!');
        return;
    } else {
        profile.email = email.value;
        profile.password = password.value;

        console.log(profile);
    }
    
   form.reset();
}
 