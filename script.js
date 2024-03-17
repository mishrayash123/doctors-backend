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

var MenuItems = document.getElementById('MenuItems');
MenuItems.style.maxHeight = '0px';

function menutoggle() {
    if (MenuItems.style.maxHeight == '0px') {
        MenuItems.style.maxHeight = '200px';
    } else {
        MenuItems.style.maxHeight = '0px';
    }
}