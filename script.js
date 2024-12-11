document.getElementById("formValidation").addEventListener("submit",function (e){
    e.preventDefault();
    document.querySelectorAll(".error").forEach(el => el.textContent = ""); //clear all error messages
    
    let isValid = true;
    //validating full name
    const fullName=document.getElementById("fullName").value.trim();
    if(fullName.length < 5)//length of name entered
    {
        document.getElementById("nameError").textContent = "Name must have atleast 5 characters";
        isValid=false;
    }
    //validating email ID
    const email = document.getElementById("email").value.trim();
    if(!email.includes("@"))//checks whether email contains @
    {
        document.getElementById("emailError").textContent = "Enter a valid email address";
        isValid=false;
    }
    //validating phone number
    const no=document.getElementById("phone").value.trim();
    if(no==="0123456789"|| no.length!==10|| isNaN(no))
    {
        document.getElementById("phoneError").textContent="Enter valid phone number";
        isValid=false;
    }
    //validating password
    const password=document.getElementById("pass").value.trim();
    const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)$/; // At least one letter and one number
    if(!passwordRegex.test(password)||password.length<8||password.toLowerCase()==="password"||password.toLowerCase()===fullName.toLowerCase())
    {
        //password must not be <8 characters,must contain number and letter and must not be "password" or full name
        document.getElementById("passError").textContent="Enter a strong password";
        isValid=false;
    }
    //validating confirm password
    const confirmPassword=document.getElementById("confpass").value.trim();
    if(password!==confirmPassword)//check whether both are same
    {
        document.getElementById("confpassError").textContent="Passwords do not match";
        isValid=false;
    }
    if(isValid)//if all validations pass
    {
        alert("Form submitted successfully");
    }
});