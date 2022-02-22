
let file = document.querySelector("#profile");


file.addEventListener("change", function () {
    
    image = document.querySelector("#image");
    const choosedFile = this.files[0];
    if (choosedFile) {
        const reader = new FileReader();

        reader.addEventListener("load", function () {
             
            image.setAttribute("src", reader.result);
            localStorage.setItem("recent-image", reader.result);
        })
        reader.readAsDataURL(choosedFile);
     
    }
})  


let hrefValue = document.getElementById("signup").href;
localStorage.setItem("link", hrefValue);
