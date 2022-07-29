const collapse = document.querySelector("#collapse");
const menuList = document.querySelector("#menuList");

function collapseMenu() {
    if (menuList.classList.contains("hidden")) {
        menuList.classList.remove("hidden"); 
    } else {
        menuList.classList.add("hidden");
    }
}

collapse.addEventListener("click", collapseMenu);