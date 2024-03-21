const buttons = document.querySelectorAll(".all");

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        buttons.forEach(btn=>{
            btn.classList.remove("selected");
        });
        button.classList.add("selected");
    });
});

function openForm() {
    document.getElementById("myForm").style.display = "block";
}
  
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

function menutoggle() {
    if (MenuItems.style.maxHeight == '0px') {
        MenuItems.style.maxHeight = '200px';
    } else {
        MenuItems.style.maxHeight = '0px';
    }
}

document.getElementById("ent_specialist").addEventListener("click", function(){
    window.location.href = "doctors.html"
})

document.getElementById("endocrinologis").addEventListener("click", function(){
    window.location.href = "doctors.html"
})

document.getElementById("oncologists").addEventListener("click", function(){
    window.location.href = "doctors.html"
})

document.getElementById("pulmonologist").addEventListener("click", function(){
    window.location.href = "doctors.html"
})

document.getElementById("endocrinologis").addEventListener("click", function(){
    window.location.href = "doctors.html"
})

document.getElementById("veterinarian").addEventListener("click", function(){
    window.location.href = "doctors.html"
})

document.getElementById("radiologist").addEventListener("click", function(){
    window.location.href = "doctors.html"
})