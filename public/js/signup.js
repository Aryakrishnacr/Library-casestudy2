function validateemail(email) {
  var emailPattern = /[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}/igm;
  let check = emailPattern.test(email)
  if (check == true) {
    document.getElementById('email').innerText = "";
    return true;
  }
  else {
    console.log("cgxvgv")
    document.getElementById('email').innerText = "**invalid..!";
    return false;
  }
}
function validatephone(mob) {
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let check = phoneno.test(mob);
  if (check == true) {
    document.getElementById('phone').innerText = "";
    return true;
  }
  else {
    document.getElementById('phone').innerText = "**Invalid !";
    return false;
  }
}
function validatepassword (password) {
  
    var re = /[0-9]/;
    if (password.length < 8) {
      document.getElementById('password').innerText = "** Password must contain at least eight characters!";
      return false;
    }
    if (!re.test(password) ){
      document.getElementById('password').innerText = "**password must contain at least one number (0-9)!";
      return false;
    }
    re = /[a-z]/;
    if (!re.test(password)) {
      document.getElementById('password').innerText = "** password must contain at least one lowercase letter (a-z)!";
      return false;
    }
    re = /[A-Z]/;
    if (!re.test(password)) {
      document.getElementById('password').innerText = "**password must contain at least one uppercase letter (A-Z)!";
      return false;
    }
  
  document.getElementById('password').innerText = "";
  return true;
}


function validateconfirm(password,conpassword) {

  var conpassw = /^[A-Za-z]\w{7,14}$/;

  if (conpassword == password) {
    document.getElementById('conpassword').innerText = "";
    return true;
  }
  else {
    document.getElementById('conpassword').innerText = "**Passwords not match";
    return false;
  }
}
function vaidatefirstname(fname) {
  if (fname != "") {
    document.getElementById('fname').innerText = "";
    return true;
  }
  else {
    document.getElementById('fname').innerText = "**Enter your first name"
  }
}
function validatelastname(lname) {
  if (lname != "") {
    document.getElementById('lname').innerText = "";
    return true;
  }
  else {
    document.getElementById('lname').innerText = "**Enter your last name"
  }
}
function vaidategender(gender) {
  if (gender != "") {
    document.getElementById('gender').innerText = "";
    return true;
  }
  else {
    document.getElementById('gender').innerText = "**Please select gender"
  }
}
function validatedob(dob) {
  if (dob != "") {
    document.getElementById('dob').innerText = "";
    return true;
  }
  else {
    document.getElementById('dob').innerText = "**Please enter your DOB"
  }
}
function validateAddress(addr) {

  if (addr != "") {
    document.getElementById('address').innerText = "";
    return true;
  }
  else {
    document.getElementById('address').innerText = "**Please enter your address"
  }
}
function validForm() {

  var email = document.getElementById('mail').value;
  var mob = document.getElementById("number").value;
  var password = document.getElementById("pswd").value;
  var conpassword = document.getElementById("conpswd").value;
  var firstname = document.getElementById("firstname").value;
  var lastname= document.getElementById("lastname").value;
  var gender= document.getElementById("gen").value;
  var dob= document.getElementById("dateofbirth").value;
  var address= document.getElementById("adrss").value;

  if (!vaidatefirstname(firstname)) {
    return false;
  }
  if (!validatelastname(lastname)) {
    return false;
  }


  if (!validatepassword(password)) {
    return false;
  }

  if (!validateconfirm(password,conpassword)) {
    return false;
  }
  if (!vaidategender(gender)) {
    return false;
  }
  if (!validatedob(dob)) {
    return false;
  }
  if (!validateemail(email)) {
    return false;
  }

  if (!validatephone(mob)) {

    return false;
  }
  if (!validateAddress(address)) {

    return false;
  }

  return true;



}