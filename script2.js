function validateAll(e) {
    e.preventDefault()
    lettersAndSpaceCheck(document.form1.name, document.form1.email);
    }
function lettersAndSpaceCheck(name ,email) {
    var regEx = /^[a-z][a-z\s]*$/;
    const regex = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,8}$/;
    const regExo = /^([\.\_a-zA-Z0-9]+)@([a-zA-Z]+)\.([a-zA-Z]){2,3}\.[a-zA-Z]{1,3}$/;
    ((name.value.match(regEx)) && ((email.value.match(regex)) || (email.value.match(regExo)) ))? addEntry() : alert("Please check the data again.");
}
let arry = ["name", "email", "phone"]
let makeVisible = document.getElementById("guestview");
 addEntry=()=> {     
    for( let i in arry){
        localStorage.setItem(`${arry[i]}`, document.getElementById(`${arry[i]}`).value);
    } 
    var newName = localStorage.getItem("name");
    var newEmail = localStorage.getItem("email");
    var newPhone = localStorage.getItem("phone");
    document.getElementById("new").innerHTML = newName || 'Nothing';
    document.getElementById("newer").innerHTML = newEmail || 'Nothing';
    document.getElementById("newest").innerHTML = newPhone || 'NA';
   
    makeVisible.style.cssText = 'visibility:visible ;';
} 
