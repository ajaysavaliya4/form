
function passvalue() {
    let fname = document.getElementById("fname").value,
    lname = document.getElementById("lname").value,
    number = document.getElementById("number").value,
    email = document.getElementById("email").value;

    localStorage.setItem("firstname", fname);
    localStorage.setItem("lastname", lname);
    localStorage.setItem("mobileNumber", number);
    localStorage.setItem("emailId", email);
    return false;
}