


    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    
    if (dd < 10) {
       dd = '0' + dd;
    }
    
    if (mm < 10) {
       mm = '0' + mm;
    } 
    
    today = yyyy + '-' + mm + '-' + dd;
document.getElementById("date").setAttribute("max", today);
    
function passvalue() {
    let dob = document.getElementById("date").value,
    gender = document.querySelector("input[name='gender']:checked");
    localStorage.setItem("dateofBirth", dob);
    localStorage.setItem("gende", gender.value);
    return false;
}