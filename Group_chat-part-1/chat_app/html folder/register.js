console.log("register page");
$("form").submit(() => {
  
  var obj = {
    fullName: $("#fname").val(),
    email: $("#email").val(),
    password: $("#pass").val(),
    cPassword: $("#cpass").val(),
    id: Date.now(),
  };
  // console.log(obj )
 

  if (obj.password.length < 4) {
    alert("password length should be greater than 4 charector");
    return false
  } else if (obj.password !== obj.cPassword) {
    alert("password does not match");
    return false
  }

  //code for checking existing email

  let getUser = JSON.parse(localStorage.getItem("user"))
    ? JSON.parse(localStorage.getItem("user"))
    : [];

  if (getUser.find((o) => o.email == obj.email)) {
    alert("email already exist");
    return false;
  } else {
    getUser.push(obj);
    localStorage.setItem("user", JSON.stringify(getUser));
    return true;
  }
  console.log(getUser)
});
