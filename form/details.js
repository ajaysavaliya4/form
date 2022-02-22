let page4 = document.getElementById("page4"),
    btn4 = document.getElementById("btn4"),
    data = document.getElementById("data");

    const hrefValue = localStorage.getItem("link");




document.getElementById("fullname").innerHTML = localStorage.getItem("firstname") + " " + localStorage.getItem("lastname");
document.getElementById("mobilenumber").innerHTML = localStorage.getItem("mobileNumber");
document.getElementById("emailid").innerHTML = localStorage.getItem("emailId");
 document.getElementById("dateofbirth").innerHTML = localStorage.getItem("dateofBirth");;
document.getElementById("gender1").innerHTML = localStorage.getItem("gende");
document.getElementById("state1").innerHTML = localStorage.getItem("statename");
document.getElementById("country1").innerHTML = localStorage.getItem("countryname");
document.getElementById("abc").setAttribute("href", hrefValue);



document.addEventListener("DOMContentLoaded", () => {
    const recentImage = localStorage.getItem("recent-image");
    if (recentImage) {
        document.getElementById("profilepic").setAttribute("src", recentImage);
    }
    
})

// function initMap() {
//     var option = {
//         zoom: 8,
//         center:{lat:23.1013,lng:72.5407}
//     }
//     var map = new google.maps.Map(document.getElementById("map"),option)
// }


