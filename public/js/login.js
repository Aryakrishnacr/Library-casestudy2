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
  
  function validatepassword (password) {
    // if (password != "" ){
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
  
  
  
  
  function validForm() {
  
    var email = document.getElementById('mail').value;
    
    var password = document.getElementById("pswd").value;
    if (!validateemail(email)) {
        return false;
      }
    
     
    
    if (!validatepassword(password)) {
      return false;
    }
  
   
    
  
    return true;
  }