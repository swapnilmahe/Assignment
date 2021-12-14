function validateAll() {
    lettersAndSpaceCheck(document.form1.name);
    }
function lettersAndSpaceCheck(name) {
    var regEx = /^[a-z][a-z\s]*$/;
    (name.value.match(regEx)) ? addEntry(events) : alert("Please check the data again.");
}
let arry = ["name", "email", "phone"]
addEntry = (e) => { 

    /*let obj = {};
    for (let i in arry) {
   obj[arry[i]]= document.getElementById(`${arry[i]}`).value;
   console.log(arry[i])
    }
    localStorage.setItem('objects' , JSON.stringify(obj)) */
    for( let i in arry){
        localStorage.setItem(`${arry[i]}`, document.getElementById(`${arry[i]}`).value);
    } 
    //localStorage.setItem("email", document.getElementById("email").value);
    //localStorage.setItem("phone", document.getElementById("phone").value);
         let newName = localStorage.getItem('name');
         let newEmail = localStorage.getItem('email');
         let newPhone = localStorage.getItem('phone');
         let makeVisible = document.getElementById("guestview");
         document.getElementById("new").innerHTML = newName
         document.getElementById("newer").innerHTML = newEmail
         document.getElementById("newest").innerHTML = newPhone
         makeVisible.style.visibility = "visible";

}

