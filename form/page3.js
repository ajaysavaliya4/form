
function passvalue() {
    let state = document.querySelector("#state").value,
    country = document.querySelector("#country").value;
    localStorage.setItem("statename", state);
    localStorage.setItem("countryname", country);
    return false;

}
