const form = document.querySelector(".login-form");
form.addEventListener("submit", hendlerSubmit);
 
function hendlerSubmit(evt) {
    evt.preventDefault()
  
    const { email, password } = evt.currentTarget.elements;
   
    if (email.value === '' || password.value === '') {
        alert('Please fill in all the fields!');
    } else {
        profile.email = email.value;
        profile.password = password.value;
    }
   evt.currentTarget.reset();
}
 