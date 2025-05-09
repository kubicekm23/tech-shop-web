function menuClicked() {
    let navButton = document.getElementById("navButton");
    let navMenu = document.getElementById("navMenu");

    if (navMenu.style.display == "block") 
    {
        navMenu.style.display = "none";
        navButton.textContent = "menu";
    }
    else 
    {
        navMenu.style.display = "block";
        navButton.textContent = "close";
    }
}