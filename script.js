const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const phonenumber = document.getElementById("Phone Number")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")



form.addEventListener('submit',e =>{
    if(ValidateInput()){
        e.preventDefault();
    }
});

function ValidateInput(){
    const usernameValue = username.Value.trim();
    const emailValue = email.Value.trim();
    const phonenumberValue = phonenumber.Value.trim();
    const passwordValue = password .Value.trim();
    const password2Value = password2.Value.trim(); 

    
}

if(username===''){
    setError(username,'username is required')
}
else{
    setSuccess(username)
}
if(emailVal===''){
    setError(email,'Email is required')
}

else if(!validateEmail(emailVal)){
    setError(email,'Please Enter valid email')
}
else{
    setSuccess(email)
}if(password===''){
    setError(password,'password is required')
}
else if(password.length<8){
    setError(password,'password must be 8 charactor')
}
else{
    setSuccess(password)
}
if(password2===''){
    setError(password2,'confirm password')
}
else if(password2!==password){
    setError(password2,'password does not match')
}
else{
    setSuccess(password)
}

return success;

function setError(element,message){
    const formcontrol =element .parentElement;
    const errorElement =formcontrol.queryselector('.error')

    errorElement.innerText = message;
    formcontrol.classlist.add("error")
    formcontrol.classlist.remove("success")
}
function setSuccess(element){
    const formcontrol =element .parentElement;
    const errorElement =formcontrol.queryselector('.error')

    errorElement.innerText = '';
    formcontrol.classlist.add("success")
    formcontrol.classlist.remove("error")
}
const validateEmail =(email)=>{
    return String(email)
    .toLowerCase()
    
};